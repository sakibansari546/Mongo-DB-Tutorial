const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("Conected!"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username: String,
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

async function addData() {
    // let user1 = new User({
    //     username: "garima"
    // });

    let user = await User.findOne({ username: "garima" })

    let post1 = new Post({
        content: "Hello Garima",
        likes: 90,
    })

    post1.user = user;

    // await user1.save();
    await post1.save();
}

// addData()

async function findData() {
    let res = await Post.find({}).populate("user");
    console.log(res);
}

findData()