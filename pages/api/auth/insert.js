import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Name, Email, PhoneNo, Password, Created_Date } = req.body;
    // Validate Phone Number: 10-digit
    const phoneNoPattern = /^\d{10}$/;
    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }
    else{
        try {
            await sql.connect(config);
            await sql.query`Insert into Authentication (Name, Email, PhoneNo, Password, OTP, SessionStatus, Active, Created_Date, Creadted_By) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${"123456"}, ${"1"}, ${1}, ${Created_Date}, ${"Admin"})`;
            res.status(200).json({ message: 'Authentication inserted successfully' });
        } catch (error) {
            console.error('Error inserting department:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

// //Forget password api
// export default async (req, res) => {
//     const { Id, Password } = req.body;
//     if(Id !== 0 && Password !== "") {
//         try{
//             await sql.connect(config);
//             await sql.query`Update Authentication set Password=${Password} where Id=${Id}`;
//             res.status(200).json({message: 'Authentication updated successfully'});
//         } catch (error) {
//             console.error('Error updating authentication:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     }
//     else {
//         console.log("Error");
//     }
// }