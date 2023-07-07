const express = require('express');
const router = express.Router();
const {  registerCompany, loginCompany,applications, postJob } = require('../controllers/companyController.js');

const {protect} = require('../middleware/authMiddleware.js')

router.route('/register').post(registerCompany);
router.route('/login').post(loginCompany);
router.route('/applications').get(protect, applications);
router.route('/postjob').get(protect, postJob);




module.exports = router;