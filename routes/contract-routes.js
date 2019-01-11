const express = require('express');
const router = express.Router();
const contract = []

//GET
router.get('/', (req, res, next) => {
    res.status(200).json({
        contract
    })
})

//POST
router.post('/', (req, res, next) => {
    
    contract.push({
        name: req.body.name,
        email:req.body.email
    })
    
    res.status(201).json({
        message: "data saved"
    
    })
});




router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        id
        
    });
})


module.exports = router;