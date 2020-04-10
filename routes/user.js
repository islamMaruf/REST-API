const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.login);
router.post('/register', userController.registration);
router.get('/',userController.allUser);

module.exports = router