var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'sendemailapi9@gmail.com',
        pass: 'kmdtooirvzgbcqxu'
    }
});

module.exports = {
    async sendEmail(req, res) {
        var mailOptions = {
            from: req.body.email,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json("message successfully sended!");
    }
}