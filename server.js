
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const port = process.env.port || 3600


//set up for cross development
app.use(cors())
//see the request log to the console
app.use(morgan('dev'))
// add body to the post method
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



//middleware
// app.use((req, res, next) => {
//     console.log('I am a middleware function');
//     next();
// })
const contactRoute = require('./routes/contract-routes');
 app.use('/api/contacts/',contactRoute)



app.get('/', (req,res) => {
    res.send('hello world banglasesh')
    
    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
    
})




