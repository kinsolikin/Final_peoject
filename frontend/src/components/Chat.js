import React, { useState } from 'react';


const Chat = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    {
      id: 0,
      name: 'Primary',
      avatar: './icon/profilechat1.png',
      lastMsg: 'Sure, u have a good design dude! come join...',
      messages: [{ text: 'Hello!', sender: 'them' }, { text: 'Sure, u have a good design dude! come join...', sender: 'them' }],
      status: 'Online'
    },
    {
      id: 1,
      name: 'High Star',
      avatar: './icon/profilchat2.png',
      lastMsg: 'Nice design btw',
      messages: [{ text: 'Nice design btw', sender: 'them' }],
      status: 'Offline'
    },
    {
      id: 2,
      name: 'Dominic Martin',
      avatar: './icon/profilchat3.png',
      lastMsg: "what's good hommies?",
      messages: [{ text: "what's good hommies?", sender: 'them' }],
      status: 'Offline'
    },
    {
      id: 3,
      name: 'UnSensor',
      avatar: './icon/profilchat4.png',
      lastMsg: 'Sure, contact me in @UnSensor for more infor...',
      messages: [{ text: 'Sure, contact me in @UnSensor for more infor...', sender: 'them' }],
      status: 'Offline'
    }
  ]);

  const handleChatClick = (id) => {
    setActiveChat(id);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const updatedChats = [...chats];
      updatedChats[activeChat].messages.push({ text: message, sender: 'me' });
      setChats(updatedChats);
      setMessage('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const updatedChats = [...chats];
        updatedChats[activeChat].messages.push({ text: event.target.result, sender: 'me', type: 'image' });
        setChats(updatedChats);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="containerchat">
        <div className="sidebar">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => handleChatClick(chat.id)}
            >
              <div className="avatar">
                <img src={chat.avatar} alt={chat.name} />
              </div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-last-msg">{chat.lastMsg}</div>
              </div>
              {chat.status === 'Online' && (
                <div className="chat-status">
                  <div className="status-dot"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <div className="avatar">
                <img src={chats[activeChat].avatar} alt={chats[activeChat].name} />
              </div>
              <div className="chat-name">{chats[activeChat].name}</div>
              <span className="status">{chats[activeChat].status}</span>
            </div>
          </div>
          <div className="chat-messages">
            {chats[activeChat].messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.type === 'image' ? (
                  <img src={msg.text} alt="sent image" className="chat-image" />
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <button className="add-button">+</button>
            <input
              type="file"
              id="file-input"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="file-input">
              <img className="kirim" src="./icon/clip.png" alt="send" />
            </label>
            <input
              type="text"
              placeholder="Type Something ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
              <img src="./icon/send.png" alt="Send" className="send-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
