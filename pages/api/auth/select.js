import { sql, config } from '/config'; // Import necessary modules and config
import jwt from 'jsonwebtoken';

const secretKey = process.env.SENDINBLUE_API_KEY;

function generateAuthToken(user) {
    const payload = {
        id: user.Id,
        email: user.Email,  
        pwd: user.Password,      
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}


export default async (req, res) => {
    let {UserName, Password} = req.body;
    try {
        await sql.connect(config);
        let result = await sql.query`Select * from Authentication where PhoneNo=${UserName} and Password=${Password} and Active=1`;
        // if(result.recordset.length === 0) {
        //     result = await sql.query`Select Id from Authentication where Email=${UserName} and Password=${Password} and Active=1`;
        // }     
        if (result.recordset.length !== 0) {           
            const user = result.recordset[0];
            // Generate and return a JWT token
        //    const token = generateAuthToken(user);             
            res.status(200).json({ user });                    
        } else {
            // Invalid credentials            
            res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json(result.recordset);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: error });
    }
};