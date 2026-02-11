'use strict';

// Import the socket.io client
const socket = io('http://localhost:3000');

// Listen for connection events
socket.on('connect', () => {
    console.log('Connected to server');
});

// Listen for messages from the server
socket.on('message', (data) => {
    console.log('Message from server:', data);
});

// Emit a message to the server
function sendMessage(msg) {
    socket.emit('message', msg);
}

// Example usage of sendMessage function
// sendMessage('Hello, Server!');
