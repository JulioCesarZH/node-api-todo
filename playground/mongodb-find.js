const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b36994fc28c434a00e312c1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
        
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name : 'Julio Cesar'
    }).toArray().then((user) => {
        console.log(JSON.stringify(user, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch todos', err);
    });
    

    //client.close();
});