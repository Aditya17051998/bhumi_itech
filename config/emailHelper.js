// require('dotenv').config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
// const { appUrl, reactAppUrl } = require('../config/index');
const { statusCode } = require("./constant");


const emailVerification = (userData) => new Promise((resolve , reject) => {
    const email = {
        to: userData.email,
        from: process.env.VERIFICATION_EMAIL,
        subject: "Verify Masko Legal Account",
        html: `<h1>Please Verify Email Address</h1><br>Please click on the below link to verify your account /authentication/verification/${userData.token}`
    };
    sgMail.send(email)
        .then((response) => {
            resolve({
                status: statusCode.Success,
                message: "Email Sent Successfully"
            });
        })
        .catch((error) => {
            reject({
                status: statusCode.Failure,
                message: "Error while sending verification mail",
                error: error.message
            })
        });
});

const passwordRecoveryEmail = (userData) => new Promise((resolve , reject) => {
    const email = {
        to: userData.email,
        from: process.env.VERIFICATION_EMAIL,
        subject: "Reset Password for Masko Legal",
        html: `<h1>Please Verify Email Address</h1><br>Please click on the below link to reset password of your account /resetPassword/${userData.token}`
    };
    sgMail.send(email)
        .then((response) => {
            resolve({
                status: statusCode.Success,
                message: "Email Sent Successfully"
            });
        })
        .catch((error) => {
            reject({
                status: statusCode.Failure,
                message: "Error while sending verification mail",
                error: error.message
            })
        });
});


module.exports = {
    emailVerification,
    passwordRecoveryEmail
}