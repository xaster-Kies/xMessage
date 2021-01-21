import React from 'react'
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
    
    userEffect(() => {
        //No SQL structure of getting back
        db.collection('chats').onSnapshot((snapshot) => (
            setChats(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()

            }))
        ))
    }[]);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar onClick={
                () => auth().logout } className="sidebar__avatar" src = {user.photo}/>
            <div className="sidebar__input">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>

            <IconButton variant = "outlined" className="sidebar__inputButton">
                <RateReviewOutlinedIcon/>
            </IconButton>
            
            </div>

            <div className="sidebar__chats">
                //Clever chat rendering
                {chats.map(chat => {
                    <SidebarChat/>
                })}
                
            </div>
        </div>
    )
}

export default Sidebar
