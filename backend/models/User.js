const mongoose =  require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide username'],
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        }
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 3,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    verificationToken: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verified: {
        type: Date
    }
});

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.post('deleteOne', async function() {
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema)