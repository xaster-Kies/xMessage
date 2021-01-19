import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <h2>I am a sidebar</h2>
            hello
            <div className="sidebar__header">
                <Avatar/>
            </div>

            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
