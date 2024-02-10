import { sql, config } from '/config';

export default async (req, res) => {
  const {EventCategoryRefId} = req.body;
  try {
    if(EventCategoryRefId !== 0){
      await sql.connect(config);
      let result = await sql.query`Select Id, Date, EventCategoryRefId, EventHeading, EventName, EventImage, EventAmount, EventClassCount, EventMembers, EventRating, EventStarRating, Status, Active, (select EventCategoryName from EventCategoryMaster where Id=EventCategoryRefId) as EventCategoryName from EventMaster where EventCategoryRefId=${EventCategoryRefId}`;    
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
