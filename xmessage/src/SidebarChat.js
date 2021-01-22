import React from 'react'
import "./SidebarChat.css"
import {Avatar} from '@material-ui/core'


function SidebarChat(id, chatName) {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidbarChat__info">
                <h3>{chatName}</h3>
                <p>last msg sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
