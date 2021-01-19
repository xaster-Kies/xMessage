import React, { useState } from 'react'
import './Chat.css'

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
            </div>
        </div>
    )
}

export default Chat
