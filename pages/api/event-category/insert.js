import { sql, config } from '/config';

//Event category create api
export default async (req, res) => {
    const { Id, EventDate, EventCategoryName, EventCategoryImage } = req.body;    
    try {
      await sql.connect(config);
      if(Id !== 0){
        await sql.query`Update event_category_master set date=${EventDate}, event_category_name=${EventCategoryName}, event_category_image=${EventCategoryImage}, active=${1}, modified_date=GETDATE(), modified_by=${"Admin"} where id=${Id}`;        
        res.status(200).json({ message: 'Event category updated successfully' });
      }
      else {
        await sql.query`Insert into event_category_master (date, event_category_name, event_category_image, status, active, created_date, creadted_by) values (${EventDate}, ${EventCategoryName}, ${EventCategoryImage}, ${EventCategoryImage}, ${1}, GETDATE(), ${"Admin"})`;
       res.status(200).json({ message: 'Event category inserted successfully' });
      }      
  } catch (error) {
      console.error('Error inserting event category:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};