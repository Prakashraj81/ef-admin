import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, EventDate, EventCategoryRefId, EventHeading, EventName, EventImage, EventAmount, EventClassCount, EventMembers, EventRating, EventStarRating } = req.body;
    try {
      await sql.connect(config);
      if(EventCategoryRefId !== 0 && EventHeading !== ""){
        if(Id !== 0){
          await sql.query`Update event_master set date=${EventDate}, event_category_ref_id=${EventCategoryRefId}, event_heading=${EventHeading}, event_name=${EventName}, event_image=${EventImage}, event_amount=${EventAmount}, event_class_count=${EventClassCount}, event_members=${EventMembers}, event_rating=${EventRating}, event_star_rating=${EventStarRating}, active=${1}, modified_date=${EventDate}, modified_by=${"Admin"} where id=${Id}`;        
          res.status(200).json({ message: 'Event updated successfully' });
        }
        else {
          await sql.query`Insert into event_master (date, event_category_ref_id, event_heading, event_name, event_image, event_amount, event_class_count, event_members, event_rating, event_star_rating, status, active, created_date, creadted_by) values (${EventDate}, ${EventCategoryRefId}, ${EventHeading}, ${EventName}, ${EventImage}, ${EventAmount}, ${EventClassCount}, ${EventMembers}, ${EventRating}, ${EventStarRating}, ${"1"}, ${1}, ${EventDate}, ${"Admin"})`;
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