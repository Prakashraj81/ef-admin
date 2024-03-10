import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, ReviewDate, CustomerName, City, Contents, AvgRating } = req.body;
    try {
      await sql.connect(config);
      if(Id !== 0){
        await sql.query`Update testimonials_master set date=${ReviewDate}, customer_name=${CustomerName}, city=${City}, message=${Contents}, rating=${AvgRating}, star_rating=${AvgRating}, active=${1}, modified_date=GETDATE(), modified_by=${"Admin"} where id=${Id}`;        
        res.status(200).json({ message: 'Testimonial updated successfully' });
      }
      else {
        await sql.query`Insert into testimonials_master (date, customer_name, city, message, rating, star_rating, status, active, created_date, creadted_by) values (${ReviewDate}, ${CustomerName}, ${City}, ${Contents}, ${AvgRating}, ${AvgRating}, ${"1"}, ${1}, GETDATE(), ${"Admin"})`;
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