import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <h4>To:<span class__name="chat__name"> Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            {/* Chat messages */}


            {/* Chat input */}
            <div className="chat__input">
                <input placeholder="xMessage" type="text"/>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Chat
