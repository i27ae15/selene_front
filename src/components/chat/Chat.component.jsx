import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './Chat.styles.css';

import Message from '../message-received/MessageReceived.component';

function Chat() {

    const [socket, setSocket] = useState();
    const [messages, setMessages] = useState();

    useEffect(() => {
        const newSocket = new WebSocket(`ws://localhost:8000/chat/testing/`);
        setSocket(newSocket);
      }, [setSocket]);


    return (
        <div id="app">

            {
                socket && (
                socket.onopen = () => {
                    console.log('WebSocket open');
                  }
                )
            }

            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header position-relative">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                            
                            </div>
                            <div className="sidebar-toggler  x">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main">
                <header className="mb-3">
                    <a href="#" className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3"></i>
                    </a>
                </header>

                <div className="page-heading">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-6 order-md-1 order-last">
                                <h3></h3>
                                <p className="text-subtitle text-muted"></p>
                            </div>
                            <div className="col-12 col-md-6 order-md-2 order-first">
                                <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html"></a></li>
                                        <li className="breadcrumb-item active" aria-current="page"></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
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
                                        {/* { socket && (
                                            
                                            <div className="chat-container">
                                            {console.log('over there')}
                                            <Message socket={socket} />
                                            </div>
                                            )
                                        } */}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="message-form d-flex flex-direction-column align-items-center">
                                            <a href="http://" className="black"><i data-feather="smile"></i></a>
                                            <div className="d-flex flex-grow-1 ml-4">
                                                <input id="input-text" type="text" className="form-control" placeholder="Type your message.." style={{marginRight: '10px'}}/>
                                                <button className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )

}


export default Chat;