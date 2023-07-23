import React, { useState } from 'react';
import { List, Input, Button, Avatar } from 'antd';
import { useSpring, animated } from 'react-spring';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { TextArea } = Input;

const prebuiltResponses = [
  'Sounds great!',
  'Interesting perspective.',
  'Could you provide more details?',
  'Thanks for sharing that.',
  'I see where you’re coming from.',
];

function ChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
      setMessage('');

      const randomResponse = prebuiltResponses[Math.floor(Math.random() * prebuiltResponses.length)];
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: randomResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Chat</h2>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(message, index) => (
          <animated.div style={props} key={index}>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar icon={message.sender === 'user' ? <UserOutlined /> : <RobotOutlined />} />
                }
                title={message.sender}
                description={message.text}
              />
            </List.Item>
          </animated.div>
        )}
      />
      <div>
        <TextArea rows={1} value={message} onChange={handleMessageChange} />
        <Button type="primary" onClick={handleSendMessage} style={{ marginTop: '10px' }}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChatBox;
