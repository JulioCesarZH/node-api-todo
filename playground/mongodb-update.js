const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b3a52ef8358456636153a8b')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then( (result) => {
    //     console.log(result);
        
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b36a4f483584566361538bf')
    },{
        $set: {
            name: 'Julio Cesar'
        },
        $inc:{
            age: 2
        }
    },{
        returnOriginal:false
    }).then( (result) => {
        console.log(result);
        
    })


    //client.close();
});