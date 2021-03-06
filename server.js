const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.port || 3600;
//set up for cross development
app.use(cors());
//see the request log to the console
app.use(morgan('dev'));
// add body to the post method
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//middleware
app.use((req, res, next) => {
    console.log('I am a middleware function');
    next();
})

mongoose.connect('mongodb://localhost:27017/contacts', {'useNewUrlParser': true});
const db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
})

db.once('open', () => (console.log('db open')));

const contactRoute = require('./routes/contact');
const userRoute = require('./routes/user');
app.use('/api/contacts/', contactRoute)
app.use('/api/users/',userRoute)


app.get('/', (req, res) => {
    res.send('welcome to contact api')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port} `);

})




