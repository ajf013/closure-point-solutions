import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './AgentPortal.css';

const socket = io('http://localhost:8080', {
  transports: ['polling', 'websocket']
});



socket.on('connect', () => console.log('Agent Portal: Connected to backend'));
socket.on('connect_error', (err) => console.error('Agent Portal: Connection error:', err));


const CANNED_RESPONSES = [
  { trigger: 'greeting', text: 'Hello! I am here to help you today.' },
  { trigger: 'we will get back to you', text: 'Thank you for the information. Our team will get back to you shortly.' },
  { trigger: 'bye', text: 'Thank you for reaching out. Have a great day!' },
  { trigger: 'sorry', text: 'I apologize for the inconvenience.' },
  { trigger: 'resolve', text: 'I have resolved this chat. Please refresh the page if you need to start a new conversation. Thank you!' }
];

export default function AgentPortal() {
  const [activeSessions, setActiveSessions] = useState({});
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [input, setInput] = useState('');
  const [showCanned, setShowCanned] = useState(false);
  const [agentName, setAgentName] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Ask for agent name on first load
    const name = prompt("Enter your Agent Name:") || `Agent_${Math.floor(Math.random()*1000)}`;
    setAgentName(name);

    // Join as an agent to receive alerts
    socket.emit('join_chat', { sessionId: 'admin', role: 'agent' });

    socket.on('all_sessions', (sessions) => {
      setActiveSessions(sessions);
    });

    socket.on('agent_requested', ({ sessionId, session }) => {
      // Play a notification sound or flash title if desired
      setActiveSessions(prev => ({ ...prev, [sessionId]: session }));
    });

    socket.on('receive_message', (message) => {
      // Ask backend for latest sessions to update view
      socket.emit('join_chat', { sessionId: 'admin', role: 'agent' }); 
    });

    return () => {
      socket.off('all_sessions');
      socket.off('agent_requested');
      socket.off('receive_message');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [activeSessions, currentSessionId]);

  const getAvatar = (role) => {
    if (role === 'user') {
      return (
        <div className="agent-avatar user-avatar-circle">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      );
    }
    return <img src="/logo.png" alt="CPS" className="agent-avatar logo-avatar-circle" />;
  };

  const selectSession = (id) => {
    setCurrentSessionId(id);
    socket.emit('join_chat', { sessionId: id, role: 'agent' }); 
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInput(val);
    if (val === '/') {
      setShowCanned(true);
    } else if (showCanned && !val.startsWith('/')) {
      setShowCanned(false);
    }
  };

  const selectCannedResponse = (text) => {
    setInput(text);
    setShowCanned(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !currentSessionId) return;
    
    socket.emit('send_message', { sessionId: currentSessionId, text: input, role: 'agent' });
    setInput('');
    setShowCanned(false);
  };

  const resolveChat = () => {
    if (!currentSessionId) return;
    if (window.confirm("Are you sure you want to resolve this chat? This will close the session for the user.")) {
      socket.emit('resolve_chat', { sessionId: currentSessionId });
      setCurrentSessionId(null);
    }
  };

  const acceptChat = () => {
    if (!currentSessionId) return;
    socket.emit('accept_chat', { sessionId: currentSessionId, agentName });
  };

  // Show both waiting and active sessions in sidebar
  const sessions = Object.entries(activeSessions).filter(([id, s]) => s.status === 'agent' || s.status === 'active');

  return (
    <div className="agent-portal-container">
      {/* Sidebar */}
      <div className="agent-sidebar">
        <h2>Live Agent Queue</h2>
        {sessions.length === 0 && <p className="empty-queue">No users waiting.</p>}
        
        {sessions.map(([id, session]) => (
          <div 
            key={id} 
            onClick={() => selectSession(id)}
            className={`session-card ${currentSessionId === id ? 'active' : ''} ${session.assignedAgent ? 'assigned' : 'waiting'}`}
          >
            <strong>{session.leadInfo?.name || 'Visitor'}</strong>
            <div className="session-status">
              {session.assignedAgent ? `Assigned to: ${session.assignedAgent === agentName ? 'Me' : session.assignedAgent}` : '🟡 Waiting'}
            </div>
          </div>
        ))}
      </div>

      {/* Main Chat View */}
      <div className="agent-chat-view">
        {currentSessionId ? (
          <>
            <div className="chat-header">
              <div className="header-top">
                <h3>Chatting with: {activeSessions[currentSessionId]?.leadInfo?.name || 'Visitor'}</h3>
                <button className="resolve-btn" onClick={resolveChat}>Resolve Chat</button>
              </div>
              <div className="lead-info">
                <span>Contact: {activeSessions[currentSessionId]?.leadInfo?.mobile || 'N/A'} | {activeSessions[currentSessionId]?.leadInfo?.email || 'N/A'}</span> | 
                <span> Service: {activeSessions[currentSessionId]?.leadInfo?.service || 'N/A'}</span>
              </div>
            </div>
            
            <div className="chat-history">
              {activeSessions[currentSessionId]?.messages.map((msg, i) => (
                <div key={i} className={`agent-bubble-wrapper ${msg.sender === 'agent' ? 'right' : 'left'}`}>
                  {msg.sender !== 'agent' && msg.sender !== 'system' && getAvatar(msg.sender)}
                  <div className={`agent-bubble ${msg.sender}`}>
                    {msg.sender === 'system' ? <i>{msg.text}</i> : msg.text}
                  </div>
                  {msg.sender === 'agent' && getAvatar('agent')}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="input-wrapper">
              {showCanned && (
                <div className="canned-responses-menu">
                  <div className="canned-title">Quick Replies (Click to select)</div>
                  {CANNED_RESPONSES.map((resp, i) => (
                     <div 
                        key={i} 
                        className="canned-option"
                        onClick={() => selectCannedResponse(resp.text)}
                      >
                        <strong>/{resp.trigger}</strong>: {resp.text}
                     </div>
                  ))}
                </div>
              )}
              {activeSessions[currentSessionId]?.assignedAgent === agentName ? (
                <form onSubmit={sendMessage} className="agent-form">
                  <input 
                    className="agent-input"
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Type your reply... (Type '/' for quick replies)"
                  />
                  <button type="submit" className="agent-send-btn">Send</button>
                </form>
              ) : (
                <div className="read-only-notice">
                  {activeSessions[currentSessionId]?.assignedAgent 
                    ? `This chat is being handled by ${activeSessions[currentSessionId]?.assignedAgent}.` 
                    : (
                      <div className="accept-container">
                        <span>Accept this chat to start responding.</span>
                        <button className="accept-btn-large" onClick={acceptChat}>Accept Chat</button>
                      </div>
                    )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h3>Select a user from the queue to start chatting.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
