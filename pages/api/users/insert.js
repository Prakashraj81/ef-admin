import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, Name, Email, PhoneNo, Password, AuthorityRights, CurrentDate } = req.body;
    // Validate Phone Number: 10-digit
    const phoneNoPattern = /^\d{10}$/;
    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }
    else{
        try {
            await sql.connect(config);
            if(Id !== 0) {
                await sql.query`UPDATE authentication_master SET name=${Name}, email=${Email}, phone_number=${PhoneNo}, password=${Password}, auth_rights=${AuthorityRights}, session_status=${"1"}, active=${1}, modified_date=GETDATE(), modified_by=${"Admin"} WHERE id=${Id}`;
            }
            else{
                await sql.query`Insert into authentication_master (name, email, phone_number, password, auth_rights, session_status, active, created_date, creadted_by) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${AuthorityRights}, ${"1"}, ${1}, GETDATE(), ${"Admin"})`;
            }            
            res.status(200).json({ message: 'User inserted successfully' });
        } catch (error) {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};