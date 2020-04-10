const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.js');

//GET all contacts
router.get('/', contactController.allContacts);

//POST a contact
router.post('/', contactController.createContact);

// GET a specific contact
router.get('/:id', contactController.contact);

// UPDATE a specific contact
router.put('/:id', contactController.updateContact);

//DELETE a specific contact
router.delete('/:id', contactController.deleteContact);


module.exports = router;