import { sql, config } from '/config';

export default async (req, res) => {
  let { Id } = req.body;
  try {
    await sql.connect(config);
    let result = await sql.query`Select * from customer_enquiry_master where enquiry_type=${"Email"}`;
    if (result.recordset.length !== 0) {
      const enquiry = result.recordset;
      res.status(200).json({ enquiry });
    } else {
      res.status(401).json({ error: 'Enquiry list not found' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
