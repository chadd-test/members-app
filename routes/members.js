// ROUTER MODULE
// DECLARATIONS and IMPORTS
const express = require('express');
const router = express.Router();
const members = require('../members');

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === Number(req.params.id));

    if (found) {
res.json(members.filter(member => member.id === Number(req.params.id)));
    } else {
res.status(400).json({msg: `No member with the ID of ${req.params.id}`});
    };

});

// Get all members using .json
router.get('/', (req, res) => {
    res.json(members);
});

// Create Member
router.post('/', (req, res) => {
    const newID = members.length+2;

    const newMember = {
        id: newID,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and email'});
    };

    members.push(newMember);
    
    res.json(members);
});


module.exports = router;
