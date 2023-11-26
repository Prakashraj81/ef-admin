import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, ReviewDate, CustomerName, City, Contents, AvgRating } = req.body;
    try {
      await sql.connect(config);
      if(Id !== 0){
        await sql.query`Update TestimonialsMaster set Date=${ReviewDate}, CustomerName=${CustomerName}, City=${City}, Message=${Contents}, Rating=${AvgRating}, StarRating=${AvgRating}, Active=${1}, Modified_Date=${ReviewDate}, Modified_By=${"Admin"} where Id=${Id}`;        
        res.status(200).json({ message: 'Testimonial updated successfully' });
      }
      else {
        await sql.query`Insert into TestimonialsMaster (Date, CustomerName, City, Message, Rating, StarRating, Status, Active, Created_Date, Creadted_By) values (${ReviewDate}, ${CustomerName}, ${City}, ${Contents}, ${AvgRating}, ${AvgRating}, ${"1"}, ${1}, ${ReviewDate}, ${"Admin"})`;
       res.status(200).json({ message: 'Testimonial inserted successfully' });
      }      
  } catch (error) {
      console.error('Error inserting testimonial:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};