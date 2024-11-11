const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log('Incoming message:', msg.toString());
});

server.bind(53, () => {
    console.log('DNS Server is running on port 53');
});
