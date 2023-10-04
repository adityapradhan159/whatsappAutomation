const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', (message) => {
  console.log('WhatsApp Web is ready!');
});


client.on('message', (message) => {
    console.log(message.body)
    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hi there!');
    }
    else{
        message.reply('Sorry didnt catch that')
    }
});

client.initialize();
