const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//save the person
router.post('/', async (req, res) => {
    try {
        const data = req.body; //assuming the req body contains person data.

        //create a new person using mongoose model
        const newPerson = new Person(data);

        //save the new person..
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json({ success: true, message: 'Person Saved !', data: response });
    } catch (erroe) {
        res.status(404).json({ success: false, message: 'Person Not saved !', error: error.message });

    }
});

// method to get All person details......
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        res.status(200).json({ success: true, message: 'Data Found !', data: data });
    } catch (error) {
        res.status(404).json({ success: false, message: 'Data Not Foound !', error: error.message });
    }
});

// method to find person by id....
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const person = await Person.findById(id);
        if (!person) {
            return res.status(404).json({ success: false, message: 'Person not found by ID' });
        }
        res.status(200).json({ success: true, message: 'person Found', data: person });
    } catch (error) {
        console.log({ success: false, message: 'Data not found By Id ', error: error.message });

    }
});

// method to delete by id..
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletePerson = await Person.findByIdAndDelete(id);

        if (!deletePerson) {
            return res.status(404).json({ success: false, message: 'Person not found by Id', id });
        }
        res.status(200).json({ success: true, message: 'person Found', data: deletePerson });
    } catch (error) {
        console.log({ success: false, message: 'Data not delete By Id', error: error.message });
    }

});

// work Type api

router.get('/:work', async (req, res) => {
    try {
        const { work } = req.params;

        if (work == 'chief' || work == 'manager' || work == 'waiter') {

            const response = await Person.find({ work: work });

            res.status(200).json({ success: true, message: 'person Found by work', worktype: response });
        } else {
            res.status(400).json({ success: false, message: 'person not Found by work', worktype: response });
        }
    } catch (error) {
        console.log({ success: false, message: 'Data not found By worketype', });
    }

});

// update person By Id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const {updatedPerson} = req.body;

        const response = await Person.findByIdAndUpdate(id, updatedPerson, {
            new: true,
            runValidators: true
        });

        if (!response) {
            res.status(404).json({ success: false, message: 'Data Not Updated !' });
        }
        res.status(200).json({ success: true, message: 'Data Updated !', data: response });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Data Not Updated !!', data: response });
    }

});
// you need to import this router to another file where you want to use
module.exports = router;