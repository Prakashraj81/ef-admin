import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { Id, EnquiryDate, FullName, Email, PhoneNo, Message } = req.body;
    try {
      await sql.connect(config);
      if(FullName !== "" && Email !== ""){
        if(Id !== 0){
          await sql.query`Update EnquiryListMaster set Date=${EnquiryDate}, FullName=${FullName}, Email=${Email}, PhoneNo=${PhoneNo}, Message=${Message}, Active=${1}, Modified_Date=${EnquiryDate}, Modified_By=${"Admin"} where Id=${Id}`;        
          res.status(200).json({ message: 'Enquiry updated successfully' });
        }
        else {
          await sql.query`Insert into EnquiryListMaster (Date, FullName, Email, PhoneNo, Message, Status, Active, Created_Date, Creadted_By) 
          values (${EnquiryDate}, ${FullName}, ${Email}, ${PhoneNo}, ${Message}, ${"1"}, ${1}, ${EnquiryDate}, ${"Admin"})`;
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