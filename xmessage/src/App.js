import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import Xmessage from './Xmessage'
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     if(authUser){
       //user Logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName
      }))
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
