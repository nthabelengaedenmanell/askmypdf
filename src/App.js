import React, { useState } from 'react';
import './App.css';
import PDFUpload from './components/PDFUpload';
import Chat from './components/Chat';

function App() {
  const [summary, setSummary] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ask My PDF</h1>
      </header>
      <PDFUpload setSummary={setSummary} />
      <Chat summary={summary} />
    </div>
  );
}

export default App;