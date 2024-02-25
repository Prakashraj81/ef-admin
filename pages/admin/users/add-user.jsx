import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Grid,
  Typography,
  Box,
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
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomTextAreaField from '../../../components/forms/theme-elements/CustomTextAreaField';
import { IconX } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { IconEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import theme from "../../../components/shared/theme";
import axios from 'axios';
import { useRouter } from 'next/router';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

  

export default function AddUser({EditValue, EditModalOpen, CloseModalFunction}) {
  let [UpdateUserId, setUpdateUserId] = useState(0);
  let [Id, setId] = useState(0);
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [PhoneNo, setPhoneNo] = useState("");
  let [Password, setPassword] = useState("");
  let [ConfirmPassword, setConfirmPassword] = useState(""); 
  let [AuthorityRights, setAuthorityRights] = useState("");
  let [CurrentDate, setCurrentDate] = useState("");

  let [LoginError, setLoginError] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [NameError, setNameError] = useState(false);
  let [EmailError, setEmailError] = useState(false);
  let [PhoneNoError, setPhoneNoError] = useState(false);
  let [PasswordError, setPasswordError] = useState(false);
  let [ConfirmPasswordError, setConfirmPasswordError] = useState(false);
  let [ShowPasswordError, setShowPasswordError] = useState(false);  
  let [AuthorityRightsError, setAuthorityRightsError] = useState(false);

  
  const onChangeAuthority = (event) =>{
    var InputId = event.currentTarget.id;
    var Value = event.target.value;
    isSumbitDisabled = false;
    if(Value === ""){
      setAuthorityRightsError(true);
    }
    else{
      setAuthorityRights(Value);
      setAuthorityRightsError(false);
    }   
  }


  const onChangeInput = (event) => {
      let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "Name"){
        setName(Value);
        setNameError(false);        
      }
      else if(InputId === "Email"){
        setEmail(Value);
        setEmailError(false);
      }
      else if(InputId === "PhoneNo"){
        setPhoneNo(Value);
        setPhoneNoError(false);
      }
      else if(InputId === "Password"){
        setPassword(Value);
        setPasswordError(false);
        setShowPasswordError(false);
      }
      else {
        setConfirmPassword(Value);
        setConfirmPasswordError(false);
        setShowPasswordError(false);
      }
  };
  
  //Submit API function 
  const InsertUser = async () => {  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);  
    let defaultValues = {
        Id: UpdateUserId,
        Name:Name,
        Email:Email,
        PhoneNo:PhoneNo,
        Password:Password,
        ConfirmPassword:ConfirmPassword, 
        AuthorityRights: AuthorityRights,   
        CurrentDate: formattedDate,    
      };
      CloseModalFunction();
      setShowLoader(true);    
      if(defaultValues.Name === ""){
        isSumbitDisabled = true;
        setNameError(true);    
      }
      if (defaultValues.Email === "") {
        isSumbitDisabled = true;
        setEmailError(true);
      }
      if (defaultValues.PhoneNo === "") {
        isSumbitDisabled = true;
        setPhoneNoError(true);
      }
      if (defaultValues.Password === "") {
        isSumbitDisabled = true;
        setPasswordError(true);
      }
      if (defaultValues.ConfirmPassword === "") {
        isSumbitDisabled = true;
        setConfirmPasswordError(true);
      }
      if(defaultValues.AuthorityRights === ""){
        isSumbitDisabled = true;
        setAuthorityRightsError(true);
      }
      if (defaultValues.ConfirmPassword === defaultValues.Password) {
        isSumbitDisabled = false;
        setShowPasswordError(false);
      }
      else{
        isSumbitDisabled = true;
        setConfirmPasswordError(true);
      }
    //Api setup
    if (isSumbitDisabled !== true) {
        console.log("Id:" + Id)
        try {
          const resposnse = await axios.post('/api/users/insert', { Id, Name, Email, PhoneNo, Password, AuthorityRights, CurrentDate });                
          setLoginError(false);          
          setShowLoader(false);    
          setPageLoadStatus(false);            
        } catch (error) {
          CloseModalFunction();   
          setLoginError(true);
          setShowLoader(false);
          console.error('Error inserting user:', error);
          console.log('Error inserting user:', error);
        }       
    }
    else {
        setisSumbitDisabled(true);
        setShowLoader(false);
    }
  };  

  PageLoad(EditValue);
  function PageLoad(EditValue){
    useEffect(() => {          
        if(EditValue.length === 0){
          setId(0);
          setName("");
          setEmail("");
          setPhoneNo("");
          setPassword("");
          setConfirmPassword("");  
          setAuthorityRights("");
        } 
        else {
          if(EditValue.id !== 0){
            setUpdateUserId(EditValue.id);
            setId(EditValue.id);            
        }
        else{
            setUpdateUserId(0);
            setId(0);            
        }
        if (EditValue.name !=="") {
          setName(EditValue.name);
        } else {    
          setName('');
        }
        if (EditValue.email !=="") {
            setEmail(EditValue.email);
          } else {       
            setEmail('');
          }
          if (EditValue.phone_number !=="") {
            setPhoneNo(EditValue.phone_number);
          } else {    
            setPhoneNo('');
          }
          if (EditValue.password !=="") {
            setPassword(EditValue.password);
            setConfirmPassword(EditValue.password);
          } else {    
            setPassword('');
            setConfirmPassword('');
          }   
          if (EditValue.auth_rights !=="") {
            setAuthorityRights(EditValue.auth_rights);
          } else {    
            setAuthorityRights('');
          }  
        }
      }, [EditValue]);
  }

  return (    
    <>    
    <>
    {ShowLoader && (
        <BackdropLoader ShowLoader={ShowLoader} />
    )}
    </>  
      <BootstrapDialog open={EditModalOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={CloseModalFunction}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IconX />
        </IconButton>
        <DialogContent dividers>
          <Box>
            <Grid container>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="Name"
                  mb="5px"
                >
                  Name
                </Typography>
                <CustomTextField onChange={onChangeInput} value={Name} id="Name" variant="outlined" fullWidth />
                {NameError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="Email"
                  mb="5px"
                >
                  Email
                </Typography>
                <CustomTextField onChange={onChangeInput} value={Email} id="Email" variant="outlined" fullWidth />
                {EmailError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="PhoneNo"
                  mb="5px"
                >
                  Phone no
                </Typography>
                <CustomTextField onChange={onChangeInput} value={PhoneNo} id="PhoneNo" variant="outlined" fullWidth />
                {PhoneNoError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="Password"
                  mb="5px"
                >
                  Password
                </Typography>
                <CustomTextField onChange={onChangeInput} value={Password} id="Password" variant="outlined" fullWidth />
                {PasswordError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
              </div>
              
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="ConfirmPassword"
                  mb="5px"
                >
                  Confirm password
                </Typography>
                <CustomTextField onChange={onChangeInput} value={ConfirmPassword} id="ConfirmPassword" variant="outlined" fullWidth />                
              {ConfirmPasswordError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
              </div>
              <Typography variant="subtitle1"              
                fontWeight={600} component="label" mb="5px" mt="7px">Authority rights</Typography>
                <select onChange={onChangeAuthority} value={AuthorityRights} className='w-full p-3 custom-text-area' id="AuthorityRights" variant="outlined" fullWidth>
                    <option value='' id=''>Select authority rights</option>
                    <option value='Admin' id='Admin'>Admin</option>
                    <option value='Employee' id='Employee'>Employee</option>
                </select>  
              {AuthorityRightsError && (
                <p className="text-red" role="alert">This field required</p>
              )}
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <button 
          onClick={CloseModalFunction}
          className="px-2 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150">
            Cancel
          </button>
          <button 
          onClick={InsertUser}
          className="px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150">
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>      
    </>
  )
}
