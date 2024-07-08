const express = require('express');
const router = express.Router();
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')

const { getAllUser, getSingleUser, showCurrentUser, updateUser, updateUserPassword, deleteUser} = require('../controller/userController')

router
    .route('/')
    .get(authenticateUser, authorizePermissions('admin'), getAllUser);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/:id')
    .get(authenticateUser, getSingleUser)
    .delete(authenticateUser, authorizePermissions('admin'), deleteUser);


module.exports = router;