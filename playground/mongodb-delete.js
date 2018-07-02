const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Users').deleteMany({
    //     name: 'Julio Cesar'
    // }).then( (result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
        
    // })    

    //findONeAndDelete
    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5b36a4e483584566361538ba')
    }).then((result) => {
        console.log(result);
        
    })

    //client.close();
});