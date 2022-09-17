import React, { useEffect, useState } from 'react';


function Message(messageObject) {

    return (
        
        messageObject.fromSelene ? 
            (
                messageObject.messageType === 'text' ?
                (
                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://2.bp.blogspot.com/-N-cqs4IV-eo/UQCn0uEEP5I/AAAAAAAAABY/UY9p6pW7jk0/s1600/selene_by_raptorzysko-d5o3ufo.jpg" alt="avatar 1" style={{width: "45px", height: "100%", borderRadius: "50%"}} />
                        <div>
                            <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                            {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                        </div>
                    </div>
                )

                : messageObject.messageType === 'media' ?

                (
                    <div className='banner banner-in-chat'>
                        {/* This banner must be passed when the object is the socket connectoin is made */}
                        <img src={messageObject.url} alt="image-banner" className='image-banner'/>
                        <br />
                        <br />
                        <h4>{messageObject.message}</h4>
                        <hr />
                    </div>
                )

                : messageObject.messageType === 'options' && 

                (
                    <div className='options-container row g-3'>

                        {
                            messageObject.options.map((option, index) => {
                                return (
                                    <div className='col-4'>
                                        <button type="button" class="btn btn-outline-dark btn-lg btn-selene" value={index} 
                                        onClick={(e) => {messageObject.sendOption(e.target.value)}}>{option}</button>
                                    </div> 
                                )
                            })
                        }        

                    </div> 

                )
            )

            :

            (
                <div className="d-flex flex-row justify-content-end">
                    <img src="https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg" alt="avatar 1" style={{width: "45px", height: "100%", borderRadius: "50%"}} />
                    <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                    </div>
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
