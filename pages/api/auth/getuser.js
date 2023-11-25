import { sql, config } from '/config';

export default async (req, res) => {
  try {
    await sql.connect(config);
    let result = await sql.query`Select count(Id) from Authentication`;    
    if (result.recordset.length !== 0) {
      const count = result.recordset;
      res.status(200).json({ count });
    } else {
      res.status(401).json({ error: 'User count not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
