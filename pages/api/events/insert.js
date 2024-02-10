import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, EventDate, EventCategoryRefId, EventHeading, EventName, EventImage, EventAmount, EventClassCount, EventMembers, EventRating, EventStarRating } = req.body;
    try {
      await sql.connect(config);
      if(EventCategoryRefId !== 0 && EventHeading !== ""){
        if(Id !== 0){
          await sql.query`Update EventMaster set Date=${EventDate}, EventCategoryRefId=${EventCategoryRefId}, EventHeading=${EventHeading}, EventName=${EventName}, EventImage=${EventImage}, EventAmount=${EventAmount}, EventClassCount=${EventClassCount}, EventMembers=${EventMembers}, EventRating=${EventRating}, EventStarRating=${EventStarRating}, Active=${1}, Modified_Date=${EventDate}, Modified_By=${"Admin"} where Id=${Id}`;        
          res.status(200).json({ message: 'Event updated successfully' });
        }
        else {
          await sql.query`Insert into EventMaster (Date, EventCategoryRefId, EventHeading, EventName, EventImage, EventAmount, EventClassCount, EventMembers, EventRating, EventStarRating, Status, Active, Created_Date, Creadted_By) values (${EventDate}, ${EventCategoryRefId}, ${EventHeading}, ${EventName}, ${EventImage}, ${EventAmount}, ${EventClassCount}, ${EventMembers}, ${EventRating}, ${EventStarRating}, ${"1"}, ${1}, ${EventDate}, ${"Admin"})`;
         res.status(200).json({ message: 'Event inserted successfully' });
        }     
      } 
      else {
        res.status(500).json("Invalid event heading and category name");
      }
  } catch (error) {
      console.error('Error inserting event:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};