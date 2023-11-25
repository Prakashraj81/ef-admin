import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, Name, Email, PhoneNo, Password, Created_Date } = req.body;
    // Validate Phone Number: 10-digit
    const phoneNoPattern = /^\d{10}$/;
    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }
    else{
        try {
            await sql.connect(config);
            if(Id !== 0) {
                await sql.query`UPDATE Authentication SET Name=${Name}, Email=${Email}, PhoneNo=${PhoneNo}, Password=${Password}, OTP=${"123456"}, SessionStatus=${"1"}, Active=${1}, Modified_Date=${Created_Date}, Modified_By=${"Admin"} WHERE Id=${Id}`;
            }
            else{
                await sql.query`Insert into Authentication (Name, Email, PhoneNo, Password, OTP, SessionStatus, Active, Created_Date, Creadted_By) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${"123456"}, ${"1"}, ${1}, ${Created_Date}, ${"Admin"})`;
            }            
            res.status(200).json({ message: 'User inserted successfully' });
        } catch (error) {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};