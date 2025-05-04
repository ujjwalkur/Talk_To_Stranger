import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { ConnectionStatus } from '../utils/types';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'stranger';
  timestamp: Date;
};

interface ChatInterfaceProps {
  connectionStatus: ConnectionStatus;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ connectionStatus }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (connectionStatus === 'connected' && messages.length === 0) {
      // Simulate a welcome message when first connected
      setMessages([
        {
          id: '1',
          text: 'Hi there! What would you like to talk about today?',
          sender: 'stranger',
          timestamp: new Date()
        }
      ]);
    }

    if (connectionStatus === 'disconnected') {
      // Clear messages when disconnected
      setMessages([]);
    }
  }, [connectionStatus]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '' || connectionStatus !== 'connected') return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');
    
    // Simulate stranger's response
    setTimeout(() => {
      const responses = [
        "That's interesting! Tell me more.",
        "I see what you mean. How does that make you feel?",
        "I've been thinking about that too recently.",
        "That's cool! I haven't heard about that before.",
        "I have a similar experience, actually."
      ];
      
      const strangerMessage: Message = {
        id: Date.now().toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'stranger',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, strangerMessage]);
    }, 1500 + Math.random() * 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-grow overflow-y-auto p-4">
        {connectionStatus === 'disconnected' && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              Click "Start Connecting" to chat with a random stranger
            </p>
          </div>
        )}
        
        {connectionStatus === 'connecting' && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-12 h-12 border-4 border-t-purple-600 border-gray-200 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Finding someone to chat with...</p>
          </div>
        )}
        
        {connectionStatus === 'connected' && (
          <div className="space-y-4">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            disabled={connectionStatus !== 'connected'}
            placeholder={connectionStatus === 'connected' ? "Type a message..." : "Connect to start chatting"}
            className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:bg-gray-100 disabled:text-gray-400"
          />
          <button
            type="submit"
            disabled={connectionStatus !== 'connected'}
            className="bg-purple-600 text-white p-3 rounded-r-lg disabled:bg-gray-300"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;