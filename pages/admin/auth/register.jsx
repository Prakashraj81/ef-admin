import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Grid, Box, Card, Stack, Typography, FormGroup, FormControlLabel, Button, Checkbox } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import BlankLayout from '../../../components/layouts/blank/BlankLayout'
import PageContainer from '../../../components/container/PageContainer';
import CustomTextField from '../../../components/Form/CustomTextField';
import TextField from '@mui/material/TextField';

const AdminRegister = () => {  
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [PhoneNo, sePhoneNo] = useState("");
  let [Password, setPassword] = useState("");
  let [ConfirmPassword, setConfirmPassword] = useState(""); 
  let [AuthorityRights, setAuthorityRights] = useState("");
  let [CurrentDate, setCurrentDate] = useState("");

  let [LoginError, setLoginError] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [NameError, setNameError] = useState(false);
  let [EmailError, setEmailError] = useState(false);
  let [PhoneNoError, setPhoneNoError] = useState(false);
  let [PasswordError, setPasswordError] = useState(false);
  let [ConfirmPasswordError, setConfirmPasswordError] = useState(false);
  let [AuthorityRightsError, setAuthorityRightsError] = useState(false);
  let [ShowPasswordError, setShowPasswordError] = useState(false);  
  
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
        sePhoneNo(Value);
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

  let defaultValues = {};
  
  //Submit API function 
  const router = useRouter();
  const OnSubmit = async (defaultValues) => { 
    defaultValues = {
      Name:Name,
      Email:Email,
      PhoneNo:PhoneNo,
      Password:Password,
      ConfirmPassword:ConfirmPassword, 
      AuthorityRights: AuthorityRights,   
      Created_Date: CurrentDate,    
    }; 
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
      if (defaultValues.Password !== defaultValues.ConfirmPassword) {
        isSumbitDisabled = true;
        setShowPasswordError(true);
      }
      if (defaultValues.AuthorityRights === "") {
        isSumbitDisabled = true;
        setAuthorityRightsError(true);
      }      
    //Api setup
    if (isSumbitDisabled !== true) {
        console.log("API allowed");
        try {
          await axios.post('/api/auth/insert', { Name, Email, PhoneNo, Password, AuthorityRights, CurrentDate });
          console.log('Auth inserted successfully');
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
    else {
        console.log("API not allowed");
        setisSumbitDisabled(true);
        setShowLoader(false);
    }
  };
  

  return (
    <PageContainer title="Register" description="this is Register page">

              <>
                {ShowLoader && (
                  <BackdropLoader ShowLoader={ShowLoader} />
                )}
              </>
              <Box
    className="bg-primary-light"
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
            <>
          {LoginError && (
                  <Stack className="py-5" sx={{ width: '100%' }} spacing={2}>
                    <Alert className="bg-custom-form-light" severity="error">User name or password is incorrect</Alert>
                  </Stack>
                )}
              </>
            <Stack mb={3}>
              <Typography variant="subtitle1"                
                fontWeight={600} component="label" mb="5px">Name</Typography>
              <CustomTextField onChange={onChangeInput} value={Name} id="Name" variant="outlined" fullWidth />
              {NameError && (
                <p className="text-red" role="alert">This field required</p>
              )}
              <Typography variant="subtitle1"              
              fontWeight={600} component="label" mb="5px" mt="7px">Email Address</Typography>
              <CustomTextField onChange={onChangeInput} value={Email} id="Email" variant="outlined" fullWidth />
              {EmailError && (
                <p className="text-red" role="alert">This field required</p>
              )}
              <Typography variant="subtitle1"              
              fontWeight={600} component="label" mb="5px" mt="7px">Phone No</Typography>
              <CustomTextField onChange={onChangeInput} value={PhoneNo} id="PhoneNo" variant="outlined" fullWidth />
              {PhoneNoError && (
                <p className="text-red" role="alert">This field required</p>
              )}
              <Typography variant="subtitle1"              
                fontWeight={600} component="label" mb="5px" mt="7px">Password</Typography>
              <CustomTextField onChange={onChangeInput} type="password" value={Password} id="Password" variant="outlined" fullWidth />
              {PasswordError && (
                <p className="text-red" role="alert">This field required</p>
              )}
              <Typography variant="subtitle1"              
                fontWeight={600} component="label" mb="5px" mt="7px">Confirm Password</Typography>
              <CustomTextField onChange={onChangeInput} type="password" value={ConfirmPassword} id="ConfirmPassword" variant="outlined" fullWidth />
              {ConfirmPasswordError && (
                <p className="text-red" role="alert">This field required</p>
              )}
              <Typography variant="subtitle1"              
                fontWeight={600} component="label" mb="5px" mt="7px">Authority rights</Typography>
                <select onChange={onChangeAuthority} className='w-full p-3 custom-text-area' id="AuthorityRights" variant="outlined" fullWidth>
                    <option value='' id=''>Select authority rights</option>
                    <option value='Admin' id='Admin'>Admin</option>
                    <option value='Employee' id='Employee'>Employee</option>
                </select>  
              {AuthorityRightsError && (
                <p className="text-red" role="alert">This field required</p>
              )}
            </Stack>
            {ShowPasswordError && (
                <p className="text-red py-3" role="alert">Passwords do not match.</p>
              )}
            <Button className="bg-primary-color text-white" variant="contained" size="large" fullWidth onClick={OnSubmit}>
              Sign Up
            </Button>

            <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
              <Typography className="text-sm" color="textSecondary" variant="h6" fontWeight="400">
                Already have an Account?
              </Typography>
              <Typography
                component={Link}
                className="text-sm"
                href="/admin/auth/login"
                fontWeight="500"
                sx={{
                  textDecoration: 'none',
                  color: 'primary.main',
                }}
              >
                Sign In
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
  );
};

export default AdminRegister;

AdminRegister.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>;
};