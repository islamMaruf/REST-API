const Contact = require('../models/Contact.js');
const allContacts = (req, res, next) => {
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
}
const createContact = (req, res, next) => {

    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'create Contact',
                contact: data
            })
        }).catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    })

}
const contact = (req, res, next) => {
    const id = req.params.id;
    Contact.findById(id)
        .then(contact => {
            res.status(201).json({
                message: 'show Contact',
                contact
            })
        }).catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    })
}
const deleteContact = (req, res, next) => {
    const id = req.params.id;
    Contact.findByIdAndRemove(id)
        .then(contact => {
            res.status(201).json({
                message: 'Contact deleted',
                contact
            })
        }).catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    })
}
const updateContact = (req, res, next) => {
    const {name, phone, email} = req.body;
    const updateContact = {
        name: name,
        phone: phone,
        email: email
    }
    const id = req.params.id;
    Contact.findByIdAndUpdate(id, {$set: updateContact})
        .then(data => {
            Contact.findById(data._id)
                .then(contact => {
                    res.status(201).json({
                        message: 'Contact updated',
                        contact
                    })
                })

        }).catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    })

}

module.exports = {
    allContacts,
    createContact,
    contact,
    updateContact,
    deleteContact
}