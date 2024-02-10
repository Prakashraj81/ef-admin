import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, ServiceDate, Heading_1, Contents_1, Image_1, Heading_2, Contents_2, Image_2, Heading_3, Contents_3, Image_3, Heading_4, Contents_4, Image_4, ServiceAmount } = req.body;
    try {
      await sql.connect(config);
      if(Heading_1 !== "" && Contents_1 !== ""){
        if(Id !== 0){
          await sql.query`Update ServiceMaster set Date=${ServiceDate}, ServiceHeading_1=${Heading_1}, ServiceHeading_2=${Heading_2}, ServiceHeading_3=${Heading_3}, ServiceContent_1=${Contents_1}, ServiceContent_2=${Contents_2}, ServiceContent_3=${Contents_3}, Service_Image_1=${Image_1}, Service_Image_2=${Image_2}, Service_Image_3=${Image_3}, ServiceAmount=${ServiceAmount}, Active=${1}, Modified_Date=${ServiceDate}, Modified_By=${"Admin"} where Id=${Id}`;        
          res.status(200).json({ message: 'Event updated successfully' });
        }
        else {
          await sql.query`Insert into ServiceMaster (Date, ServiceHeading_1, ServiceHeading_2, ServiceHeading_3, ServiceContent_1, ServiceContent_2, ServiceContent_3, Service_Image_1, Service_Image_2, Service_Image_3, ServiceAmount, Status, Active, Created_Date, Creadted_By) 
          values (${ServiceDate}, ${Heading_1}, ${Heading_2}, ${Heading_3}, ${Contents_1}, ${Contents_2}, ${Contents_3}, ${Image_1}, ${Image_2}, ${Image_3}, ${ServiceAmount}, ${"1"}, ${1}, ${ServiceDate}, ${"Admin"})`;
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