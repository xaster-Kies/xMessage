import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined"
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            hello
            <div className="sidebar__header">
                <Avatar/>
            <div className="sidebar__input">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>

            <IconButton variant = "outlined" className="sidebar__inputButton">
                <RateReviewOutlinedIcon/>
            </IconButton>
            
            </div>

            <div className="sidebar__chats">
                
            </div>
        </div>
    )
}

export default Sidebar
