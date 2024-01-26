const mongoose = require('mongoose');

main().then((res, rej) => {
    console.log('Connect');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
    }
});

const Book = mongoose.model("Book", booksSchema);

Book.insertMany([
    { title: "Tony", author: "tony@ny.com", price: 38 },
]).then((data) => {
    console.log(data);
})