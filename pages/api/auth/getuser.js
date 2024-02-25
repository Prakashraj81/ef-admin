// import { sql, config } from '/config';

// export default async (req, res) => {
//   try {
//     await sql.connect(config);
//     let result = await sql.query`Select count(id) from authentication_master`;    
//     if (result.recordset.length !== 0) {
//       const count = result.recordset;
//       res.status(200).json({ count });
//     } else {
//       res.status(401).json({ error: 'User count not found' });
//     }
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).json({ error: error });
//   } finally {
//     await sql.close();
//   }
// };


import { sql, config } from '/config';

export default async (req, res) => {
  let { EnterOTP } = req.body;
  try {
    await sql.connect(config);
    let result;
    if (EnterOTP !== "") {
      result = await sql.query`Select auth_otp from auth_otp_table where auth_otp=${EnterOTP}`;
    } else {
      result = await sql.query`Select * from auth_otp_table`;
    }

    if (result.recordset.length !== 0) {
      const user = result.recordset;
      res.status(200).json({ user });
    } else {
      res.status(401).json({ error: 'User list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await sql.close();
  }
};
