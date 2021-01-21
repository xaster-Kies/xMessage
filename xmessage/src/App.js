import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';
import Xmessage from './Xmessage'
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     if(authUser){
       //user Logged in
    
     }else {
       //user is Logged out
     }
   })
  }, [user])
  return (
    <div className="app">
      {user ? <Xmessage/> : <Login/>}
    </div>
  );
}

export default App;
