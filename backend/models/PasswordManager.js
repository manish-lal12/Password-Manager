const mongoose = require('mongoose');
const cryptoJS = require('crypto-js');

const PasswordManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide domain name or URL']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    },
},
    {timestamps: true, toJSON: {virtuals: true, toObject: { virtuals: true }}}
);


PasswordManagerSchema.pre('save', async function () {
    
    if(!this.isModified('password')) return;

    const encryptedData = cryptoJS.AES.encrypt(this.password, process.env.ENCRYPTION_KEY).toString();
    this.password = encryptedData;
})

PasswordManagerSchema.methods.comparePassword = async function (candidatePassword) {
    const bytes = cryptoJS.AES.decrypt(this.password, process.env.ENCRYPTION_KEY);
    if(bytes.sigBytes > 0) {
        const decryptedData = bytes.toString(cryptoJS.enc.Utf8);
        const isMatch = (decryptedData === candidatePassword);
        return isMatch;
    } else {
        console.log('Error, invalid key');
    }
};


module.exports = mongoose.model('PasswordManager', PasswordManagerSchema);