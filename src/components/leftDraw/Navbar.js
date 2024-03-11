import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io('http://localhost:5005');
    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('response', (response) => {
      setResponses((prevResponses) => [...prevResponses, response]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = () => {
    if (socketRef.current) {
      socketRef.current.emit('query', { query });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleSubmit}>Submit</button>
      {responses.map((response, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: response }} />
      ))}
    </div>
  );
};

export default App;