let mainSection = document.createElement('section');
mainSection.id = 'main-section'
mainSection.style.cssText = 'position: fixed; right: 0; bottom: 0; text-align: center; width: 400px;';

let cardContainer = document.createElement('div');
cardContainer.classList.add(...['container', 'py-5']);
mainSection.appendChild(cardContainer);

let card = document.createElement('div');
card.classList.add('card');
cardContainer.appendChild(card);

let cardHeader = document.createElement('div');
cardHeader.classList.add(...['card-header', 'd-flex', 'align-items-center', 'justify-content-between', 'p-3']);
card.appendChild(cardHeader);

let cardHeaderTitle = document.createElement('h4');
cardHeaderTitle.classList.add('mb-0');
cardHeaderTitle.innerText = 'Selene';
cardHeader.appendChild(cardHeaderTitle);


// Check if the perfect scrollbar perfect is needed here
let cardBody = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.style.cssText = 'position:relvative; height: 450px; overflow-y: scroll;';
card.appendChild(cardBody);
 
// ---------------------------------------------------------------------------------

// card footer
let cardFooter = document.createElement('div');
cardFooter.classList.add(...['card-footer', 'text-mutad', 'd-flex', 'justify-content-start', 'align-items-center', 'p-']);
card.appendChild(cardFooter);


let cardFooterImage = document.createElement('img');
cardFooterImage.src = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp';
cardFooterImage.style.cssText = 'width: 40px; height: 100%;';
cardFooter.appendChild(cardFooterImage);


let textInput = document.createElement('input');
textInput.classList.add(...['form-control', 'form-control-lg']);
textInput.placeholder = 'Type message';

textInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

cardFooter.appendChild(textInput);

let sendButton = document.createElement('a');
sendButton.classList.add('ms-');
sendButton.href = '#!';
sendButton.onclick = sendMessage;
cardFooter.appendChild(sendButton);

let sendIcon = document.createElement('i');
sendIcon.classList.add(...['fas', 'fa-paper-plane']);
sendButton.appendChild(sendIcon);

document.body.appendChild(mainSection);

// ---------------------------------------------------------------------------------
// functionalities

const socket = new WebSocket('ws://localhost:8000/chat/testing/');

const seleneImage = 'https://images.nightcafe.studio/jobs/ot3Uy98JQQNKb48EukXZ/ot3Uy98JQQNKb48EukXZ--3--Y57QM_2x.jpg?tr=w-1080,c-at_max';

const userImage = 'https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg';

const bannerImage = 'https://images.nightcafe.studio/jobs/T00gudABG5TqSEpoJl1d/T00gudABG5TqSEpoJl1d--2--BFO7Q_8x.jpg?tr=w-1080,c-at_max'


// state

let isOption = false;
let currentOptions = [];


function scrollToBottom() {
    cardBody.scrollTop = cardBody.scrollHeight;
}


// create message object --------------------------------------------
function createTextMessage(fromSlene, message, text=true, link=false) {

    let newMessage = document.createElement('div');

    newMessage.classList.add(...['d-flex', 'flex-row']);
    newMessage.style.cssText = 'margin-bottom: 10px;';

    cardBody.appendChild(newMessage);

    // avatar
    let newMessageAvatar = document.createElement('img');
    newMessageAvatar.style.cssText = 'width: 45px; height: 100%; border-radius: 50%;';
    
    if (fromSlene) {
        newMessageAvatar.src = seleneImage;
        newMessage.appendChild(newMessageAvatar);
        newMessage.classList.add('justify-content-start');
    } else {
        newMessageAvatar.src = userImage;
        newMessage.classList.add('justify-content-end');
    }

    // text
    let newMessageContent = document.createElement('div');
    newMessage.appendChild(newMessageContent);

    let newMessageContentText = document.createElement('p');
    newMessageContentText.classList.add(...['small', 'p-2', 'ms-3', 'mb-1', 'rounded-3', 'text-white']);

    if (fromSlene) {
        newMessageContentText.style.cssText = 'background-color: #f5f6f7; !important;';
    }

    if (text) {
        newMessageContentText.innerText = message;
    } else if (link) {
        // create a new link inside the message
        let newMessageContentLink = document.createElement('a');
        newMessageContentLink.href = message;
        newMessageContentLink.innerText = 'link';
        newMessageContentLink.target = '_blank';
        newMessageContentText.appendChild(newMessageContentLink);
    }

    newMessageContent.appendChild(newMessageContentText);

    if (!fromSlene) {
        newMessage.appendChild(newMessageAvatar);
        newMessageContentText.classList.add( 'bg-primary');
    }

    scrollToBottom();
}


function sendMessage() {
    let message = textInput.value;
    
    if (message) {
        
        let object = {
            'message': message,
            'fromSelene': false,
            'messageType': 'text'
        }
        
        createTextMessage(false, message);
        textInput.value = '';
    
        if (isOption) {
            sendOption(message);
            return;
        }

        socket.send(JSON.stringify(object));
    }
}


function sendOption(option) {

    isOption = false;

    // trying to convert the option to a number
    let optionNumber = parseInt(option);
    let messageInFailure = 'Opción no válida, por favor elige una de las opciones disponibles';

    console.log(currentOptions);

    if (optionNumber) {
        optionNumber = optionNumber - 1;
        
        if (currentOptions[optionNumber]) {
            option = currentOptions[optionNumber];
        } else {
            createTextMessage(true, messageInFailure);
            return;
        }
    
    }

    console.log('option Selected', option);


    if (!currentOptions.includes(option)) {
        createTextMessage(true, messageInFailure);
        return;
    }

    console.log('sending option', option);


    let object = {
        'message': option,
        'fromSelene': false,
        'messageType': 'option'
    }

    socket.send(JSON.stringify(object));
}


// Socket connection ---------------------------------------------------------------

socket.onopen = function (e) {
    
    let object = {
        'message': 'hello, Selene',
        'fromSelene': false,
        'messageType': 'text'
    }

    socket.send(JSON.stringify(object));
}


socket.onmessage = function (event) {

    let response = JSON.parse(event.data);
    // console.log(response);

    response.responses.forEach((m) => {

        if (m.type === 'text') {
            createTextMessage(true, m.message);
        
        } else if (m.type === 'link') {
                
            createTextMessage(true, m.message, false, true);
            
        } else if (m.type === 'media') {

            let imageFromSelene = document.createElement('div');
            imageFromSelene.classList.add(...['banner', 'banner-in-chat']);
            cardBody.appendChild(imageFromSelene);

            let imageFromSeleneImage = document.createElement('img');
            imageFromSeleneImage.src = bannerImage;
            imageFromSeleneImage.classList.add('image-banner');
            imageFromSelene.appendChild(imageFromSeleneImage);

            // image title
            let imageTitle = document.createElement('h4');
            imageTitle.innerText = m.title;
            cardBody.appendChild(imageTitle);

            // image description
            let imageDescription = document.createElement('p');
            imageDescription.innerText = m.description;
            cardBody.appendChild(imageDescription);

            let hr = document.createElement('hr');
            cardBody.appendChild(hr);
            

            if (m.message) {

                createTextMessage(true, m.message);

            }

            // in the object from react, here is another object, let's see if necessary
        } else if (m.type === 'input') {

            if (m.input_type === 'options') {

                isOption = true;

                console.log('is option: ', isOption);


                let optionsDiv = document.createElement('div');
                optionsDiv.style.cssText = 'margin: 25px 0;';
                cardBody.appendChild(optionsDiv);

                m.options.forEach((o) => {

                    currentOptions.push(o);

                    let newOption = document.createElement('button');
                    newOption.classList.add(...['btn', 'btn-outline-dark', 'btn-sm', 'btn-selene']);
                    newOption.innerText = o;
                    newOption.value = o;
                    newOption.style.cssText = 'margin: 0 5px;';
                    newOption.onclick = (e) => {
                        sendOption(e.target.value);
                    };
                    optionsDiv.appendChild(newOption);

                });

            }

        }

    });

};
