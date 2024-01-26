# MongoDB
### BSON Data Formte

### Collections
Document : Mongo stoe data in form of document (BOSN docs)
<br>
Collection : MongoDB store document in collection

### INSERT in DB

```
insertOne()
```
````` 
db._collection_name.insertOne({name:"adam",class:12,age:18})
``````
`````` 
show data --> db._collection_name.find()
`````` 
 if a collection does not exist, mongoDB create collection when you first store data for that collection

``````
 connamd --> insertMany(array of documents) 
 ``````

``````
db._collection_name.insertMany([{name:"bob",age:19,marks:99},{name:"eve",age:10,marks:98}])
``````

### Operators in DB

#### Comparison Query Operators
``````
 $eq --> Matches values that are equal to a specified value.
 ``````
`````` 
$gt --> Matches values that are greater than a specified value.
``````
``````
 $gte --> Matches values that are greater than or equal to a specified value.
``````
``````
$in --> Matches any of the values specified in an array.
``````
``````
 $lt --> Matches values that are less than a specified value.
 ``````
``````
$lte --> Matches values that are less than or equal to a specified value.
``````
``````
$ne --> Matches all values that are not equal to a specified value.
``````
``````
 $nin --> Matches none of the values specified in an array.
``````

### Logical Query Operators
``````
$and --> Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
``````
``````
 $not --> Inverts the effect of a query expression and returns documents that do not match the query expression.
``````
``````
 $nor --> Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
``````
``````
 $or --> Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
``````


### FIND in DB
``````
command --> db._collection_name.find()
``````
#### For specific queries
``````
 db._collection_name.find({key:value})
``````
``````
 db._collection_name.findOne({key:value})
``````

### Query Operators
#### Q. Find student where marks > 75
``````
 db.student.find( {marks : {$gt : 75}} )
``````

#### Q. Find who live in Delhi or Mumbai
``````
 db.student.find( {city : {$in : ["Delhi", "Mumbai"]}} )
``````

#### Q. Find the dtudent who scored marks > 75 or live in Delhi
``````
db.student.find( {$or : [ {marks : {$gt : 75}}, { city : "chandigarh" } ]})
``````


### Update in DB

#### Update Operators
``````
 $addField
``````
``````
 $set
``````
``````
 $project
``````
``````
 $unset
``````
``````
 $replaceRoot
``````
``````
 $replaceWith
``````


#### command 
``````
 updateOne()
``````
#### Example.

``````
 db._collection_name.updateOne(<filter> ,<update>, <options>)
 ``````
Update at most a single documnt that match a specified filter even though multiple document may match the specified filter
``````
 db.student.updateOne({name :"adam"}, {$set :{marks: 89}})
``````

#### command 
``````
 updateMany()
 ``````
#### Example.
``````
 db.student.updateMany( {city:"chandigaarh"}, {$set : {city : "new chnadigarh"}})
 ``````
 #### Update all documents that match a specified filter

#### command 
``````
 replaceOne()
 ``````
``````
 db.student.replaceOne({name:"bob"}, {name:"sakib", age:18, mark:89})
 ``````
reeplace at most a single document that amtch a specified filter even though multiple documents may match the specified filter 


### Nesting in DB
``````
{ 
  _id : ObjectId("213n4j5b5hb4h),
  name: "bob",
  performance: { marks:90, grade:"A" }
}
``````

#### how to access nested key
``````
 db.student.find({"performance.marks":88})
 ``````


### Delete in DB

#### command 
`````` 
deleteOne()
``````
``````
 db._collection_name_.deleteOne(<filter>,<options>)
 ``````
#### Example.
``````
 db.student.deleteOne({name: "bob"})
 ``````

#### command
``````
 deleteMany()
 ``````
``````
 db._collection_name_.deleteMany(<filter>,<options>)
 ``````
#### Example.
``````
 db.student.deleteMany({age: {$lt: 18}})
 ``````

### Delete Database
``````
 db.dropDatabase()
 ``````