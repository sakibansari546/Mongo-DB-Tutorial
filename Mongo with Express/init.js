
const mongoose = require('mongoose');
const Chat = require('./models/chat.js')

main().then(() => {
    console.log("Connected")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


let allChats = ([
    {
        from: "Sakib",
        to: "Garima",
        msg: "Hay Garima!",
        created_at: new Date()
    },
    {
        from: "Sakib",
        to: "jatin",
        msg: "Paro chalege",
        created_at: new Date()
    },
    {
        from: "Sakib",
        to: "Piyush",
        msg: "kaha tak pouch gya js me",
        created_at: new Date()
    },
    {
        from: "Sakib",
        to: "Garima",
        msg: "Garima! where are you?",
        created_at: new Date()
    }
]);

Chat.insertMany(allChats);