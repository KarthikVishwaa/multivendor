const nodemailer = require('nodemailer');
async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'visvagiri638154@gmail.com',
            pass: 'oqfwavxvldayqnnp'
        }
    });

    const mailOptions = {
        from: 'visvagiri',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
