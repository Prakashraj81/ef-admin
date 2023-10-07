import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import FullLayout from '../../components/layouts/full/FullLayout';
import BlankLayout from './../../components/layouts/blank/BlankLayout';
import DashboardCard from "../../components/shared/DashboardCard";
import AdminLogin from "./auth/login";
import Dashboard from "./Dashborad";

export default function Home() {
  let [Authkey, setAuthkey] = useState(0);
  let sessionValue = 0;
  useEffect(() => {
    sessionValue = Number(sessionStorage.getItem('Auth'));    
    if (sessionValue) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    setAuthkey(sessionValue);
  });
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <>
          {Authkey ?
            <>
              <FullLayout>
                <PageContainer title="Dashboard" description="Dashboard">
                  <Box>
                    <Dashboard/>
                  </Box>
                </PageContainer>
              </FullLayout>
            </>
            :
            <>
              <BlankLayout>
                <PageContainer title="AdminLogin" description="AdminLogin">
                  <Box>
                    <AdminLogin />
                  </Box>
                </PageContainer>
              </BlankLayout>
            </>
          }
        </>
      </Box>
    </PageContainer>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <FullLayout>{page}</FullLayout>;
// };