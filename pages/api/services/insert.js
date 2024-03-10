import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, ServiceDate, Heading_1, Contents_1, Image_1, Heading_2, Contents_2, Image_2, Heading_3, Contents_3, Image_3, Heading_4, Contents_4, Image_4, ServiceAmount } = req.body;
    try {
      await sql.connect(config);
      if(Heading_1 !== "" && Contents_1 !== ""){
        if(Id !== 0){
          await sql.query`Update service_master set date=${ServiceDate}, service_heading_1=${Heading_1}, service_heading_2=${Heading_2}, service_heading_3=${Heading_3}, service_content_1=${Contents_1}, service_content_2=${Contents_2}, service_content_3=${Contents_3}, service_image_1=${Image_1}, service_image_2=${Image_2}, service_image_3=${Image_3}, service_amount=${ServiceAmount}, active=${1}, modified_date=GETDATE(), modified_by=${"Admin"} where id=${Id}`;        
          res.status(200).json({ message: 'Event updated successfully' });
        }
        else {
          await sql.query`Insert into service_master (date, service_heading_1, service_heading_2, service_heading_3, service_content_1, service_content_2, service_content_3, service_image_1, service_image_2, service_image_3, service_amount, status, active, created_cate, creadted_by) 
          values (${ServiceDate}, ${Heading_1}, ${Heading_2}, ${Heading_3}, ${Contents_1}, ${Contents_2}, ${Contents_3}, ${Image_1}, ${Image_2}, ${Image_3}, ${ServiceAmount}, ${"1"}, ${1}, GETDATE(), ${"Admin"})`;
         res.status(200).json({ message: 'Service inserted successfully' });
        }     
      } 
      else {
        res.status(500).json("Invalid service heading and contents");
      }
  } catch (error) {
      console.error('Error inserting service:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};