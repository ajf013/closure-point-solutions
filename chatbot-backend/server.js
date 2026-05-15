// server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));

const server = http.createServer(app);
const io = new Server(server, { 
  cors: { 
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
  } 
});

console.log('Starting server... PORT:', process.env.PORT || 8080);

// Azure OpenAI Setup
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureApiKey = process.env.AZURE_OPENAI_KEY;
const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID;

let client;
try {
  if (endpoint && azureApiKey) {
    client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  } else {
    console.warn("WARNING: Azure OpenAI credentials are not fully configured in the environment.");
  }
} catch (e) {
  console.error("OpenAI Client Init Error:", e);
}

// In-memory session storage
const sessions = {}; 

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Chatbot backend is running successfully!');
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('join_chat', (data) => {
    const { sessionId, role } = data;
    socket.join(sessionId);
    
    if (role === 'user' && !sessions[sessionId]) {
      sessions[sessionId] = { 
        status: 'bot', 
        step: 'ask_name', 
        leadInfo: {}, 
        messages: [] 
      };
      
      const greeting = { sender: 'bot', text: 'Hi! Welcome to Closure Point Solutions. Before we begin, may I please have your name?', timestamp: new Date() };
      sessions[sessionId].messages.push(greeting);
      socket.emit('receive_message', greeting);
    }
    
    if (role === 'agent') {
      socket.join('agents_room'); 
      socket.emit('all_sessions', sessions);
    }
  });

  socket.on('send_message', async (data) => {
    const { sessionId, text, role } = data;
    const session = sessions[sessionId];
    if (!session) return;

    const incomingMsg = { sender: role, text, timestamp: new Date() };
    session.messages.push(incomingMsg);
    io.to(sessionId).emit('receive_message', incomingMsg);

    if (role === 'agent') return;

    if (role === 'user' && session.status === 'bot') {
      let botReply = '';

      if (session.step === 'ask_name') {
        session.leadInfo.name = text;
        session.step = 'ask_mobile';
        botReply = `Nice to meet you, ${text}! What is your mobile number?`;
      } 
      else if (session.step === 'ask_mobile') {
        session.leadInfo.mobile = text;
        session.step = 'ask_email';
        botReply = `Thank you. And what is your email address?`;
      }
      else if (session.step === 'ask_email') {
        session.leadInfo.email = text;
        session.step = 'ask_service';
        botReply = `Got it. Lastly, what service or assistance are you looking for today?`;
      }
      else if (session.step === 'ask_service') {
        session.leadInfo.service = text;
        session.step = 'agent_handoff';
        session.status = 'agent';
        botReply = `Thank you for the details. I will now transfer this chat to a live agent. Please wait...`;
        
        io.to('agents_room').emit('agent_requested', { sessionId, session });
        io.to('agents_room').emit('all_sessions', sessions);
      }

      if (botReply) {
        const botMsg = { sender: 'bot', text: botReply, timestamp: new Date() };
        session.messages.push(botMsg);
        setTimeout(() => {
          io.to(sessionId).emit('receive_message', botMsg);
        }, 800);
      }
    }
  });

  socket.on('request_direct_agent', (data) => {
    const { sessionId } = data;
    if (sessions[sessionId]) {
      sessions[sessionId].status = 'agent';
      sessions[sessionId].step = 'manual_handoff';
      
      const msg = { sender: 'bot', text: 'I am connecting you to a live agent immediately. Please wait...', timestamp: new Date() };
      sessions[sessionId].messages.push(msg);
      io.to(sessionId).emit('receive_message', msg);
      
      io.to('agents_room').emit('agent_requested', { sessionId, session: sessions[sessionId] });
      io.to('agents_room').emit('all_sessions', sessions);
    }
  });

  socket.on('accept_chat', (data) => {
    const { sessionId, agentName } = data;
    if (sessions[sessionId]) {
      sessions[sessionId].assignedAgent = agentName || socket.id;
      sessions[sessionId].status = 'active';
      
      // Save Lead Data to File
      try {
        const leadData = {
          timestamp: new Date().toISOString(),
          sessionId,
          agent: sessions[sessionId].assignedAgent,
          ...sessions[sessionId].leadInfo
        };
        const filePath = path.join(__dirname, 'leads.json');
        let leads = [];
        if (fs.existsSync(filePath)) {
          leads = JSON.parse(fs.readFileSync(filePath));
        }
        leads.push(leadData);
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
      } catch (e) {
        console.error("Failed to save lead:", e);
      }

      io.to('agents_room').emit('all_sessions', sessions);
      io.to(sessionId).emit('receive_message', { 
        sender: 'system', 
        text: `${agentName || 'An agent'} has joined the chat.`, 
        timestamp: new Date() 
      });
    }
  });

  socket.on('resolve_chat', (data) => {
    const { sessionId } = data;
    if (sessions[sessionId]) {
      io.to(sessionId).emit('chat_resolved', { message: 'This conversation has been resolved by the agent.' });
      delete sessions[sessionId];
      io.to('agents_room').emit('all_sessions', sessions);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Chat server running on port ${PORT}`));
