import { sql, config } from '/config';

//User create api
export default async (req, res) => {
    const { EnquiryDateInput, FirstNameInput, LastNameInput, EnquiryTypeInput, EmailInput, 
        PhoneNumberInput, BusinessUnitInput, Address_1Input, Address_2Input, CityInput, DistrictInput, PincodeInput,
        StateInput, CountryInput, IndustryInput, IndustryOthersInput, JobLevelInput, JobTitleInput } = req.body;
    try {
      await sql.connect(config);
      await sql.query`Insert into customer_enquiry_master (date, first_name, last_name, full_name, enquiry_type, email,
         phone_number_1, industry, industry_others, job_level, job_title, business_unit, address_1, address_2, city,
          district, pincode, state, country, active, created_date, creadted_by) 
          values (${EnquiryDateInput}, ${FirstNameInput}, ${LastNameInput}, ${FirstNameInput+LastNameInput},
             ${EnquiryTypeInput}, ${EmailInput}, ${PhoneNumberInput}, ${IndustryInput}, ${IndustryOthersInput},
              ${JobLevelInput}, ${JobTitleInput}, ${BusinessUnitInput}, ${Address_1Input}, ${Address_2Input},
               ${CityInput}, ${DistrictInput}, ${PincodeInput}, ${StateInput}, ${CountryInput}, ${1}, ${EnquiryDateInput},
                ${"Admin"})`;
         res.status(200).json({ message: 'Customer enquiry inserted successfully' });
  } catch (error) {
      console.error('Error inserting enquiry:', error);
      res.status(500).json({ error: error });
  }
  finally {
    await sql.close();
  }
};