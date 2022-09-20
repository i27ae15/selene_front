import React, { useEffect, useState, useRef } from 'react';

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
    const [canWrite, setCanWrite] = useState(true);
    const messagesEndRef = useRef(null)
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);
    

    socket.onmessage = (data) => {

        let response = JSON.parse(data.data);
        
        response.responses.forEach(element => {
            element.fromSelene = true;
        });

        setMessages([...messages, ...response.responses]);    

    }

    // useEffect(() => {
    //     // action on update of movies
    // }, [messages]);

    
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


    function sendOption(option, optionIndex) {

        let messageObject = {
            'message': option,
            'fromSelene': true,
            'messageType': 'option',
        }
        
        let lastObjectIndex = messages.length - 1;

        let newMessageArray = messages.map((message, i) => {
            if (i === lastObjectIndex) {
                return {...message, selectedOption: optionIndex};
            }

            return message;
        });

        socket.send(JSON.stringify(messageObject));

        console.log(newMessageArray);


        activateChat();
        setMessages(newMessageArray);
    }


    function deactivateChat() {
        setCanWrite(false);
    }


    function activateChat() {
        setCanWrite(true);
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

                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", overflowY: 'scroll', height: '450px'}}>
                                                  

                                <div className='banner'>
                                    {/* This banner must be passed when the socket connection is initialized*/}
                                    <img src="https://images.nightcafe.studio/jobs/T00gudABG5TqSEpoJl1d/T00gudABG5TqSEpoJl1d--2--BFO7Q_8x.jpg?tr=w-1080,c-at_max" alt="image-banner" className='image-banner'/>
                                    <br />
                                    <br />
                                    <h4>Hello over there, I am Selene, the Titan of the Moon</h4>
                                    <hr />
                                </div>
                                

                                { 
                                    socket && 
                                    (
                                    
                                        messages.map(m => {

                                            return <Message message={m.message} fromSelene={m.fromSelene}
                                            messageType={m.type} inputType={m.input_type} label={m.label} 
                                            url={m.url} title={m.title} description={m.description} 
                                            options={m.options} selectedOption={m.selectedOption} 
                                            sendOption={sendOption} deactivateChat={deactivateChat}
                                            activateChat={activateChat}
                                            />
                                        })
                                    
                                    )
                                }   

                                <div ref={messagesEndRef} />


                            </div>


                            {
                                canWrite && 
                                (
                                    <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                        <img src="https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg" alt="avatar 3" 
                                        style={{width: "40px", height: "100%", borderRadius: "50%"}} />
                                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Type message" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)}/>
                                        <a className="ms-3" href="#!" onClick={sendMessage} ><i className="fas fa-paper-plane"></i>Send</a>
                                    </div>
                                )
                            }
                            

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}


export default Chat;