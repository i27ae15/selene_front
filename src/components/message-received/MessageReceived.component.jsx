import React, { useEffect, useState } from 'react';


function MessageReceived(socket) {

    const [messages, setMessages] = useState();


    useEffect(() => {
        const messageListener = (message) => {
            setMessages((prevMessages) => {
                const newMessages = {
                    ...prevMessages
                };
                newMessages[message.id] = message;
                return newMessages;
            });
        };

        const deleteMessageListener = (messageID) => {
            setMessages((prevMessages) => {
                const newMessages = {
                    ...prevMessages
                };
                delete newMessages[messageID];
                return newMessages;
            });
        };

        socket.on('message', messageListener);
        socket.on('deleteMessage', deleteMessageListener);
        socket.emit('getMessages');

        return () => {
            socket.off('message', messageListener);
            socket.off('deleteMessage', deleteMessageListener);
        };

        }, [socket]);
    
    return (

        <div className="chat">
            <div className='chat-body chat-left'>
                <div className="chat-message">
                    {console.log(messages)}
                    {/* {[...Object.values(messages)]
                        .map((message) => (
                            message.value
                        ))
                    } */}
                </div>
            </div>
        </div>  

    )

}

export default MessageReceived;