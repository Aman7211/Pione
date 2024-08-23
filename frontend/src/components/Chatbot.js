import React, { useState, useEffect, useRef } from 'react';
import chatrobot from '../assets/images/robot.png';

const recognizedQuestions = {
  "hi":"Hi, Welcome to Pioneer Ventures. How may i assist you ? ",
  "Hi":"Hi, Welcome to Pioneer Ventures. How may i assist you ? ",
  "HI":"Hi, Welcome to Pioneer Ventures. How may i assist you ? ",
 "Hello":"Hi, Welcome to Pioneer Ventures. How may i assist you ?",
 "HELLO":"Hi, Welcome to Pioneer Ventures. How may i assist you ?",
 "hello":"Hi, Welcome to Pioneer Ventures. How may i assist you ?"

};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [showQuestions, setShowQuestions] = useState(true); // State to control question display
  const chatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setLoading(true);
    setShowQuestions(false); // Hide questions list while processing

    // Check if the input matches any recognized questions
    const recognizedResponse = recognizedQuestions[input.trim()];
    if (recognizedResponse) {
      // Respond with the recognized answer
      setMessages((prev) => [...prev, { text: recognizedResponse, sender: 'assistant' }]);
    } else {
      // Respond with "Contact Us" message
      const contactMessage = "For further details kindly contact our team at info@pioneerventure.in or call us at 9810475719";
      setMessages((prev) => [...prev, { text: contactMessage, sender: 'assistant' }]);
    }

    setLoading(false);
    setShowQuestions(true); // Show questions list after response
  };

  const handleQuestionClick = (question) => {
    // Add question message to chat
    setMessages([...messages, { text: question, sender: 'user' }]);
    setInput(question);
    setLoading(true);
    setShowQuestions(false); // Hide questions list while processing

    // Respond with the recognized answer or contact message
    const recognizedResponse = recognizedQuestions[question] || "This question is out of our scope. Please contact us for more information.";
    setMessages((prev) => [...prev, { text: recognizedResponse, sender: 'assistant' }]);
    setLoading(false);
    setShowQuestions(true); // Show questions list after response
  };

  // Close chat when clicking outside of the chat area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Clickable Image */}
      <img
        src={chatrobot} // Replace with the path to your image
        alt="Chatbot"
        className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer z-50"
        onClick={() => setShowForm(!showForm)}
      />

      {/* Chat Form */}
      {showForm && (
        <div ref={chatRef} className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 w-80">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <div className="h-80 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg shadow-md border ${msg.sender === 'user' ? 'bg-[#0387A7] text-white' : 'bg-gray-300 text-black'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-center">Typing...</div>}
          </div>
         {/* Display questions list after response with a gap */}
          {/* {showQuestions && (
            <div className="mb-4">
              {Object.keys(recognizedQuestions).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="block w-full text-left p-2 mb-2 bg-gray-200 rounded-lg shadow-md border"
                >
                  {question}
                </button>
              ))}
            </div>
          )} */}
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button type="submit" className="ml-2 bg-[#0387A7] text-white p-2 rounded-lg">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
