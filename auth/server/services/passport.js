const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function (
  email,
  password,
  done
) {
  // Verify this username and passowrd, call done with the user
  // if it is the correct user and password
  // otherwise, call done with false
  User.findOne({ email })
    .then((user) => {
      if (!user) return done(null, false);
      // compare password
      user.comparePassword(password, function (err, isMatch) {
        if (err) return done(err);
        if (!isMatch) return done(null, false);

        return done(null, user);
      });
    })
    .catch((err) => {
      return done(err);
    });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the use ID in the payload exist in our db
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      return done(err, false);
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
