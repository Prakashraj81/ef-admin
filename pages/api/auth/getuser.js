import { sql, config } from '/config';
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
let { PhoneNo, Password } = req.body;
  try {
    await sql.connect(config);
    let result = await sql.query`Select * from Authentication where PhoneNo=${PhoneNo} and Password=${Password} and Active=1`;
     // Generate and return a JWT token
    const token = generateAuthToken(user);      
    // if (Id !== 0) {
    //   result = await sql.query`Select * from Authentication where Id=${Id}`;
    // } else {
    //   result = await sql.query`Select * from Authentication where UserName=${UserName} and Password=${Password}`;
    // }

    if (result.recordset.length !== 0) {
      const user = result.recordset;
      res.status(200).json({ token, user });
    } else {
      res.status(401).json({ error: 'User list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
