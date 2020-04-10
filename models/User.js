 const mongoose = require('mongoose');
const validate = require('validator');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => {
                return validate.isEmail(v);
            },
            message: `{VALUE} is not email`
        }
    },
    password: {
        type: String,
        required: true,
    }
});

const user = new mongoose.model('User', UserSchema);
module.exports = user;