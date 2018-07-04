const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( (result) => {
//     console.log(result);
// });

Todo.findOneAndRemove().then( (result)=> {

});


Todo.findByIdAndRemove('5b3d01958358456636157876').then((todo) =>{
    console.log(todo);
});

