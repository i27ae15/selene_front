import React, { useEffect, useState } from 'react';


function Message(messageObject) {

    return (
        
        messageObject.fromSelene ? 
            (
                <div className="d-flex flex-row justify-content-start">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}} />
                <div>
                    <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                </div>
            </div>
            )

            :

            (
            <div className="d-flex flex-row justify-content-end">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}} />
                <div>
                    <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>{messageObject.message}</p>
                </div>
            </div> 
            )

    )

}

export default Message;