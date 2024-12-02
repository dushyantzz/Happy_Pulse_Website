import { Bot, X, Send } from 'lucide-react';
import { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m your AI Health Assistant. How can I help you today?' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { type: 'user', text: message }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Thank you for your message. Our medical team will respond shortly.' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden">
          <div className="bg-blue-400 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Health Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-400 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;