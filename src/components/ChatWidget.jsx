import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { X, Send, MessageSquare } from 'lucide-react';
import './ChatWidget.css';

// Connect to the backend
const BACKEND_URL = import.meta.env.PROD 
  ? 'https://cps-chat-backend-app-fcruz.azurewebsites.net' 
  : 'http://localhost:8080';

const socket = io(BACKEND_URL, {
  transports: ['polling', 'websocket']
});

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  
  // Generate a unique ID for this visitor session
  const sessionIdRef = useRef(`user_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const starterSuggestions = [
    "Supply Chain & Logistics hiring",
    "Contract Staffing inquiry",
    "Connect with a live advisor"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on('receive_message', (message) => {
      setIsTyping(false); 
      setMessages((prev) => [...prev, message]);
    });

    socket.on('chat_resolved', (data) => {
      setMessages((prev) => [...prev, { sender: 'system', text: data.message, timestamp: new Date() }]);
      setIsTyping(false);
    });

    socket.emit('join_chat', { sessionId: sessionIdRef.current, role: 'user' });

    return () => {
      socket.off('receive_message');
      socket.off('chat_resolved');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    socket.emit('send_message', { sessionId: sessionIdRef.current, text: input, role: 'user' });
    setInput('');
    setIsTyping(true);
  };

  const sendQuickReply = (text) => {
    socket.emit('send_message', { sessionId: sessionIdRef.current, text, role: 'user' });
    setIsTyping(true);
  };

  const confirmEndChat = () => {
    socket.emit('resolve_chat', { sessionId: sessionIdRef.current });
    setMessages([]);
    setShowEndConfirm(false);
    setIsOpen(false);
    sessionIdRef.current = `user_${Math.random().toString(36).substr(2, 9)}`;
  };

  const requestAgentDirectly = () => {
    socket.emit('request_direct_agent', { sessionId: sessionIdRef.current });
  };

  const getAvatar = (role) => {
    if (role === 'user') {
      return (
        <div className="avatar user-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      );
    }
    return <img src="/logo.png" alt="CPS" className="avatar logo-avatar" />;
  };

  return (
    <div className="chat-widget-wrapper">
      {!isOpen && (
        <div className="chat-launcher-container">
          <div className="chat-launcher-pill" onClick={() => setIsOpen(true)}>
            <span className="chat-live-pulse" />
            <span>Chat with us</span>
          </div>
          <button 
            className="chat-toggle-button" 
            onClick={() => setIsOpen(true)}
            aria-label="Open support chat"
          >
            <img src="/logo.png" alt="Chat" className="bubble-logo" />
          </button>
        </div>
      )}
      
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-title">
              <MessageSquare size={16} />
              <h4>Closure Point Support</h4>
            </div>
            <div className="header-actions">
              <button 
                type="button"
                className="end-chat-btn" 
                onClick={() => setShowEndConfirm(true)} 
                title="End Session"
              >
                End Chat
              </button>
              <button 
                type="button"
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat window"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {showEndConfirm && (
            <div className="chat-confirm-overlay">
              <div className="confirm-modal-box">
                <p>Are you sure you want to end this chat session?</p>
                <div className="confirm-modal-buttons">
                  <button type="button" className="confirm-yes-btn" onClick={confirmEndChat}>
                    End Chat
                  </button>
                  <button type="button" className="confirm-cancel-btn" onClick={() => setShowEndConfirm(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                {msg.sender !== 'user' && getAvatar(msg.sender)}
                <div className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                  
                  {i === 0 && msg.sender === 'bot' && (
                    <div className="bot-options">
                      <button type="button" className="option-btn" onClick={requestAgentDirectly}>
                        Talk to Live Agent
                      </button>
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && getAvatar('user')}
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="starter-chips-container">
                <span className="starter-chips-label">Suggested:</span>
                <div className="starter-chips">
                  {starterSuggestions.map((item, idx) => (
                    <button 
                      key={idx}
                      type="button"
                      className="starter-chip"
                      onClick={() => sendQuickReply(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
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
              ref={inputRef}
              type="text"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type your message..." 
            />
            <button type="submit" aria-label="Send message">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
