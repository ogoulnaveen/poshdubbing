require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const sendEmail = async (email, token) => {
	console.log("here")
	const subject = 'Reset password';
	const resetPasswordUrl = `http://localhost:3000/reset-password/${token}`;
	const text = `Dear user, to reset your password, click on this link: ${resetPasswordUrl}
			If you did not request any password resets, then ignore this email.`;
	
	sgMail.setApiKey('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');
	let msg = {
		to: 'yoonus-pk@ogoul.com', // Change to your recipient
		from: 'pkyoonus09@gmail.com', // Change to your verified sender
		subject: subject,
		text: text,
		
	}
	sgMail
	.send(msg)
	.then(() => {
	console.log('Email sent')
	})
	.catch((error) => {
	console.error(error)
	})
};

module.exports = sendEmail;
