import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import TopCards from "../../components/dashboard/TopCard";
import CustomerTickets from "../../components/dashboard/CustomerTickets";
import FullLayout from './../../components/layouts/full/FullLayout';
import { Grid, Box, Card, Stacck, Typography } from '@mui/material';

export default function Dashboard() {
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
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopCards />
          </Grid>          
          <Grid item xs={12} lg={12}>
            <CustomerTickets />
          </Grid> 
        </Grid>
      </Box>
    </>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};