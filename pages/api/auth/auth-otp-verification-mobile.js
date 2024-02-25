import { sql, config } from '/config';
const twilio = require('twilio');
//Refer twilio otp link  --> https://www.twilio.com/   user: aprakashraj81@gmail.com pwd: @Pr*******1
const accountSid = 'AC55c39f5c4c70e5fd61e6d058978f2307';
const authToken = 'ea6979c31f58908bd402167815945b5b';
//KKRWEK4NF8SHM6LCUVVRDADW     //Recovery code
const client = new twilio(accountSid, authToken);

export default async (req, res) => {
    let {Name, Email, PhoneNo, CurrentDate} = req.body;
    try {
        await sql.connect(config);
        const otp = generateOTP();
        const email = req.body.Email;
        const phone_number = req.body.PhoneNo;
        // const query = `Insert into auth_otp_table email, phone_number, otp, status, created_date, creadted_by) values (${email}, ${phone_number}, ${otp}, ${"1"}, ${CurrentDate}, ${"Admin"})`;
        // await sql.query(query);

        // Send OTP SMS using Twilio account
        await client.messages.create({
            body: `Name:${Name},
            Email: ${Email},
            User OTP is: ${otp}`,
            from: '9994039281',
            to: `${phone_number}`   
        });

        await sql.close();
        res.json({ message: 'OTP sent successfully', email, phone_number, otp });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: error });
    }
};

function generateOTP() {
    // Logic to generate a random OTP
    return Math.floor(1000 + Math.random() * 9000).toString();
}


