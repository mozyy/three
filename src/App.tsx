import React, { useEffect } from 'react';
import './App.css';
import Ex1 from './examples/Ex1';
import Ex2 from './examples/Ex2';
import Ex3 from './examples/Ex3';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="App">
      {/* <Ex1 />
      <Ex2 /> */}
      <Ex3 />
    </div>
  );
}

export default App;
