import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import { Grid, Box, Card, Stack, Typography, FormGroup, FormControlLabel, Button, Checkbox } from '@mui/material';
import BlankLayout from '../../../components/layouts/blank/BlankLayout'
import PageContainer from '../../../components/container/PageContainer';
import CustomTextField from '../../../components/Form/CustomTextField';

const AuthOTPVerification = (props) => {
  let { authName, authEmail, authPhoneNo, authPassword, authAuthorityRights, authCurrentDate } = props;  
  let [EnterOTP, setEnterOTP] = useState("");  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [LoginError, setLoginError] = useState(false);
  let [LoginError2, setLoginError2] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);
  let [EnterOTPError, setEnterOTPError] = useState(false);   
  
  let defaultValues = {
    EnterOTP:EnterOTP,    
  };
  
  if(authName !== undefined){
    let authValues = {
      authName: authName,
      authEmail: authEmail,
      authPhoneNo: authPhoneNo,
      authPassword: authPassword,
      authAuthorityRights: authAuthorityRights,
      authCurrentDate: authCurrentDate
    };
  }  
    

  const onChangeInput = (event) => {
      let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "EnterOTP"){
        setEnterOTP(Value);
        setEnterOTPError(false);        
      }   
      else{
        setEnterOTPError(true);   
      }
  };
  
  //Submit API function 
  const router = useRouter();
  const OnSubmit = async () => {  
    setShowLoader(true);
    defaultValues = {
      EnterOTP:EnterOTP,    
    };    
      if(defaultValues.EnterOTP === ""){
        isSumbitDisabled = true;
        setEnterOTPError(true);    
      }  
      if(defaultValues.EnterOTP.length === 4){
        isSumbitDisabled = false;
        setEnterOTPError(false);    
      }  
      else{
        isSumbitDisabled = true;
        setEnterOTPError(true);
      }            
    //Api setup
    if (isSumbitDisabled !== true) {  
      try {
        let data = { EnterOTP:defaultValues.EnterOTP };  
        if (defaultValues.EnterOTP !== "") {
          const response = await axios.post('/api/auth/authotpselect', data);
          if(response.data.message === "OTP Verified"){
            if(response.data.user[0].auth_otp === defaultValues.EnterOTP && response.data.otpVerifyMsg[0].otpStatus === "OTP is valid"){
              setLoginError(false); 
              UserRegister(authName, authEmail, authPhoneNo, authPassword, authAuthorityRights, authCurrentDate);  
            }   
            else{
              setShowLoader(false); 
              setLoginError2(true);
            }   
          }
          else{
            setShowLoader(false); 
            setLoginError(true);
          }   
        }                    
      } catch (error) {
        setShowLoader(false); 
        setLoginError(true);
        console.error('Error:', error);
      }         
    }
    else {        
        setisSumbitDisabled(true);
        setShowLoader(false);
    }
  };

  //User register
  const UserRegister = async (authName, authEmail, authPhoneNo, authPassword, authAuthorityRights, authCurrentDate) => {
    let Name = authName;
    let Email = authEmail;
    let PhoneNo = authPhoneNo;
    let Password = authPassword;
    let AuthorityRights = authAuthorityRights;
    let CurrentDate = authCurrentDate;
    try {
      const response = await axios.post('/api/auth/insert', { Name, Email, PhoneNo, Password, AuthorityRights, CurrentDate });
      console.log(response + response.data);
      setLoginError(false);
      setShowLoader(false);
      router.push(`/admin/auth/login`);        
    } catch (error) {
      setLoginError(true);
      setShowLoader(false);
      console.error('Error inserting auth:', error);
      console.log('Error inserting auth:', error);
    }
  }


  return (
    <PageContainer title="Login">              
      <>
        {ShowLoader && (
          <BackdropLoader ShowLoader={ShowLoader} />
        )}
      </>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  className="logo h-16"
                  src="/logo/header-logo.jpg"
                  alt="Eftapei"
                  width={180}
                  height={50}
                  priority
                />
              </Box>
              <Stack>
              <>
                {LoginError && (
                  <Stack className="py-5 error-main" sx={{ width: '100%' }} spacing={2}>
                    <Alert sx={{
                      textDecoration: "none",
                      color: "error.main",
                      backgroundColor: "error.light",
                    }} severity="error">Please enter valid OTP</Alert>
                  </Stack>
                )}
                {LoginError2 && (
                  <Stack className="py-5 error-main" sx={{ width: '100%' }} spacing={2}>
                    <Alert sx={{
                      textDecoration: "none",
                      color: "error.main",
                      backgroundColor: "error.light",
                    }} severity="error">The OTP has expired</Alert>
                  </Stack>
                )}
              </>

              <Box>               
                <Typography variant="subtitle1"                
                fontWeight={600} component="label" mb="5px">Enter OTP</Typography>
                <CustomTextField onChange={onChangeInput} value={EnterOTP} id="EnterOTP" placeholder="Please enter admin otp" variant="outlined" fullWidth />
                {EnterOTPError && (
                  <p className="text-red" role="alert">This field required</p>
                )}
              </Box>                              
              </Stack>
              <Box className="pt-5">               
                <Button className="bg-primary-color text-white" variant="contained" size="large" fullWidth onClick={OnSubmit}>
                  Submit
                </Button>
              </Box>              
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default AuthOTPVerification;

AuthOTPVerification.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>;
};