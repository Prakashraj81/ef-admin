import type { ReactElement } from 'react';
import Banner from "../components/About/banner";
import CompanyDetails from "../components/About/company-details";
import Layout from './../components/layout';

export default function AboutUs() {
    return (
        <>
            <Banner />
            <CompanyDetails />
        </>
    )
}


AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};