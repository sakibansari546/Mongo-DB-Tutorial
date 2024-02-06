const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("Conected!"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    address: [
        { location: String, city: String }
    ],
})

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "adam",
        address: [
            { location: "37-B Chai Sutta bar", city: "Chandigarh" }
        ]
    });
    user1.address.push({ location: "DIl ke karib", city: "Chandigarh" });
    await user1.save();
}
addUsers();