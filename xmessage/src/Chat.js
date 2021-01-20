import React, { useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone'
import IconButton from '@material-ui/core/IconButton'

function Chat() {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

        //Firebase Clever stuff!!

        setInput("");
    };

    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <h4>To:<span class__name="chat__name"> Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            {/* Chat messages */}
            <div className="chat__messages">
                <h2>I am a msg</h2>
            </div>


            {/* Chat input */}
            <div className="chat__input">
            <form>
                <input value={input}
                 placeholder="xMessage"
                 onChange = {(e) => setInput(e.target.value)}
                  type="text"
                  />
                <button onClick={sendMessage}>Send Message</button>
            </form>
            <IconButton>
                <MicNoneIcon className = "chat__mic"/>
            </IconButton>
            </div>
        </div>
    )
}

export default Chat
