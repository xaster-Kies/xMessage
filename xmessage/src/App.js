import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Xmessage from './Xmessage'

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? <Xmessage/> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
