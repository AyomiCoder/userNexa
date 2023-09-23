const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')




// User routes

router.get('/api', userController.home)
router.get('/add', userController.addUser)

module.exports = router;