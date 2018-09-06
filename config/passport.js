var passport = require('passport');
var User = require("../models/user");
var localStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null,user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    })    
});

passport.use('local-signup', new localStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, function(req, email, password, done){
    console.log("1");
    User.findOne({'email' : email}, function(err, user){
        if(err){
            console.log('err');
            return done(err);
        }        
        console.log("2" + JSON.stringify(user));
        if(user) {
            return done(null, false, {message : 'Email is already in use.'});
        }
        
        console.log("3");
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result){            
            console.log("4");
            if(err){
                console.log('err');
                return done(err);
            }
            console.log("5");
            return done(null, newUser);
        });
    });
}));