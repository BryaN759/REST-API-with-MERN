const express = require('express');
const router = express.Router();

const {  registerUser, loginUser, getMe, about, contact} = require('../controllers/userController.js');
const { get } = require('mongoose');

const {protect} = require('../middleware/authMiddleware.js')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(protect, getMe);
router.route('/about').get(protect, getMe);
router.route('/contact').get(protect, getMe);




module.exports = router;