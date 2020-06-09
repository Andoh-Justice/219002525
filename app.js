const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/goodhealthDb',{useNewUrlParser: true, useUnifiedTopology: true})
.then((connect)=>{ console.log('Goodhealth Database connected')})
.catch((error)=>{ console.log(error.message)});


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/', require('./routes/index'));

app.use('/student', require('./routes/student'));

app.use('/todo', require('./routes/todo'));





//application listen to port
const port = 3000 || process.env.PORT;
app.listen(port, ()=>{
    console.log('Server started on port 3000...')
});