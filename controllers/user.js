const bcrypt = require('bcrypt');
const User = require('../models/User');
const allUser = (req, res, next) => {
    User.find()
        .then(users => {
            res.status(201).json({
                message: 'all users',
                users
            })
        }).catch(err => {
        res.status(400).json({
            message: 'Error occured',
            err
        })
    })

};

const login = (req, res, next) => {
    const {email, password} = req.body;
    User.findOne({email})
        .then(user => {
            if (user) {
                console.log(user.password,user,password)
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            message: 'password invalid',
                            err
                        })
                    }
                    if (result) {
                        res.json({
                            message: 'login successfully',
                            result
                        })
                    }else {
                        res.json({
                            message: 'login is not succeed',
                            result
                        })
                    }
                })
            } else {
                res.json({
                    message: 'User not found'
                })
            }
        }).catch(err => {
        res.json({
            err
        })
    })

};

const registration = (req, res, next) => {
    const {password, email} = req.body;
    console.log(password, email)
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            email: email,
            password: hash
        });

        user.save()
            .then(result => {
                res.status(201).json({
                    message: 'User saved successfully',
                    result
                })
            }).catch(err => {
            res.status(400).json({
                message: 'Some error ocurred',
                err
            })
        });


    })


};

module.exports = {
    login,
    registration,
    allUser
}