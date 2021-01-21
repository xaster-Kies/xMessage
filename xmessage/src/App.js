import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';
import Xmessage from './Xmessage'

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? <Xmessage/> : <Login/>}
    </div>
  );
}

export default App;
