import { sql, config } from '/config';

//Event category create api
export default async (req, res) => {
    const { Id, EventDate, EventCategoryName, EventCategoryImage } = req.body;    
    try {
      await sql.connect(config);
      if(Id !== 0){
        await sql.query`Update EventCategoryMaster set Date=${EventDate}, EventCategoryName=${EventCategoryName}, EventCategoryImage=${EventCategoryImage}, Active=${1}, Modified_Date=${EventDate}, Modified_By=${"Admin"} where Id=${Id}`;        
        res.status(200).json({ message: 'Event category updated successfully' });
      }
      else {
        await sql.query`Insert into EventCategoryMaster (Date, EventCategoryName, EventCategoryImage, Status, Active, Created_Date, Creadted_By) values (${EventDate}, ${EventCategoryName}, ${EventCategoryImage}, ${EventCategoryImage}, ${1}, ${EventDate}, ${"Admin"})`;
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