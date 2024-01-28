const mongoose = require('mongoose');

main().then((res, rej) => {
    console.log('Connect');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


const User = mongoose.model("User", userSchema);
// // const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({ name: "Adam", email: "adam@ahoo.in", age: 78 });
// const user2 = new User({ name: "Eve", email: "evem@google.com", age: 48 });

// user1.save();
// user2.save();

// User.insertMany([
//     { name: "Tony", email: "tony@ny.com", age: 38 },
//     { name: "bruce", email: "bruce@to.com", age: 34 },
//     { name: "Peter", email: "peter@sp.com", age: 28 },
// ]).then((data) => {
//     console.log(data);
// })

// User.find({ age: 29 }).then((data) => {
//     console.log(data);
// })
// User.findOne({ _id: { $gte: "65b401d1b5f6595953e0984d" } }).then((data) => {
//     console.log(data);
// })


// User.updateOne(
//     { name: "Peter" },
//     { age: 29 }
// ).then((data) => {
//     console.log(data);
// })

// User.deleteOne({ name: "Tony" }).then((data) => {
//     console.log(data);
// })
// User.deleteMany({ name: "bruce" }).then((data) => {
//     console.log(data);
// })