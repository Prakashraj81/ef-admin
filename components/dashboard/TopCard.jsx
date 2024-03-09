import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CardDataStats from './CardDataStats';
import { IconUsers, IconTicket, IconAddressBook, IconAtom } from '@tabler/icons-react';
import axios from 'axios';

const TopCards = () => {
let [TotalUsers, setTotalUsers] = useState(0);
let [TotalEvents, setTotalEvents] = useState(0);
let [TotalEnquiry, setTotalEnquiry] = useState(0);
let [TotalServices, setTotalServices] = useState(0);

//Get user list api function
const GetUserCount = async () => {
    try {
      const response = await axios.post('/api/auth/getuser');      
        if (response.data.count.length !== 0) {
            setTotalUsers(response.data.count[0][""]);
        } else {
            setTotalUsers(0);
        }
    } catch (error) {
      console.error('Error:', error);
    }    
  };  


  //Get events list api function
const GetEventsCount = async () => {
    try {
      const response = await axios.post('/api/events/getevents');      
        if (response.data.count.length !== 0) {
            setTotalEvents(response.data.count[0][""]);
        } else {
            setTotalEvents(0);
        }
    } catch (error) {
      console.error('Error:', error);
    }    
  };  


  //Get enquiry list api function
const GetEnquiryCount = async () => {
    try {
      const response = await axios.post('/api/enquiry/getenquiry');      
        if (response.data.count.length !== 0) {
            setTotalEnquiry(response.data.count[0][""]);
        } else {
            setTotalEnquiry(0);
        }
    } catch (error) {
      console.error('Error:', error);
    }    
  };  

   //Get services list api function
const GetServiceCount = async () => {
    try {
      const response = await axios.post('/api/services/getservices');      
        if (response.data.count.length !== 0) {
            setTotalServices(response.data.count[0][""]);
        } else {
            setTotalServices(0);
        }
    } catch (error) {
      console.error('Error:', error);
    }    
  };  




  useEffect(() => {    
    GetUserCount();   
    GetEventsCount(); 
    GetEnquiryCount();
    GetServiceCount(); 
  }, [TotalUsers, TotalEvents, TotalEnquiry, TotalServices]);

    return (
        <Box>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Total Users" total={TotalUsers} bgColorClass="success.light">
                    <div className="">
                        <IconUsers className='text-success-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Enquiry" total={TotalEnquiry} bgColorClass="secondary.light">
                    <div className="">
                        <IconTicket className='text-secondary-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Events" total={TotalEvents} bgColorClass="warning.light">
                    <div className="">
                        <IconAddressBook className='text-warning-main' />
                    </div>
                </CardDataStats>
                <CardDataStats title="Total Services" total={TotalServices} bgColorClass="primary.light">
                    <div className="">
                        <IconAtom className='text-primary-main' />
                    </div>
                </CardDataStats>
            </div>
        </Box>
    );
};

export default TopCards;
