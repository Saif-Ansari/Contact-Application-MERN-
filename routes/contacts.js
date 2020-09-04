const express = require('express');
const router = express.Router();

// @route  GET  api/contacts
// @desc   get all users contacts
// @access Public
router.get('/', (req,res)=>{
    res.send(' get all contacts')
});

// @route  POST  api/contacts
// @desc   Add new contacts
// @access Private
router.post('/', (req,res)=>{
    res.send(' add new  contacts')
});

// @route  PUT  api/contacts/:id
// @desc   update contact
// @access Private
router.put('/:id', (req,res)=>{
    res.send(' update contact')
});

// @route  DELETE  api/contacts/:id
// @desc   delete contact
// @access Private
router.delete('/:id', (req,res)=>{
    res.send(' delete contact')
});

module.exports = router;