const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menu');

//crete a method to save menu items.
router.post('/api/menu', async (req, res) => {
    try {
        const menuData = req.body;

        const newMenuItem = new MenuItem(menuData);

        const savedMenu = await newMenuItem.save();

        res.status(201).json({ success: true, message: 'Menu item created!', data: savedMenu });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error creating menu item', error: err.message });
    }
});



module.exports = router;
