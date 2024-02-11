import { sql, config } from '/config';

export default async (req, res) => {
  const {EventCategoryRefId} = req.body;
  try {
    if(EventCategoryRefId !== 0){
      await sql.connect(config);
      let result = await sql.query`Select id, date, event_category_ref_id, event_heading, event_name, event_image, event_amount, event_class_count, event_members, event_rating, event_star_rating, status, active, (select event_category_name from event_category_master where id=event_category_ref_id) as event_category_name from event_master where event_category_ref_id=${EventCategoryRefId}`;    
      if (result.recordset.length !== 0) {
        const events = result.recordset;
        res.status(200).json({ events });
      } else {
        res.status(200).json({result});
      }
    }
    else{
      res.status(401).json({ error: 'EventCategoryRefId not found' });
    }    
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error });
  } finally {
    await sql.close();
  }
};
