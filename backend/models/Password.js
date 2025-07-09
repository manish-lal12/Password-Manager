const mongoose = require('mongoose');

const PasswordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        unique: true
    }
});

// UserSchema.pre('save', async function () {
//     // console.log(this.modifiedPaths());
//     // console.log(this.isModified('name'));
//     if (!this.isModified('password')) return;
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   });

PasswordSchema.pre('save', async function () {
    await PasswordSchema.create({password})
})
module.exports = mongoose.model('Password', PasswordSchema);