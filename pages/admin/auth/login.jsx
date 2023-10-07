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

const AdminLogin = () => {
  let [UserName, setUserName] = useState("");  
  let [Password, setPassword] = useState("");

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [LoginError, setLoginError] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);
  let [UserNameError, setUserNameError] = useState(false); 
  let [PasswordError, setPasswordError] = useState(false);  
  let [CheckError, setCheckError] = useState(false);
  
  let defaultValues = {
    UserName:UserName,    
    Password:Password,    
  };
  
  const onChangeInput = (event) => {
      let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "UserName"){
        setUserName(Value);
        setUserNameError(false);        
      }      
      else {
        setPassword(Value);
        setPasswordError(false);
        setCheckError(false);
      }
  };
  
  //Submit API function 
  const router = useRouter();
  const OnSubmit = async () => {  
    setShowLoader(true);
    defaultValues = {
      UserName:UserName,    
      Password:Password,    
    };    
      if(defaultValues.UserName === ""){
        isSumbitDisabled = true;
        setUserNameError(true);    
      }     
      if (defaultValues.Password === "") {
        isSumbitDisabled = true;
        setPasswordError(true);
      }
      
    //Api setup
    if (isSumbitDisabled !== true) {        
        axios.post('/api/auth/select', defaultValues)
          .then(response => {
            console.log(response.data);
            sessionStorage.setItem('Auth', response.data.user.Id);
            setLoginError(false);
            setShowLoader(false);
            router.push(`/admin`);   
          })
          .catch(error => {
            setLoginError(true);
            setShowLoader(true);
            console.error('Error:', error);            
          });        
    }
    else {        
        setisSumbitDisabled(true);
    }
  };
  return (
    <PageContainer title="Login">
      <>
                {LoginError && (
                  <Stack className="pb-5" sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">User name or password is incorrect</Alert>
                  </Stack>
                )}
              </>
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
                <Box>               
              <Typography variant="subtitle1"                
              fontWeight={600} component="label" mb="5px">Email or Phone</Typography>
              <CustomTextField onChange={onChangeInput} value={UserName} id="UserName" variant="outlined" fullWidth />
              {UserNameError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
                </Box>
                <Box mt="25px">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"                    
                    mb="5px"
                  >
                    Password
                  </Typography>
                  <CustomTextField onChange={onChangeInput} value={Password} id="Password" type="password" variant="outlined" fullWidth />
                  {PasswordError && (
                <p className="text-red-500" role="alert">This field required</p>
              )}
                </Box>
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                  my={2}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remeber this Device"
                    />
                  </FormGroup>
                  <Typography
                    component={Link}
                    href="/"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Forgot Password ?
                  </Typography>
                </Stack>
              </Stack>
              <Box>               
                <Button className="bg-primary-color text-white" variant="contained" size="large" fullWidth onClick={OnSubmit}>
              Sign In
            </Button>
              </Box>
              <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                <Typography color="textSecondary" variant="h6" fontWeight="500">
                  New to Eftapei?
                </Typography>
                <Typography
                  component={Link}
                  href="/admin/auth/register"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Create an account
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default AdminLogin;

AdminLogin.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>;
};