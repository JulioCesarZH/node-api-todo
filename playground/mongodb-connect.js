const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
        
    // });

    // db.collection('Users').insertOne({
    //     name: 'Julio Cesar',
    //     age: 25,
    //     location: 'Saltillo, Mexico'
    // }, (err, res) =>{
    //     if (err) {
    //        return console.log('Unable to insert User', err); 
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id, undefined, 2));
        
    // });

    client.close();
});

