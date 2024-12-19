const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ["chief", "waiter", "manager"],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

personSchema.pre('save', async function (next){
    const person = this;
    if (!person.isModified('password')) return next();
    try {
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash Password
        const hashPassword = await bcrypt.hash(person.password, salt);

        // Override the plain text with hashed one
        person.password = hashPassword;
        next();
    } catch (err) {
        return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){

    }
}

// create person model..
const Person = mongoose.model('Person', personSchema);
module.exports = Person;