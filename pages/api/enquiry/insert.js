import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, EnquiryDate, FullName, Email, PhoneNo, Message } = req.body;
    try {
      await sql.connect(config);
      if(FullName !== "" && Email !== ""){
        if(Id !== 0){
          await sql.query`Update enquiry_list_master set date=${EnquiryDate}, full_name=${FullName}, email=${Email}, phone_number=${PhoneNo}, message=${Message}, active=${1}, modified_date=${EnquiryDate}, modified_by=${"Admin"} where id=${Id}`;        
          res.status(200).json({ message: 'Enquiry updated successfully' });
        }
        else {
          await sql.query`Insert into enquiry_list_master (date, full_name, email, phone_number, message, status, active, created_date, creadted_by) 
          values (${EnquiryDate}, ${FullName}, ${Email}, ${PhoneNo}, ${Message}, ${"1"}, ${1}, GETDATE(), ${"Admin"})`;
         res.status(200).json({ message: 'Enquiry inserted successfully' });
        }     
      } 
      else {
        res.status(500).json("Invalid enquiry name and email");
      }
  } catch (error) {
      console.error('Error inserting enquiry:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};