import React, { useEffect, useState } from 'react';

import Message from '../message/Message.component';

import './Chat.styles.css';

const socket = new WebSocket(`ws://localhost:8000/chat/testing/`);

socket.onopen = (e) => {
    console.log('here');
    socket.send('Hi there!');
}

function Chat() {

    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState();

    
    socket.onmessage = (data) => {
        console.log(data);
        let message = data.data;
        let messageObject = {fromSelene: false};
        let iterations = 0;
        let separatorAt;

        while (true){
            
            separatorAt = message.indexOf('%@%');

            if (separatorAt == -1){
                break;
            }

            if (iterations == 0){
                messageObject.message = message.slice(0, separatorAt);
            
            } else if (iterations == 1){
                messageObject.messageType = message.slice(0, separatorAt);
            
            } else if (iterations == 2){
                messageObject.label = message.slice(0, separatorAt) == 'true';
            }
            message = message.slice(separatorAt + 3);
            iterations++;

        }

        data.data.substring()

        setMessages([...messages, messageObject]);

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

        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">

                        <div className="card" id="chat2">
                            <div className="card-header d-flex justify-content-between align-items-center p-3">
                                <h5 className="mb-0">Chat</h5>
                            </div>

                            { socket && 
                                (
                                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative"}}>
            
                                {
                                    messages.map(m => {
                                        return <Message message={m.message} fromSelene={m.fromSelene} />
                                    })
                                }
                                
                                </div>
                                )
                            }


                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 3" 
                                style={{width: "40px", height: "100%"}} />
                                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Type message" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)}/>
                                <a className="ms-3" href="#!" onClick={sendMessage} ><i className="fas fa-paper-plane"></i>Send</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}


export default Chat;