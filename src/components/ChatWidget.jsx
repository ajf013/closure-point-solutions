import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './ChatWidget.css';

// Connect to the backend
const BACKEND_URL = import.meta.env.PROD 
  ? 'https://cps-chat-backend-app-fcruz.azurewebsites.net' 
  : 'http://localhost:8080';

const socket = io(BACKEND_URL, {
  transports: ['polling', 'websocket']
});



console.log('Chatbot Backend URL:', BACKEND_URL);

socket.on('connect', () => console.log('Successfully connected to chatbot backend!'));
socket.on('connect_error', (err) => console.error('Chatbot connection error:', err));

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Generate a unique ID for this visitor session
  const sessionIdRef = useRef(`user_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log('ChatWidget: Setting up socket listeners...');
    
    socket.on('receive_message', (message) => {
      console.log('ChatWidget: Received message:', message);
      setIsTyping(false); 
      setMessages((prev) => [...prev, message]);
    });

    socket.on('chat_resolved', (data) => {
      console.log('ChatWidget: Chat resolved:', data);
      setMessages((prev) => [...prev, { sender: 'system', text: data.message, timestamp: new Date() }]);
      setIsTyping(false);
    });

    console.log('ChatWidget: Joining chat with session:', sessionIdRef.current);
    socket.emit('join_chat', { sessionId: sessionIdRef.current, role: 'user' });

    return () => {
      socket.off('receive_message');
      socket.off('chat_resolved');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    socket.emit('send_message', { sessionId: sessionIdRef.current, text: input, role: 'user' });
    setInput('');
    setIsTyping(true); // Start typing animation after user sends
  };

  const endChat = () => {
    if (window.confirm("Are you sure you want to end this session? This will clear your chat history.")) {
      socket.emit('resolve_chat', { sessionId: sessionIdRef.current });
      setMessages([]);
      setIsOpen(false);
      // Generate new ID for next session
      sessionIdRef.current = `user_${Math.random().toString(36).substr(2, 9)}`;
    }
  };

  const requestAgentDirectly = () => {
    socket.emit('request_direct_agent', { sessionId: sessionIdRef.current });
  };

  const getAvatar = (role) => {
    if (role === 'user') {
      return (
        <div className="avatar user-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      );
    }
    // Bot or Agent use the company logo
    return <img src="/logo.png" alt="CPS" className="avatar logo-avatar" />;
  };

  return (
    <div className="chat-widget-wrapper">
      {!isOpen && (
        <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
          <img src="/logo.png" alt="Chat" className="bubble-logo" />
        </button>
      )}
      
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Closure Point Support</h4>
            <div className="header-actions">
              <button className="end-chat-btn" onClick={endChat} title="End Session">End Chat</button>
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                {msg.sender !== 'user' && getAvatar(msg.sender)}
                <div className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                  
                  {/* If it's the first bot message, offer a direct agent option */}
                  {i === 0 && msg.sender === 'bot' && (
                    <div className="bot-options">
                      <button className="option-btn" onClick={requestAgentDirectly}>Talk to Live Agent</button>
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && getAvatar('user')}
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-row bot-row">
                {getAvatar('bot')}
                <div className="chat-bubble bot typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chat-input-area" onSubmit={sendMessage}>
            <input 
              type="text"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..." 
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
