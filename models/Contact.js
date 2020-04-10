const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
            validator : (v) => true,
            message : `${v} is not email`
        }
    }
});