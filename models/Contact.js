const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  validate = require('validator');
const contractSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim : true,
        validate :{
            validator : (v) => {
                return validate.isEmail(v);
            },
            message : `is not email`
        }
    }
});

const  Contact = mongoose.model('Contact',contractSchema);

module.exports = Contact;