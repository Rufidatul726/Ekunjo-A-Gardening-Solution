import React, { useState } from 'react';
import ChatMessage from './chatmessage.js';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Ignore empty messages

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
