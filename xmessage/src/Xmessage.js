import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import "./xmessage.css"

function xmessage() {
    return (
        <div className="xmessage">
            {/* Sidebar */}
            <Sidebar/>
            
            {/* Chat */}
            <Chat/>
        </div>
    )
}

export default xmessage
