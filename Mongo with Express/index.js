const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const mongoose = require('mongoose');
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));

main().then(() => {
    console.log("Connected")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

app.get('/chats/new', (req, res) => {
    res.render("new.ejs",);
});
app.post('/chats', (req, res) => {
    let { from, msg, to } = req.body;
    // console.log(from, msg, to);
    let newChat = new Chat({ from: from, msg: msg, to: to, created_at: new Date() });
    newChat.save();
    res.redirect("/chats");
});


app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let editChat = await Chat.findById(id);
    res.render("edit.ejs", { editChat });
});
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let chat = await db.Chat.findById(id);
    res.render("index.ejs", { chat })

});
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
});


app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    await Chat.deleteOne({ _id: id });
    res.redirect("/chats");
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});