import React, { useEffect, useState } from 'react';


function Message(message, fromSelene) {

    
    return (
        
        fromSelene ? 
            (
            <div className="chat chat-left">
                <div className='chat-body'>
                    <div className="chat-message">
                        {message.message}
                    </div>
                </div>
            </div>  
            )

            :

            (
            <div className="chat">
                <div className='chat-body'>
                    <div className="chat-message">
                        {message.message}
                    </div>
                </div>
            </div>  
            )
        
        

    )

}

export default Message;