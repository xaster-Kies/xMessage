import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined"
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import { useSelector } from 'react-redux'
import db, { auth } from './firebase'
import { selectUser } from './features/userSlice'


function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        //No SQL structure of getting back
        db.collection("chats")
        .onSnapshot((snapshot =>
            setChats(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))));
    }, []);

    const addChat = () => {

        const chatName = prompt('Please Enter a Chat Name');

        if (chatName) {
            db.collection("chats").add({
                chatName: chatName,
            });
        }  
    }
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar onClick={
                () => auth.signOut() } className="sidebar__avatar" src = {user.photo}/>
            <div className="sidebar__input">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>

            <IconButton variant = "outlined" className="sidebar__inputButton">
                <RateReviewOutlinedIcon onClick={addChat}/>
            </IconButton>
            
            </div>

            <div className="sidebar__chats">
                {/* Clever chat renderer */}
                {chats.map(({id, data: {chatName} }) => {
                    <SidebarChat key= {id} id={id} chatName={chatName}/>
                })}
        
            </div>
        </div>
    )
}

export default Sidebar
