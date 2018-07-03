const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b3a88fb7653d7bc68e1cc71';

// Todo.find({
//     _id: id
// }).then( (todos) =>{
//     console.log('Todos', todos);
    
// });

User.findById(id).then( (user) => {
    if(!user){
        return console.log('Unable to fetch user');   
    }
    console.log(JSON.stringify(user, undefined, 2));
    
}, (e) => {
    console.log(e);
    
});
