import React, { useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import { useRouter } from 'next/router';
import BlankLayout from "../../components/layouts/blank/BlankLayout";
import {
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  TablePagination,
  Tooltip,
} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DashboardCard from "../../components/shared/DashboardCard";
import { IconEdit, IconEyeEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomSelectField from '../../components/forms/theme-elements/CustomSelectField';
import CustomTextAreaField from '../../components/forms/theme-elements/CustomTextAreaField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import theme from "../../components/shared/theme";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../components/loader/backdrop-loader';
import SuccessAlert from "../../components/alert/success-alert";
import DeleteModal from "../../components/modal/delete-modal";

export default function EnquiryDashborad() {
    let [Authkey, setAuthkey] = useState(0);
    let sessionValue = 0;
    const router = useRouter();
    useEffect(() => {
      sessionValue = Number(sessionStorage.getItem('Auth'));    
      if (sessionValue) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      else{
        router.push(`/admin/auth/login`);
      }
      setAuthkey(sessionValue);
    });

  let [page, setPage] = React.useState(0);  
  let [SuccessMsg, setSuccessMsg] = React.useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    

   //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [FirstNameError, setFirstNameError] = useState(false); 
  let [LastNameError, setLastNameError] = useState(false); 
  let [EnquiryTypeError, setEnquiryTypeError] = useState(false); 
  let [EmailError, setEmailError] = useState(false); 
  let [PhoneNumberError, setPhoneNumberError] = useState(false);
  let [IndustryError, setIndustryError] = useState(false); 
  let [IndustryOthersError, setIndustryOthersError] = useState(false); 
  let [JobLevelError, setJobLevelError] = useState(false); 
  let [BusinessUnitError, setBusinessUnitError] = useState(false); 
  let [Address_1Error, setAddress_1Error] = useState(false); 

  let [ShowEmailInput, setShowEmailInput] = useState(true);
  let [ShowPhoneInput, setShowPhoneInput] = useState(true); 
  let [ShowIndustryOthers, setShowIndustryOthers] = useState(true);
  let [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);

    let EnquiryDateInput;
    let FirstNameInput;
    let LastNameInput; 
    let EnquiryTypeInput;   
    let EmailInput;
    let PhoneNumberInput;
    let BusinessUnitInput;
    let Address_1Input;
    let Address_2Input;
    let CityInput;
    let DistrictInput;
    let PincodeInput;
    let StateInput;
    let CountryInput;
    let IndustryInput;
    let IndustryOthersInput;
    let JobLevelInput;
    let JobTitleInput;

  function InputClearFunction(){
    EnquiryDateInput = "";
    FirstNameInput = "";
    LastNameInput = ""; 
    EnquiryTypeInput = "";   
    EmailInput = "";
    PhoneNumberInput = "";
    BusinessUnitInput = "";
    Address_1Input = "";
    Address_2Input = "";
    CityInput = "";
    DistrictInput = "";
    PincodeInput = "";
    StateInput = "";
    CountryInput = "";
    IndustryInput = "";
    IndustryOthersInput = "";
    JobLevelInput = "";
    JobTitleInput = "";
  }

  //Enquiry type dropdown
  const EnquiryTypeChange =(event)=> {
    var InputId = event.currentTarget.id;
    var Value = event.target.value;
    isSumbitDisabled = false;
    if(Value === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setEnquiryTypeError(true);
    }
    else{
        isSumbitDisabled = false;
        setisSumbitDisabled(false);
        setEnquiryTypeError(false);
    }
  }

  //Business unit dropdown
  const BusinessUnitChange =(event)=> {
    var InputId = event.currentTarget.id;
    var Value = event.target.value;
    isSumbitDisabled = false;
    if(Value === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setBusinessUnitError(true);
    }
    else{
        isSumbitDisabled = false;
        setisSumbitDisabled(false);
        setBusinessUnitError(false);
    }
  }
 
  //Insert enquiry form
  const InsertEnquiryForm = async()=> {
    InputClearFunction();
    EnquiryDateInput = document.getElementById("EnquiryDate").value;
    FirstNameInput = document.getElementById("FirstName").value;
    LastNameInput = document.getElementById("LastName").value; 
    EnquiryTypeInput = document.getElementById("EnquiryType").value;   
    EmailInput = document.getElementById("EnquiryEmail").value;
    PhoneNumberInput = document.getElementById("EnquiryPhoneNumber").value;
    BusinessUnitInput = document.getElementById("BusinessUnit").value;
    Address_1Input = document.getElementById("Address_1").value;
    Address_2Input = document.getElementById("Address_2").value;
    CityInput = document.getElementById("City").value;
    DistrictInput = document.getElementById("District").value;
    PincodeInput = document.getElementById("Pincode").value;
    StateInput = document.getElementById("State").value;
    CountryInput = document.getElementById("Country").value;
    IndustryInput = document.getElementById("Industry").value;
    IndustryOthersInput = document.getElementById("IndustryOthers").value;
    JobLevelInput = document.getElementById("JobLevel").value;
    JobTitleInput = document.getElementById("JobTitle").value;
    
    if(FirstNameInput === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setFirstNameError(true);
    }
    if(LastNameInput === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setLastNameError(true);
    }    
    if(BusinessUnitInput === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setBusinessUnitError(true);
    }
    if(Address_1Input === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setAddress_1Error(true);
    }     
    if(JobLevelInput === ""){
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setJobLevelError(true);
    } 
     

    //Enquiry type input check
    if(EnquiryTypeInput === "Email"){
        if(EmailInput === ""){
            isSumbitDisabled = true;
            setisSumbitDisabled(true);
            setEmailError(true);
        }
        else{
            isSumbitDisabled = false;
            setisSumbitDisabled(false);
            setEmailError(false);
        }
    }
    else if(EnquiryTypeInput === "PhoneNumber"){
        if(PhoneNumberInput === ""){
            isSumbitDisabled = true;
            setisSumbitDisabled(true);
            setPhoneNumberError(true);
        }
        else{
            isSumbitDisabled = false;
            setisSumbitDisabled(false);
            setPhoneNumberError(false);
        }
    }
    else{
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setEnquiryTypeError(true);
    }      

    //Industry input check
    if(IndustryInput !== ""){
        if(IndustryInput === "Others"){
            if(IndustryOthersInput === ""){
                isSumbitDisabled = true;
                setisSumbitDisabled(true);
                setIndustryOthersError(true);
            }  
            else{
                isSumbitDisabled = false;
                setisSumbitDisabled(false);
                setIndustryOthersError(false);
            }
        }              
    }        
    else{
        isSumbitDisabled = true;
        setisSumbitDisabled(true);
        setIndustryError(true);
    }        

    if(isSumbitDisabled !== true){          
        try {
            if(FirstNameInput !== ""){  
                setShowLoader(true);                
                await axios.post('/api/customer-enquiry/insert', {EnquiryDateInput, FirstNameInput, LastNameInput, EnquiryTypeInput, EmailInput, 
                    PhoneNumberInput, BusinessUnitInput, Address_1Input, Address_2Input, CityInput, DistrictInput, PincodeInput,
                    StateInput, CountryInput, IndustryInput, IndustryOthersInput, JobLevelInput, JobTitleInput });
                setShowLoader(false);    
                setPageLoadStatus(false);  
                setSuccessMsg(true);
                const timeoutId = setTimeout(() => {
                    setSuccessMsg(false);
                  }, 6000);                
                document.getElementById("EnquiryDate").value = "";
                document.getElementById("FirstName").value = "";
                document.getElementById("LastName").value = ""; 
                document.getElementById("EnquiryType").value = "";   
                document.getElementById("EnquiryEmail").value = "";
                document.getElementById("EnquiryPhoneNumber").value = "";
                document.getElementById("BusinessUnit").value = "";
                document.getElementById("Address_1").value = "";
                document.getElementById("Address_2").value = "";
                document.getElementById("City").value = "";
                document.getElementById("District").value = "";
                document.getElementById("Pincode").value = "";
                document.getElementById("State").value = "";
                document.getElementById("Country").value = "";
                document.getElementById("Industry").value = "";
                document.getElementById("IndustryOthers").value = "";
                document.getElementById("JobLevel").value = "";
                document.getElementById("JobTitle").value = "";
                setFirstNameError(false);
                setLastNameError(false);
                setEnquiryTypeError(false);
                setEmailError(false);
                setPhoneNumberError(false);
                setIndustryError(false);
                setIndustryOthersError(false);
                setJobLevelError(false);
                setBusinessUnitError(false);
                setAddress_1Error(false); 
            }
             else {
              console.log("First name is empty");
             }         
          } catch (error) {
            setShowLoader(false);
            console.error('Error inserting category:', error);
            console.log('Error inserting category:', error);
          }
    }
    else{
        console.log("API failed");
    }

  }

  //Delete function
  const DeleteModalFunction = (event) => {
    let value = event.currentTarget.id;
    if (value === "Yes") {
        setDeleteModalOpen(false);
        setShowLoader(true);
        sessionStorage.setItem("Auth", "0");
        sessionStorage.setItem("AuthRights", "");
        router.push(`/admin/auth/login`);
        setShowLoader(false);
    }
    else {
        setShowLoader(true);
        setDeleteModalOpen(false);
        setShowLoader(false);
    }
  };

  //Delete function
  const LOGOUTFUNCTION = () => {
    setDeleteModalOpen(true);
  }
  
  return (
    <>
        <>
            {ShowLoader && (
            <BackdropLoader ShowLoader={ShowLoader} />
            )}
        </>
        <>
            {DeleteModalOpen && (
            <DeleteModal DeleteModalOpen={DeleteModalOpen} DeleteModalFunction={DeleteModalFunction} />
            )}
        </>
      <div className="w-full inline-block px-20">       
      <DashboardCard sx={{ padding: "0px 50px" }}> 
      {SuccessMsg && (<SuccessAlert />)}      
        <Box>            
            <div className="w-full inline-block px-10">
                <div className="w-4/12 inline-block float-left mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="EnquiryDate" mb="5px">
                        Enquiry date
                    </Typography>
                    <CustomTextField type="date" id="EnquiryDate" variant="outlined" fullWidth />                
                </div>
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="FirstName" mb="5px">
                        First name<i className="text-red">*</i>
                    </Typography>
                    <CustomTextField FirstNameError={FirstNameError} id="FirstName" variant="outlined" fullWidth />    
                    {FirstNameError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}            
                </div>    
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="LastName" mb="5px">
                        Last name<i className="text-red">*</i>
                    </Typography>
                    <CustomTextField id="LastName" variant="outlined" fullWidth />    
                    {LastNameError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}            
                </div>                                                       
            </div>
            
            <div className="w-full inline-block px-10">
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="EnquiryType" mb="5px">
                        Enquiry type<i className="text-red">*</i>
                    </Typography>
                    <select className='w-full p-3 custom-text-area' id="EnquiryType" onChange={EnquiryTypeChange} variant="outlined" fullWidth>
                        <option value='' id=''>Select enquiry type</option>
                        <option value='Email' id='Email'>Email</option>
                        <option value='PhoneNumber' id='PhoneNumber'>Phone number</option>
                    </select> 
                    {EnquiryTypeError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}  
                </div>    
                {ShowEmailInput &&(
                    <>
                    <div className="w-4/12 inline-block float-left px-2 mb-7">
                        <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Email" mb="5px">
                            Email<i className="text-red">*</i>
                        </Typography>
                        <CustomTextField id="EnquiryEmail" variant="outlined" fullWidth />     
                        {EmailError && (
                            <p className="text-red" role="alert">This field required</p>
                        )}                
                    </div>       
                    </>
                )}
                {ShowPhoneInput &&(
                    <>
                    <div className="w-4/12 inline-block float-left px-2 mb-7">
                        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="PhoneNumber" mb="5px">
                            Phone number<i className="text-red">*</i>
                        </Typography>
                        <CustomTextField id="EnquiryPhoneNumber" variant="outlined" fullWidth />
                        {PhoneNumberError && (
                            <p className="text-red" role="alert">This field required</p>
                        )}                      
                    </div>  
                    </>
                )}                
            </div>           

            <div className="w-full inline-block px-10">
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="BusinessUnit" mb="5px">
                        Business unit<i className="text-red">*</i>
                    </Typography>
                    <select onChange={BusinessUnitChange} className='w-full p-3 custom-text-area' id="BusinessUnit" variant="outlined" fullWidth>
                        <option value='' id=''>Select business unit</option>
                        <option value='Developer' id='Developer'>Developer</option>
                        <option value='Employee' id='Employee'>Employee</option>
                    </select>  
                    {BusinessUnitError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}  
                </div>    
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Address_1" mb="5px">
                        Address-1<i className="text-red">*</i>
                    </Typography>
                    <CustomTextField id="Address_1" variant="outlined" fullWidth />     
                    {Address_1Error && (
                        <p className="text-red" role="alert">This field required</p>
                    )}                
                </div>       
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Address_2" mb="5px">
                        Address-2
                    </Typography>
                    <CustomTextField id="Address_2" variant="outlined" fullWidth />                    
                </div>  
            </div>

            <div className="w-full inline-block px-10">
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="City" mb="5px">
                        City
                    </Typography>
                    <CustomTextField id="City" variant="outlined" fullWidth />                   
                </div>       
                <div className="w-4/12 hidden float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="District" mb="5px">
                        District
                    </Typography>
                    <CustomTextField id="District" variant="outlined" fullWidth />                    
                </div>  
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Pincode" mb="5px">
                        Pincode
                    </Typography>
                    <CustomTextField id="Pincode" variant="outlined" fullWidth />                    
                </div>    
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="State" mb="5px">
                        State
                    </Typography>
                    <select className='w-full p-3 custom-text-area' id="State" variant="outlined" fullWidth>
                        <option value='' id=''>Select state</option>
                        <option selected value='Tamilnadu' id='Tamilnadu'>Tamilnadu</option>
                        <option value='Kerala' id='Kerala'>Kerala</option>
                    </select>  
                </div>        
            </div>

            <div className="w-full inline-block px-10">                   
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Country" mb="5px">
                        Country
                    </Typography>
                    <select className='w-full p-3 custom-text-area' id="Country" variant="outlined" fullWidth>
                        <option value='' id=''>Select country</option>
                        <option selected value='India' id='India'>India</option>
                        <option value='Pakistan' id='Pakistan'>Pakistan</option>
                    </select>  
                </div>    
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="Industry" mb="5px">
                        Industry<i className="text-red">*</i>
                    </Typography>
                    <select className='w-full p-3 custom-text-area' id="Industry" variant="outlined" fullWidth>
                        <option value='' id=''>Select industry</option>
                        <option value='Field_1' id='Field_1'>Field name</option>
                        <option value='Field_2' id='Field_2'>Field name</option>
                        <option value='Others' id='Others'>Others</option>
                    </select>  
                    {IndustryError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}  
                </div>    

                {ShowIndustryOthers &&(
                    <>
                    <div className="w-4/12 inline-block float-left px-2 mb-7">
                        <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="IndustryOthers" mb="5px">
                            Industry (Others)
                        </Typography>
                        <CustomTextField id="IndustryOthers" variant="outlined" fullWidth /> 
                        {IndustryOthersError && (
                            <p className="text-red" role="alert">This field required</p>
                        )}  
                    </div>   
                    </>
                )}             
            </div>

           
            <div className="w-full inline-block px-10">
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="JobLevel" mb="5px">
                        Job level<i className="text-red">*</i>
                    </Typography>
                    <select className='w-full p-3 custom-text-area' id="JobLevel" variant="outlined" fullWidth>
                        <option value='' id=''>Select job level</option>
                        <option value='Field_1' id='Field_1'>Field name</option>
                        <option value='Field_2' id='Field_2'>Field name</option>
                        <option value='Others' id='Others'>Others</option>
                    </select>  
                    {JobLevelError && (
                        <p className="text-red" role="alert">This field required</p>
                    )}  
                </div>    
                    
                <div className="w-4/12 inline-block float-left px-2 mb-7">
                    <Typography  variant="subtitle1" fontWeight={600} component="label" htmlFor="JobTitle" mb="5px">
                        Job title
                    </Typography>
                    <CustomTextField id="JobTitle" variant="outlined" fullWidth />                    
                </div> 
            </div>
            <div className="w-full inline-block">
                <DialogActions className="float-left px-10">
                    <button                 
                    className="px-5 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150">
                        Cancel
                    </button>
                    <button 
                    onClick={InsertEnquiryForm}                
                    className="px-5 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150">
                        Submit
                    </button>
                </DialogActions>     
                <DialogActions className="float-right px-10">                
                    <button 
                    onClick={LOGOUTFUNCTION}                
                    className="px-5 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150">
                        Logout
                    </button>
                </DialogActions>     
            </div>       
        </Box>
      </DashboardCard>
      </div>
    </>
  )
}

EnquiryDashborad.getLayout = function getLayout(page) {
    return <BlankLayout>{page}</BlankLayout>;
};