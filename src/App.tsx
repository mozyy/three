import React, { useEffect } from 'react';
import './App.css';
import Ex1 from './examples/Ex1';
import Ex2 from './examples/Ex2';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <Ex1 />
      <Ex2 />
    </div>
  );
}

export default App;
