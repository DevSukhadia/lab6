// src/App.js
import React, { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  // State variables
  const [activeChat, setActiveChat] = useState(1); // Active chat box ID
  const [chatBoxes, setChatBoxes] = useState([ // Array of chat boxes
    { id: 1, messages: [] },
    { id: 2, messages: [] },
    { id: 3, messages: [] }
  ]);
  const [inputText, setInputText] = useState(''); // Text input value

  // Function to handle text input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle Enter key press
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && inputText.trim() !== '') {
      sendMessage();
    }
  };

  // Function to send a message
  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const updatedChatBoxes = chatBoxes.map((chatBox) => {
        if (chatBox.id === activeChat) {
          return {
            ...chatBox,
            messages: [...chatBox.messages, inputText]
          };
        }
        return chatBox;
      });
      setChatBoxes(updatedChatBoxes);
      setInputText('');
    }
  };

  // Function to handle chat box click
  const handleChatBoxClick = (chatBoxId) => {
    setActiveChat(chatBoxId);
  };

  // Render the app
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Chat Boxes</h1>
        <h4>**Select the chatbox and Type+Send too send information**</h4>
      </header>
      {/* Main content */}
      <main className="content">
        {/* Chat container */}
        <div className="chat-container">
          {/* Render chat boxes */}
          {chatBoxes.map((chatBox) => (
            <Box
            key={chatBox.id}
            id={chatBox.id}
            title={
              chatBox.id === 1 ? "CSCI 3172 Lec" :
              chatBox.id === 2 ? "CSCI 3172 Lab 1" :
              chatBox.id === 3 ? "CSCI 3172 Lab 2" :
              "Untitled Chat Box"
            }
            active={activeChat === chatBox.id}
            messages={chatBox.messages}
            onBoxClick={handleChatBoxClick}
          />
          
          ))}
        </div>
        {/* Input field and send button */}
        <div className="button-container">
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            className="input-field"
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      </main>
    </div>
  );
}

export default App;
