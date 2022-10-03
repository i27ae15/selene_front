
const seleneImage = 'https://images.nightcafe.studio/jobs/ot3Uy98JQQNKb48EukXZ/ot3Uy98JQQNKb48EukXZ--3--Y57QM_2x.jpg?tr=w-1080,c-at_max';
const userImage = 'https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg';
let bannerImage = 'https://images.nightcafe.studio/jobs/T00gudABG5TqSEpoJl1d/T00gudABG5TqSEpoJl1d--2--BFO7Q_8x.jpg?tr=w-1080,c-at_max'
let coverTitle = '';
let coverDescription = '';

let mainSection = document.createElement('section');
mainSection.id = 'main-section'
mainSection.style.cssText = 'position: fixed; right: 0; bottom: 0; text-align: center; width: 400px; visibility: hidden; z-index: 9999999;';

// Creating the circle button
let showSeleneChat = document.createElement('img');
// showSeleneChat.src = seleneImage;
showSeleneChat.src = 'https://www.utalkto.com/wp-content/uploads/2022/03/logo-alligator-100.png';
showSeleneChat.style.cssText = 'width: 60px; height: 60px; border-radius: 50%; position: fixed; right: 0; bottom: 0; margin: 20px; cursor: pointer;';
showSeleneChat.onclick = function () {
    mainSection.style.visibility = 'visible';
    showSeleneChat.style.visibility = 'hidden';
}
document.body.appendChild(showSeleneChat);


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
cardHeaderTitle.innerText = 'Orinoco Assistant';
cardHeader.appendChild(cardHeaderTitle);

let closeChatButton = document.createElement('button');
closeChatButton.classList.add(...['btn', 'btn-sm', 'btn-outline-secondary']);
closeChatButton.innerText = 'X';
closeChatButton.onclick = function () {
    mainSection.style.visibility = 'hidden';
    showSeleneChat.style.visibility = 'visible';
};
cardHeader.appendChild(closeChatButton);


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


// let cardFooterImage = document.createElement('img');
// cardFooterImage.src = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp';
// cardFooterImage.style.cssText = 'width: 40px; height: 100%;';
// cardFooter.appendChild(cardFooterImage);


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


// loading css

let head  = document.getElementsByTagName('head')[0];

let bootstrapLink  = document.createElement('link');
bootstrapLink.id   = 'bootstrapLink';
bootstrapLink.rel  = 'stylesheet';
bootstrapLink.type = 'text/css';
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css';
bootstrapLink.media = 'all';
head.appendChild(bootstrapLink);

let fontAwesomeLink  = document.createElement('link');
fontAwesomeLink.id   = 'fontAwesomeLink';
fontAwesomeLink.rel  = 'stylesheet';
fontAwesomeLink.type = 'text/css';
fontAwesomeLink.href = 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';
fontAwesomeLink.media = 'all';
head.appendChild(fontAwesomeLink);

let seleneStylesLink  = document.createElement('link');
seleneStylesLink.id   = 'seleneStylesLink';
seleneStylesLink.rel  = 'stylesheet';
seleneStylesLink.type = 'text/css';
// seleneStylesLink.href = 'https://cdn.jsdelivr.net/gh/i27ae15/selene_front@selene_chat/selene.css';
seleneStylesLink.href = '/selene.css';
seleneStylesLink.media = 'all';
head.appendChild(seleneStylesLink);


// getting the auth token 

let seleneTokenElement = document.querySelector('[id^="SeleneChatSourceCode-token-"]');
let seleneToken = seleneTokenElement.id.split('-')[2];

// ---------------------------------------------------------------------------------
// functionalities

const socket = new WebSocket('ws://localhost:8000/chat/testing/');

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
        // newMessageAvatar.src = seleneImage;
        // newMessage.appendChild(newMessageAvatar);
        newMessage.classList.add('justify-content-start');
    } else {
        // newMessageAvatar.src = userImage;
        newMessage.classList.add('justify-content-end');
    }

    // text
    let newMessageContent = document.createElement('div');
    newMessage.appendChild(newMessageContent);

    let newMessageContentText = document.createElement('p');
    newMessageContentText.classList.add(...['small', 'p-2', 'ms-3', 'mb-1', 'rounded-3']);

    if (fromSlene) {
        newMessageContentText.style.cssText = 'background-color: #f5f6f7; !important;';
    }

    if (text) {
        newMessageContentText.innerText = message;
        
    } else if (link) {
        // create a new link inside the message
        let newMessageContentLink = document.createElement('a');
        newMessageContentLink.href = message;
        newMessageContentLink.innerText = message;
        newMessageContentLink.target = '_blank';
        newMessageContentText.appendChild(newMessageContentLink);
    }

    newMessageContent.appendChild(newMessageContentText);

    if (!fromSlene) {
        // newMessage.appendChild(newMessageAvatar);
        newMessageContentText.classList.add(...['bg-primary', 'text-white']);
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

head.attributes.dis

function sendOption(option) {


    // trying to convert the option to a number
    let optionNumber = parseInt(option);
    let messageInFailure = 'Opción no válida, por favor elige una de las opciones disponibles';

    // console.log(currentOptions);

    // currentOptions.forEach((opt) => {
    //     if (opt.value !== option){
    //         opt.remove();
    //     }

    //     if (opt.value === option) {
    //         opt.setAttribute('disabled', true);
    //     }
    // })


    // if (optionNumber) {
    //     optionNumber = optionNumber - 1;
        
    //     if (currentOptions[optionNumber]) {
    //         option = currentOptions[optionNumber];
    //     } else {
    //         createTextMessage(true, messageInFailure);
    //         return;
    //     }
    
    // }

    // console.log('option Selected', option);

    // currentOptions.forEach(element => {
    //     console.log(element.value)
    // });


    // if (!currentOptions.filter((opt) => opt.value === option).length) {
    //     createTextMessage(true, messageInFailure);
    //     return;
    // }

    // console.log('sending option', option);


    let object = {
        'message': option,
        'fromSelene': false,
        'messageType': 'text'
    }

    socket.send(JSON.stringify(object));
    isOption = false;
    currentOptions = [];

}


// Socket connection ---------------------------------------------------------------

socket.onopen = function (e) {
    
    let object = {
        'message': 'What can I do next?',
        'fromSelene': false,
        'messageType': 'text',
        'token': seleneToken
    }

    console.log(object);

    socket.send(JSON.stringify(object));
}


socket.onmessage = function (event) {

    let response = JSON.parse(event.data);
    console.log(response);

    response.responses.forEach((m) => {

        if (m.type === 'text') {
            createTextMessage(true, m.message);
        
        } else if (m.type === 'link') {
                
            createTextMessage(true, m.message, false, true);
            
        } else if (m.type === 'media') {

            let imageFromSelene = document.createElement('div');
            imageFromSelene.classList.add(...['banner', 'banner-in-chat']);
            cardBody.appendChild(imageFromSelene);

            // // image title
            // let imageTitle = document.createElement('h4');
            // imageTitle.innerText = m.title;
            // cardBody.appendChild(imageTitle);

            // image description
            let imageDescription = document.createElement('p');
            // imageDescription.innerText = m.description;
            imageDescription.innerText = `
            Hi there, I'm Orinoco Ventures virtual assistant. Let me show you the unit
            It's available for November 1st, one-level upper unit fourplex suite.
            It has 3 bedrooms, 1 bathroom, a balcony, private laundry and parking available!`;
            imageDescription.style.cssText = 'text-align: left;'

            cardBody.appendChild(imageDescription);

            
            let imageFromSeleneImage = document.createElement('img');
            imageFromSeleneImage.src = 'http://localhost:8000' + m.url;
            imageFromSeleneImage.classList.add('image-banner');
            imageFromSelene.appendChild(imageFromSeleneImage);


            let hr = document.createElement('hr');
            cardBody.appendChild(hr);
            

            if (m.message) {

                createTextMessage(true, m.message);

            }

            // in the object from react, here is another object, let's see if necessary
        } else if (m.type === 'input') {

            if (m.input_type === 'options') {
                createTextMessage(true, m.message);


                isOption = true;

                console.log('is option: ', isOption);


                let optionsDiv = document.createElement('div');
                optionsDiv.style.cssText = 'margin: 25px 0;';
                cardBody.appendChild(optionsDiv);


                m.options.forEach((o) => {

                    let newOption = document.createElement('button');
                    newOption.classList.add(...['btn', 'btn-outline-dark', 'btn-sm', 'btn-selene']);
                    newOption.innerText = o;
                    newOption.value = o;
                    newOption.style.cssText = 'margin: 0 5px;';
                    newOption.onclick = (e) => {
                        sendOption(e.target.value);
                    };
                    optionsDiv.appendChild(newOption);
                    currentOptions.push(newOption);


                });

            }
        }
    });
};
