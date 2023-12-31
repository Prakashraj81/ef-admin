import { sql, config } from '/config';

export default async (req, res) => {
  let { Id } = req.body;
  try {
    await sql.connect(config);
    let result;
    if (Id !== 0) {
      result = await sql.query`Select * from EventMaster where Id=${Id}`;
    } else {
      result = await sql.query`Select * from EventMaster`;
    }

    if (result.recordset.length !== 0) {
      const event = result.recordset;
      res.status(200).json({ event });
    } else {
      res.status(401).json({ error: 'Event list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
