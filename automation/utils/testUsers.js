require('dotenv').config();

module.exports = {

    standardUser: {
        username: process.env.STANDARD_USER,
        password: process.env.PASSWORD
    },

    invalidUser: {
        username: process.env.STANDARD_USER,
        password: process.env.WRONG_PASSWORD
    },

    lockedUser: {
        username: process.env.LOCKED_USER,
        password: process.env.PASSWORD
    }

};