import React from 'react';
import './App.css';
import Messenger from './components/Messenger';

function App() {
  return (
    <React.Fragment>
      <h3>Messenger App</h3>
      <div className='container'>
        <Messenger />
        <Messenger />
        <Messenger />
      </div>
    </React.Fragment>
  );
}

export default App;
