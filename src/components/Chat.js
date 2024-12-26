import React, { useState } from 'react';
import axios from 'axios';

function Chat({ summary }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleFollowUp = () => {
    axios.post('/api/chat', { question })
      .then(res => {
        setResponse(res.data.answer);
      })
      .catch(err => {
        console.error('Error fetching answer:', err);
      });
  };

  return (
    <div style={chatContainerStyle}>
      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
      <div>
        <h2>Have a follow-up question?</h2>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          style={inputStyle}
          placeholder="Type your question here..."
        />
        <button onClick={handleFollowUp}>Ask</button>
      </div>
      {response && (
        <div>
          <h3>Answer:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

const chatContainerStyle = {
  margin: '20px',
  padding: '20px',
  backgroundColor: '#1e1e1e',
  borderRadius: '5px',
};

const inputStyle = {
  padding: '10px',
  width: '80%',
  marginRight: '10px',
  borderRadius: '4px',
  border: '1px solid #2196f3',
  backgroundColor: '#2c2c2c',
  color: '#ffffff',
};

export default Chat;