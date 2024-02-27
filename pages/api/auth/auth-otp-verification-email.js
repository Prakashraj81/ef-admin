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
        const query = `INSERT INTO auth_otp_table (name, email, phone_number, auth_otp, status, active, created_date, creadted_by) VALUES ('${Name}', '${email}', '${phone_number}', '${otp}', '1', 1, '${CurrentDate}', 'Admin')`;
        await sql.query(query);

        // Send OTP via email
        const mailOptions = {
            from: 'kassaposprakash@gmail.com',
            to: 'aprakashraj81@gmail.com',
            subject: 'Email OTP Verification',
            html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Eftapei Mind Makeover</title>
            
                <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                  rel="stylesheet"
                />
              </head>
              <body
                style="
                  margin: 0;
                  font-family: 'Poppins', sans-serif;
                  background: #ffffff;
                  font-size: 14px;
                "
              >
                <div
                  style="
                    max-width: 680px;
                    margin: 0 auto;
                    padding: 45px 30px 60px;
                    background: #f4f7ff;
                    background-image: url(https://ef-admin-eight.vercel.app/about/bg-about.svg);
                    background-repeat: no-repeat;
                    background-size: 800px 452px;
                    background-position: top center;
                    font-size: 14px;
                    color: #434343;
                  "
                >
                  <header>
                    <table style="width: 100%;">
                      <tbody>
                        <tr style="height: 0;">
                          <td>
                            <img
                              alt=""
                              src="https://ef-admin-eight.vercel.app/logo/header-logo.jpg"
                              height="30px"
                            />
                          </td>
                          <td style="text-align: right;">
                            <span
                              style="font-size: 16px; line-height: 30px; color: #ffffff;"
                              >${CurrentDate}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </header>
            
                  <main>
                    <div
                      style="
                        margin: 0;
                        margin-top: 70px;
                        padding: 92px 30px 115px;
                        background: #ffffff;
                        border-radius: 30px;
                        text-align: center;
                      "
                    >
                      <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                        <h1
                          style="
                            margin: 0;
                            font-size: 24px;
                            font-weight: 500;
                            color: #1f1f1f;
                          "
                        >
                          Your OTP
                        </h1>
                        <p
                          style="
                            margin: 0;
                            margin-top: 17px;
                            font-size: 16px;
                            font-weight: 500;
                          "
                        >
                          Hey Eftapei admin or emaployee,
                        </p>
                        <p
                          style="
                            margin: 0;
                            margin-top: 17px;
                            font-weight: 500;
                            letter-spacing: 0.56px;
                          "
                        >
                          Thank you for choosing Eftapei Mind makeover. Use the following OTP
                          to complete the procedure to change your email address. OTP is
                          valid for
                          <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                          Do not share this code with others, including Eftapei
                          employees.
                        </p>
                        <p
                          style="
                            margin: 0;
                            margin-top: 60px;
                            font-size: 40px;
                            font-weight: 600;
                            letter-spacing: 25px;
                            color: #ba3d4f;
                          "
                        >
                          ${otp}
                        </p>
                      </div>
                    </div>                            
                  </main>                
                </div>
              </body>
            </html>
            `
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