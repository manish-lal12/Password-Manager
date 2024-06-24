const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors')
const { createTokenUser, attachCookies, checkPermissions } = require('../utils');
 
const getAllUser = async (req, res) => {
    const users = await User.find({ role: 'user' }).select('-password');
    if(!users) {
        throw new CustomError.NotFoundError('No user exists..')
    }

    res.status(StatusCodes.OK).json({ users })
};

const getSingleUser = async (req, res) => {
    const {id: userId} = req.params;
    const user = await User.findOne({_id: userId}).select('-password');

    if(!user){
        throw new CustomError.NotFoundError(`No user exists with id: ${userId}`)
    }

    checkPermissions(req.user, user._id);
    res.status(StatusCodes.OK).json({ user });

}; 

const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({user: req.user.userId});
}

const updateUser = async (req, res) => {
    const { name, email } = req.body;
    if(!name || !email) {
        throw new CustomError.BadRequestError('Please provide all values');
    }
    const user = await User.findOne({_id: req.user.userId});

    if(!user) {
        throw new CustomError.NotFoundError(`No user with id: ${req.user.userId}`)
    }

    user.name = name;
    user.email = email;

    await user.save();

    const tokenUser = createTokenUser(user);
    attachCookies({ res, user: tokenUser});
    res.status(StatusCodes.OK).json({ user: tokenUser });
};

const updateUserPassword = async (req, res) => {
    const {oldPassword, newPassword} = req.body;
    if (!oldPassword || !newPassword) {
        throw new CustomError.BadRequestError('Please provide both values');
    }
    const user = await User.findOne({_id: req.user.userId});
    const isPasswordCorrect = await user.comparePassword(oldPassword);
    if(!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }
    user.password = newPassword;

    await user.save();
    res.status(StatusCodes.OK).json({msg: 'Password updated successfully'});
};

const deleteUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findOne({_id: userId});
    if(!user) {
        throw new CustomError.NotFoundError(`No user with id: ${userId}`)
    }
    await user.deleteOne();

    res.status(StatusCodes.OK).json({msg: 'User deleted successfully'});
};

module.exports = {
    getAllUser,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
    deleteUser
}