const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');

//GET all contacts
router.get('/', (req, res, next) => {
    Contact.find()
        .then(contacts => {
            console.log(contacts)
            res.status(201).json({
                message: 'Get Contacts',
                contacts
            })
        }).catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    })
})

//POST a contact
router.post('/', (req, res, next) => {

    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    console.log(req.body);
    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'contact added',
                contact: data
            })
        }).catch(err => {
            res.status(500).json({
                message : 'Error occured',
                error : err
            })
        })

});
// GET a specific contact
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
});


module.exports = router;