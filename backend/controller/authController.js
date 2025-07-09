const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors')
const { attachCookies, createTokenUser } = require('../utils');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError('Email Already Exists');
        // return res.status(StatusCodes.BAD_REQUEST).json({msg:  'Email already exists'});
    }
    if(!email || !name || !password) {
        throw new CustomError.BadRequestError('Please provide all details');
    }

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin': 'user';

    const verificationToken = 'token';

    const user = User.create({ name, email, password, role, verificationToken });

    res.status(StatusCodes.CREATED).json({ msg: 'Please check your email to verify your account', verificationToken: user.verificationToken});
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new CustomError.BadRequestError('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }
    const tokenUser = createTokenUser(user);
    attachCookies({ res, user: tokenUser});
    res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCodes.OK).json({ msg: 'User logged out !!'});
};

module.exports = { 
    register,
    login,
    logout
};