const express = require('express');
const router = express.Router();

const {
  storePassword,
  updatePassword,
  deletePassword,
  showPassword,
  showAllPasswords,
  passwordStrengthTester,
  passwordGenerator,
} = require('../controller/passwordManagerController');

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

router.route('/').post(authenticateUser, storePassword);
router
  .route('/passwordStrengthTester')
  .post(authenticateUser, passwordStrengthTester);
router
  .route('/passwordGenerator')
  .get(authenticateUser, passwordGenerator);
router.route('/showPassword').post(authenticateUser, showPassword);
router
  .route('/showAllPassword')
  .get(authenticateUser, showAllPasswords);
router
  .route('/:id')
  .patch(authenticateUser, updatePassword)
  .delete(authenticateUser, deletePassword);

module.exports = router;
