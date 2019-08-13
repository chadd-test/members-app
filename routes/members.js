// ROUTER MODULE
// DECLARATIONS and IMPORTS
const express = require('express');
const router = express.Router();
const members = require('../members');

// Simple App
// Create, Read, Update and Delete


// Create Member - POST Request
router.post('/', (req, res) => {
    const newID = members.length+1;

    const newMember = {
        id: newID,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

      if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and email'});
    } 

    members.push(newMember);
    
    res.json(members); 

});




// Read Single Member - GET Request
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === Number(req.params.id));

    if (found) {
res.json(members.filter(member => member.id === Number(req.params.id)));
    } else {
res.status(400).json({msg: `No member with the ID of ${req.params.id}`});
    }

});

// Read all members - GET Request 
router.get('/', (req, res) => {
    res.json(members);
});




// Update Single Member - PUT Request
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === Number(req.params.id));

    if (found) {
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === Number(req.params.id)) {
                member.name = updateMember.name ? req.body.name:member.name;
                member.email = updateMember.email ? req.body.email:member.email;
                res.json({msg: `Member updated:`, member });
            }
        });
    } else {
res.status(400).json({msg: `No member with the ID of ${req.params.id}`});
    }

});



// Delete Single Member - DEL Request
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === Number(req.params.id));
    if (found) {
        let memberIndex = undefined;
        let memberName = undefined;    

        members.map((member,index) => {
            if (member.id === Number(req.params.id)) {
                memberIndex = index;
                memberName = member.name;
            } else {
                console.log('Something went wrong');    
                return null;
            }
        });

        members.splice(memberIndex, 1);
        res.json({msg: `Successfully deleted ${memberName}`, members});
    } else {
res.status(400).json({msg: `No member with the ID of ${req.params.id}`});
    }
});




module.exports = router;
