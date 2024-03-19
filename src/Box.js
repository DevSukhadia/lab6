// src/Box.js
import React from 'react';
import './Box.css';

// Box component renders an individual chat box
function Box({ id, title, active, messages, onBoxClick }) {
  return (
    <div
      className={`chat-box ${active ? 'active' : ''}`} // Apply 'active' class if the box is active
      onClick={() => onBoxClick(id)} // Handle click event to change active chat box
    >
      {/* Chat box title */}
      <div className="chat-box-title">{title}</div>
      
      {/* Chat window to display messages */}
      <div className="chat-window">
        {/* Map through messages and render each one */}
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
    </div>
  );
}

export default Box;
