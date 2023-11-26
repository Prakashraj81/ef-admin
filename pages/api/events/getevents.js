import { sql, config } from '/config';

export default async (req, res) => {
  try {
    await sql.connect(config);
    let result = await sql.query`Select * from EventMaster where Active=1`;    
    if (result.recordset.length !== 0) {
      const event = result.recordset;
      res.status(200).json({ event });
    } else {
      res.status(401).json({ error: 'event list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
