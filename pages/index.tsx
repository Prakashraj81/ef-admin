import React from 'react'
import Home from './home'
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function Index({ preview }) {
  return (
    <>
      <Home />
    </>
  )
}


Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};