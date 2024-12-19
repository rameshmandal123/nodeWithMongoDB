const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./../models/Person');

// passwor and usrname authentication middleware
passport.use(new LocalStrategy(async (USERNAME, password, done) => {
    // Authentication Logic
    try {
        //console.log("Receive credentials : ", USERNAME, password);
        const user = await Person.findOne({ username: USERNAME, });
        if (!user)
            return done(null, false, { message: 'Incorrect Usename' })
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Password Not Match' });
        }
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;