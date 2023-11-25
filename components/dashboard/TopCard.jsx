import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CardDataStats from './CardDataStats';
import { IconUsers, IconTicket, IconAddressBook, IconAtom } from '@tabler/icons-react';
import axios from 'axios';

const TopCards = () => {
let [TotalUsers, setTotalUsers] = useState(0);

//Get user list api function
const GetUserCount = async () => {
    try {
      const response = await axios.post('/api/users/getuser');
        if (response.data.user.length !== 0) {
            setTotalUsers(response.data.user.length);
        } else {
            setTotalUsers(0);
        }
    } catch (error) {
      console.error('Error:', error);
    }    
  };  
  //GetUserCount();
  useEffect(() => {    
    GetUserCount();     
  }, []);

    return (
        <Box>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Total Users" total={TotalUsers} bgColorClass="success.light">
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
