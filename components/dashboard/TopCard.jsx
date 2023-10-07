import React from 'react';
import { Box } from '@mui/material';
import CardDataStats from './CardDataStats';
import { IconUsers, IconTicket, IconAddressBook, IconAtom } from '@tabler/icons-react';

const TopCards = () => {
    return (
        <Box>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Total Users" total="1,500" bgColorClass="success.light">
                    <div className="">
                        <IconUsers className='text-success-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Enquiry" total="2,500" bgColorClass="secondary.light">
                    <div className="">
                        <IconTicket className='text-secondary-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Events" total="450" bgColorClass="warning.light">
                    <div className="">
                        <IconAddressBook className='text-warning-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Services" total="81" bgColorClass="primary.light">
                    <div className="">
                        <IconAtom className='text-primary-main' />
                    </div>
                </CardDataStats>
            </div>
        </Box>
    );
};

export default TopCards;
