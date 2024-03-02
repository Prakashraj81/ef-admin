import { sql, config } from '/config';
let dotenv = require('dotenv'); 
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.OTP_EMAIL_USER,
        pass: process.env.OTP_EMAIL_PWD //xcbf fvhz bbfc xrwc
    }
});
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP verification failed:', error);
    } else {
        console.log('SMTP server is ready to send emails');
    }
});

//User create api
export default async (req, res) => {
    let { EnquiryDateInput, FirstNameInput, LastNameInput, EnquiryTypeInput, EmailInput, 
        PhoneNumberInput, BusinessUnitInput, Address_1Input, Address_2Input, CityInput, DistrictInput, PincodeInput,
        StateInput, CountryInput, IndustryInput, IndustryOthersInput, JobLevelInput, JobTitleInput } = req.body;
    try {      
      await sql.connect(config);
      await sql.query`Insert into customer_enquiry_master (date, first_name, last_name, full_name, enquiry_type, email,
         phone_number_1, industry, industry_others, job_level, job_title, business_unit, address_1, address_2, city,
          district, pincode, state, country, active, created_date, creadted_by) 
          values (${EnquiryDateInput}, ${FirstNameInput}, ${LastNameInput}, ${FirstNameInput+LastNameInput},
             ${EnquiryTypeInput}, ${EmailInput}, ${PhoneNumberInput}, ${IndustryInput}, ${IndustryOthersInput},
              ${JobLevelInput}, ${JobTitleInput}, ${BusinessUnitInput}, ${Address_1Input}, ${Address_2Input},
               ${CityInput}, ${DistrictInput}, ${PincodeInput}, ${StateInput}, ${CountryInput}, ${1}, ${EnquiryDateInput},
                ${"Admin"})`;

    // Send OTP via email
    const mailOptions = {
      from: 'kassaposprakash@gmail.com',
      to: EmailInput,
      subject: 'Eftapei Mind Makeover',
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
              background-image: url(/about/bg-about.svg);
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
                        src="/logo/header-logo.jpg"
                        alt="logo"
                        style="height=30px;"
                      />
                    </td>
                    <td style="text-align: right;">
                      <span style="font-size: 16px; line-height: 30px; color: #ffffff;">
                        Date: ${EnquiryDateInput}
                      </span>
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
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-size: 16px;
                      font-weight: 500;
                    "
                  >
                    Hey ${FirstNameInput+LastNameInput},
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-weight: 500;
                      letter-spacing: 0.56px;
                    "
                  >
                    Thank you for choosing Eftapei Mind makeover.                    
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
                  </p>
                </div>
              </div>                            
            </main>  
            <div>
              <p>Best regards,</p></br>
              <p>Eftepei mind makeover</p></br>
            </div>              
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
    res.status(200).json({ message: 'Customer enquiry inserted successfully' });
  } catch (error) {
      console.error('Error inserting enquiry:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};


