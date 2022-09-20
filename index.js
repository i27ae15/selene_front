// let myElm = document.createElement("p");	// Create a new element

// myElm.innerText = 'test';		// Change the text of the element
// myElm.style.color = 'red';		// Change the text color of the element

// document.body.appendChild(myElm);	// Add the object to the DOM


// Creating of the chat

// Main div
let mainDiv = document.createElement('div');
mainDiv.classList.add(...['page-content', 'page-container']);
mainDiv.id ='page-content';
mainDiv.style.cssText = 'position: fixed; right: 0; bottom: 0;';
document.body.appendChild(mainDiv);

// next div 
let nextDiv = document.createElement('div');
nextDiv.classList.add('padding');
mainDiv.appendChild(nextDiv);

// row div
let rowDiv = document.createElement('div');
rowDiv.classList.add(...['row', 'container', 'd-flex', 'justify-content-center']);
nextDiv.appendChild(rowDiv);

// col-md-6
let colDiv = document.createElement('div');
rowDiv.appendChild(colDiv);

// card ---------------------------------------------------
let chatBody = document.createElement('div');
chatBody.classList.add(...['card', 'card-bordered']);
chatBody.style.cssText = 'width: 400px;';
colDiv.appendChild(chatBody);

// card-header
let cardHeaderDiv = document.createElement('div');
cardHeaderDiv.classList.add('card-header');
chatBody.appendChild(cardHeaderDiv);

// card-header-title
let cardHeaderTitleDiv = document.createElement('h4');
cardHeaderTitleDiv.classList.add('card-header-title');
cardHeaderDiv.appendChild(cardHeaderTitleDiv);

// card-header-title-text
let cardHeaderTitleTextDiv = document.createElement('strong');
cardHeaderTitleTextDiv.innerText = 'Chat';
cardHeaderTitleDiv.appendChild(cardHeaderTitleTextDiv);

// chat-content
// in this div will be all messages
// ------------------------------------------------------------------------------
let chatContentDiv = document.createElement('div');
chatContentDiv.classList.add(...['ps-container', 'ps-theme-default', 'ps-active-y']);
chatContentDiv.id = 'chat-content';
chatBody.appendChild(chatContentDiv);

chatContentDiv.style.cssText = 'overflow-y: scroll !important; height: 300px !important;';

// message from Selene
// messages
let message = document.createElement('div');
message.classList.add(...['media', 'media-chat'])
chatContentDiv.appendChild(message);

// avatar inside message
let avatar = document.createElement('img');
avatar.classList.add('avatar');
avatar.src = 'https://www.latercera.com/resizer/2rH-wOMx8a8WW6ACQO8A5U2a7fg=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDHLZD4SMBAKXNJBT7VKNRKYOQ.jpeg';
message.appendChild(avatar);

// message-body
let messageBody = document.createElement('div');
messageBody.classList.add('media-body');
message.appendChild(messageBody);

// message-body-text
let messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 1';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

messageBodyText = document.createElement('p');
messageBodyText.innerText = 'Hello, I am selene 2';
messageBody.appendChild(messageBodyText);

// ------------------------------------------------------------------------------
// message from Aquiles
// message
let message2 = document.createElement('div');
message2.classList.add(...['media', 'media-chat', 'media-chat-reverse']);
chatContentDiv.appendChild(message2);

// message-body
let messageBody2 = document.createElement('div');
messageBody2.classList.add('media-body');
message2.appendChild(messageBody2);

// message-body-text
let messageBodyText2 = document.createElement('p');
messageBodyText2.innerText = 'I am fine, and you?';
messageBody2.appendChild(messageBodyText2);

messageBodyText2 = document.createElement('p');
messageBodyText2.innerText = 'I am fine, and you? 1';
messageBody2.appendChild(messageBodyText2);

messageBodyText2 = document.createElement('p');
messageBodyText2.innerText = 'I am fine, and you? 2';
messageBody2.appendChild(messageBodyText2);

// ------------------------------------------------------------------------------

// publisher
let publisherDiv = document.createElement('div');
publisherDiv.classList.add(...['publisher', 'bt-1', 'border-light']);
chatBody.appendChild(publisherDiv);

// avatar inside of publisher
let avatarDiv = document.createElement('img');
avatarDiv.classList.add(...['avatar', 'avatar-xs']);
avatarDiv.src = 'https://images.nightcafe.studio/jobs/qxr9i3pBNkEo0WLXgVrW/qxr9i3pBNkEo0WLXgVrW--1--IHHDZ.jpg?tr=w-640,c-at_max';
publisherDiv.appendChild(avatarDiv);

// input inside of publisher
let inputDiv = document.createElement('input');
inputDiv.classList.add('publisher-input');
inputDiv.type = 'text';
inputDiv.placeholder = 'Write something';
publisherDiv.appendChild(inputDiv);

// button inside of publisher
let buttonDiv = document.createElement('button');
buttonDiv.classList.add(...['btn', 'btn-icon', 'btn-primary']);
buttonDiv.type = 'button';
buttonDiv.innerText = 'Send';
publisherDiv.appendChild(buttonDiv);

