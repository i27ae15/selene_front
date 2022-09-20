import React, { useEffect, useState } from 'react';

import './Message.styles.css'


function Message(messageObject) {

    let seleneImage = 'https://images.nightcafe.studio/jobs/ot3Uy98JQQNKb48EukXZ/ot3Uy98JQQNKb48EukXZ--3--Y57QM_2x.jpg?tr=w-1080,c-at_max'

    // s https://images.nightcafe.studio/jobs/ot3Uy98JQQNKb48EukXZ/ot3Uy98JQQNKb48EukXZ--3--Y57QM_2x.jpg?tr=w-1080,c-at_max

    // black hole https://images.nightcafe.studio/jobs/r5Cssbuno2v1lNqKX1bV/r5Cssbuno2v1lNqKX1bV--1--QOU65_2x.jpg?tr=w-1080,c-at_max

    return (
        
        messageObject.fromSelene ? 
            (
                messageObject.messageType === 'text' ?
                (
                    <div className="d-flex flex-row justify-content-start chat-message">
                        <img src={seleneImage} className='message-avatar' alt="avatar 1"/>
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                            {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                        </div>
                        {messageObject.activateChat()}
                    </div>
                )

                : messageObject.messageType === 'media' ?

                (
                    <div className='banner banner-in-chat'>
                        <img src={messageObject.url} alt="image-banner" className='image-banner'/>
                        <br />
                        <br />
                        <h4>{messageObject.title}</h4>
                        <p>{messageObject.description}</p>
                        <hr />
                        <div className="d-flex flex-row justify-content-start">
                            <img src={seleneImage} className='message-avatar' alt="avatar 1"/>
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                                {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                            </div>
                        </div>
                        {messageObject.activateChat()}
                    </div>
                )

                : messageObject.messageType === 'input' && 
                (   
                    <>
                    {
                        messageObject.inputType === 'options' && 
                        (
                            <div className='optionsContainer' style={{textAlign: "center"}}>
                                <h4>{messageObject.message}</h4>
                                <div className='options-container row g-3'>

                                    {
                                        messageObject.options.map((option, index) => {
                                            console.log(messageObject);
                                            if (messageObject.selectedOption >= -1) {
                                                if (messageObject.selectedOption === index) {
                                                    return (
                                                        <div className='col-4'>
                                                            <button type="button" class="btn btn-outline-dark btn-lg btn-selene" value={option} disabled={true}>{option}</button>
                                                        </div>
                                                    )
                                                }

                                            } else {
                                                return (
                                                    <div className='col-4'>
                                                        <button type="button" class="btn btn-outline-dark btn-lg btn-selene" value={option} 
                                                        onClick={(e) => {messageObject.sendOption(e.target.value, index)}}>{option}</button>
                                                    </div> 
                                                )
                                            }


                                            
                                        })
                                    }        
                                </div>
                                {messageObject.deactivateChat()}
                            </div>
                        )
                    }
                    </>
                )
            )

            :

            (
                <div className="d-flex flex-row justify-content-end chat-message">
                    <img src="https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg" 
                    alt="avatar 1" className='message-avatar'/>
                    <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                    </div>
                    {messageObject.activateChat()}
                </div> 
            )

    )

}

export default Message;



// {/* This div will be called when there is a image field in the selene response */}
// <div className='banner banner-in-chat'>
// {/* This banner must be passed when the object is the socket connectoin is made */}
// <img src="https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo-1200-80.jpg" alt="image-banner" className='image-banner'/>
// <br />
// <br />
// <h4>Hello over there, come here and learn what a black hole is</h4>
// <hr />
// </div>


// when the user needs to choose an option:

{/* <div className='options-container row g-3'>
                                        
    <div className='col-4'>
        <button type="button" class="btn btn-outline-dark btn-lg btn-selene">Dark</button>
    </div>

    <div className='col-4'>
        <button type="button" class="btn btn-outline-dark btn-lg btn-selene">Dark</button>
    </div>               

</div> */}
