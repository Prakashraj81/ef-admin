import { sql, config } from '/config';


export default async (req, res) => {
let { PhoneNo, Password } = req.body;
  try {
    await sql.connect(config);
    let result = await sql.query`Select * from Authentication where PhoneNo=${PhoneNo} and Password=${Password} and Active=1`;
    // if (Id !== 0) {
    //   result = await sql.query`Select * from Authentication where Id=${Id}`;
    // } else {
    //   result = await sql.query`Select * from Authentication where UserName=${UserName} and Password=${Password}`;
    // }

    if (result.recordset.length !== 0) {
      const user = result.recordset;
      res.status(200).json({ user });
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
