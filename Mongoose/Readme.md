# Mongoose
A library that create a connection vetween MongoDB and Node .js JavaScript Runtime Environment

It is an ODM (Object  Data Modeling ) library.

## Installation
```
npm install mongoose
```

### Schema 
Schema defined the shape of the document within that collection.

``````
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: number
})
``````

### models
Model in mongoose is a cla with which we can construct document.
``````
const User = mongoose.model("User", userSschema);
``````

### Insert 
#### Inserting One 
``````
const user1 = new User({ name: "Adam", email: "adam@ahoo.in", age: 78 });
const user2 = new User({ name: "Eve", email: "evem@google.com", age: 48 });
``````

#### Inserting Multiple
``````
User.insertMany([
    {name:"Tony", email:"tony@ny.com",age:38},
    {name:"bruce", email:"bruce@to.com",age:34},
    {name:"Peter", email:"peter@sp.com",age:28},
]).then((data)=>{
    console.log(data)
})
``````

#### Save
``````
user1.save();
user2.save();
``````

### Note
#### Mongoose uses Operation Buffering
Mongoose lets you start using your models immediatly, without waiting for mongoose to establish a connection to MongoDB.


### Find
``````
model.find() // returns a Query Object (thennable)
``````
*Mongoose Queries are not promises, But they have a.then()
#### Command --> find()
``````
User.find().then((data)=>{
    console.log(data);
});
``````

``````
User.find({ age:{$gte : 46} }).then(data)=>{
    console.log(data);
};
``````



