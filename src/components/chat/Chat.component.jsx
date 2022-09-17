import React, { useEffect, useState } from 'react';

import Message from '../message/Message.component';

import './Chat.styles.css';

const socket = new WebSocket(`ws://localhost:8000/chat/testing/`);


socket.onopen = (e) => {

    let object = {
        'message': 'Hello Selene',
        'fromSelene': true,
        'messageType': 'text',
    }

    socket.send(JSON.stringify(object));
}

function Chat() {

    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState();

    
    socket.onmessage = (data) => {

        let response = JSON.parse(data.data);
        
        response.responses.forEach(element => {
            element.fromSelene = true;
        });

        setMessages([...messages, ...response.responses]);    

    }

    
    function sendMessage() {

        let messageObject = {
            'message': currentMessage,
            'fromSelene': true,
            'messageType': 'text',
        }

        socket.send(JSON.stringify(messageObject));

        messageObject.fromSelene = false;
        setMessages([...messages, messageObject]);
        setCurrentMessage('');
    }

    function sendOption(option) {

        let messageObject = {
            'option': option,
            'fromSelene': true,
            'messageType': 'option',
        }

        socket.send(JSON.stringify(messageObject));

        messageObject.fromSelene = false;
        // setMessages([...messages, messageObject]);
        // setCurrentMessage('');
    }


    return (

        <section style={{backgroundColor: "#eee"}}>
             
            <div className="container py-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">

                        <div className="card" id="chat2">
                            <div className="card-header d-flex justify-content-between align-items-center p-3">
                                <h5 className="mb-0">Selene</h5>
                            </div>

                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative"}}>
                                                  

                                <div className='banner'>
                                    {/* This banner must be passed when the object is the socket connectoin is made */}
                                    <img src="https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo-1200-80.jpg" alt="image-banner" className='image-banner'/>
                                    <br />
                                    <br />
                                    <h4>Hello over there, come here and learn what a black hole is</h4>
                                    <hr />
                                </div>
                                        

                                { 
                                    socket && 
                                    (
                                    
                                        messages.map(m => {
                                            return <Message message={m.message} fromSelene={m.fromSelene} 
                                            inputType={m.input_type} label={m.label} url={m.url} 
                                            options={m.options} sendOption={sendOption}/>
                                        })
                                    
                                    )
                                }   

                            </div>



                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                <img src="https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg" alt="avatar 3" 
                                style={{width: "40px", height: "100%", borderRadius: "50%"}} />
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