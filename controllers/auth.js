const User = require("../models/auth");

// @desc Register a new user
// route POST /auth/register
// access Public
exports.register = async(req, res, next) => {
    res.status(200).json({
        success: true,
        data: "register new users to the system",
    });
};

// @desc Login a registered user
// route POST /auth/login
// access Public
exports.login = async(req, res, next) => {
    res.status(200).json({
        success: true,
        data: "log in registered users and send back a token",
    });
};