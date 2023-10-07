import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/animate.css'
import '../styles/responsive.css'
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../styles/themes/theme';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {  
  Component: NextPageWithLayout;
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
     <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Eftapei-Admin</title>
      </Head>
      <ThemeProvider theme={theme}>        
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
