const express = require('express');
const router = express.Router();

const passwordStrengthTester = require('../controller/strengthTester');
const passwordGenerator = require('../controller/passwordGenerator')

router.route('/strengthTest').post(passwordStrengthTester)
router.route('/generator').get(passwordGenerator);

module.exports = router;