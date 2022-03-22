//an array to store the messages
var messages = [];

//message type looks up objects, similar to an enumerator
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//seed data
var data = [
    {   
        type: messageType.out,
        user: 'Nick',
        message: 'Hey, do you want to grab some lunch?'
    },
    {
        type: messageType.in,
        user: 'Billy',
        message: 'No, lets go get some food!'
    },
    {
        type: messageType.out,
        user: 'Nick',
        message: 'Awesome! Lets go!'
    }
];

//message constructor function
function Message(type, user, message)   {
    this.type = type;
    this.user = user;
    this.message = message;
}

//function to create & return element for the supplied message
function createMessageElement(message)  {
    //creates text element for message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //add a clause using the message text
    messageEl.className = message.type;

    return messageEl;
}

//button click event handler to add a new message
function addMessageHandler(event) {
    var user = '';
    var type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //determine message type and set variables accordingly
    switch (event.target.id)    {
        case 'send-button':
            user = 'Nick';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Billy';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    //create new message
    if (messageInput.value != '')   {
        //construct a message and add it to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create message element
        var el = createMessageElement(message);

        //add message to the DOM
        messagesContainerEl.appendChild(el);

        //reset input
        messageInput.value = '';
    }
}

//load seed data from data array above
function loadSeedData() {
    for (var i = 0; i < data.length; i++)   {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++)   {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function()   {
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load the seed data from data array
    loadSeedData();
};

init();