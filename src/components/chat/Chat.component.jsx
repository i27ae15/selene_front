import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './Chat.styles.css';

import Message from '../message/Message.component';

const socket = new WebSocket(`ws://localhost:8000/chat/testing/`);

socket.onopen = (e) => {
    console.log('here');
    socket.send('Hi there!');
}

function Chat() {

    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState();

    
    socket.onmessage = (data) => {
        let message = {
            'message': data.data,
            'fromSelene': true,
        };
        setMessages([...messages, message]);

    }

    
    function sendMessage() {
        socket.send(currentMessage);

        let message = {
            'message': currentMessage,
            'fromSelene': false,
        };

        setMessages([...messages, message]);
        setCurrentMessage('');
    }


    return (
        <div id="app" style={{display: 'flex', height:'100%', justifyContent: 'end', marginRight: '3%'}}>

         
            <div className="card" style={{width: '35%', height: '85%', alignSelf: 'end'}}>
                <div className="card-header">
                    <div className="media d-flex align-items-center">
                        <div className="avatar me-3">
                            <img src="assets/images/selene.JPG" alt="" />
                            <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="name flex-grow-1">
                            <h6 className="mb-0">Selene</h6>
                            <span className="text-xs">Online</span>
                        </div>
                        <button className="btn btn-sm">
                            <i data-feather="x"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body pt-4 bg-grey">
                    <div className="chat-content" id="chat-body" >
                    { socket && (
                        
                        <div className="chat-container">

                        {
                            messages.map(m => {
                                return <Message message={m.message} fromSelene={m.fromSelene}/>
                            })
                        }
                        
                        </div>
                        )
                    }
                    </div>
                </div>
                <div className="card-footer">
                    <div className="message-form d-flex flex-direction-column align-items-center">
                        <a href="http://" className="black"><i data-feather="smile"></i></a>
                        <div className="d-flex flex-grow-1 ml-4">
                            <input 
                            id="input-text" 
                            type="text" 
                            className="form-control" 
                            placeholder="Type your message.." 
                            style={{marginRight: '10px'}} 
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            value={currentMessage}
                            />
                            <button 
                            className="btn btn-primary"
                            onClick={sendMessage}
                            
                            >Send</button>
                        </div>
                    </div>
                </div>

            </div>
               
        </div>
    )

}


export default Chat;