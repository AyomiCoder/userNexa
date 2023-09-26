const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')




// User routes

router.get('/usernexa', userController.home)
router.get('/add', userController.addUser)
router.post('/add', userController.postUser)

module.exports = router;