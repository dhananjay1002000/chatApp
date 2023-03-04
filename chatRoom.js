import { useState, useEffect } from 'react';
import './chatroom.css';

function ChatRoom(props) {
  const { user, socket } = props;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages(prevMessages => [...prevMessages, msg]);
      console.log(messages);
    });
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const message = input.value;
    if (message.trim() !== '') {
      setMessages(prevMessages => [...prevMessages , {user , message}]);  
      socket.emit('chat message', { user, message });
      input.value = '';
    }
  }

  return (
    <div className="chat-room">
      <h2>Chat Room</h2>
      <div className="messages-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user === user ? 'sender' : 'receiver'}`}>
              <div className="message-body">
                <span>{msg.message}</span>
              </div>
              <div className="message-user">{msg.user}</div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="messageInput" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
