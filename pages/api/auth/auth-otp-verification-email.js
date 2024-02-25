import { sql, config } from '/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'kassaposprakash@gmail.com',
        pass: 'xcbffvhzbbfcxrwc' //xcbf fvhz bbfc xrwc
    }
});
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP verification failed:', error);
    } else {
        console.log('SMTP server is ready to send emails');
    }
});
console.log('Transporter Configuration:', transporter.options);

export default async (req, res) => {
    let {Name, Email, PhoneNo, CurrentDate} = req.body;
    try {
        await sql.connect(config);
        let otp = generateOTP();
        let email = req.body.Email;
        let phone_number = req.body.PhoneNo;
        const query = `INSERT INTO auth_otp_table (name, email, phone_number, auth_otp, status, active, created_date, creadted_by) VALUES ('${Name}', '${Email}', '${PhoneNo}', '${otp}', 'verified', '1', '${CurrentDate}', 'Admin')`;
        await sql.query(query);

        // Send OTP via email
        const mailOptions = {
            from: 'kassaposprakash@gmail.com',
            to: 'aprakashraj81@gmail.com',
            subject: 'Email OTP Verification',
            text: `Your OTP for email verification is: ${otp}`
        };
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Error sending email' });
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        await sql.close();
        res.json({ message: 'OTP sent successfully', email, phone_number, otp });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: error });
    }
};

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}


