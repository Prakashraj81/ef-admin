import { sql, config } from '/config';

export default async (req, res) => {
  let { Id } = req.body;
  try {
    await sql.connect(config);
    let result;
    if (Id !== 0) {
      result = await sql.query`Select * from EventCategoryMaster where Id=${Id}`;
    } else {
      result = await sql.query`Select * from EventCategoryMaster`;
    }

    if (result.recordset.length !== 0) {
      const eventcategory = result.recordset;
      res.status(200).json({ eventcategory });
    } else {
      res.status(401).json({ error: 'Event category list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
