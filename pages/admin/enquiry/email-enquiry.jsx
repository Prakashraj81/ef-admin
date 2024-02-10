import React, { useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import FullLayout from "../../../components/layouts/full/FullLayout";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  TablePagination,
  Tooltip,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import { IconEdit, IconEyeEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import theme from "../../../components/shared/theme";
import DeleteModal from "../../../components/modal/delete-modal";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import SuccessAlert from "../../../components/alert/success-alert";
import ViewEnquiry from "./view-enquiry";  



export default function EmailEnquiryPage() {
  let [page, setPage] = React.useState(0);
  let [rowsPerPage, setRowsPerPage] = React.useState(5);
  let [EditModalOpen, setEditModalOpen] = React.useState(false);
  let [EditValue, setEditValue] = React.useState([]);
  let [EnquiryList, setEnquiryList] = React.useState();
  let [ModalId, setModalId] = useState(0);
  let [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  let [SuccessMsg, setSuccessMsg] = React.useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    

  

  useEffect(() => {    
    if(PageLoadStatus){
      GetEnquiryList();      
    }    
  }, []);


  //Get events list api function
  const GetEnquiryList = async () => {
    setShowLoader(true);
    try {
      const response = await axios.post('/api/customer-enquiry/select-mail');
        if (response.data.enquiry.length !== 0) {
          setEnquiryList(response.data.enquiry);
          setShowLoader(false);
        } else {
          setEditValue([]);
        }
    } catch (error) {
      console.error('Error:', error);
    }
    setPageLoadStatus(false);
    setShowLoader(false);
  };    

  return (
    <>
    <>
    {ShowLoader && (
          <BackdropLoader ShowLoader={ShowLoader} />
        )}
      </>
    {SuccessMsg && (<SuccessAlert />)}      
      <DashboardCard title="Customer enquiry mail list">
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    S.No
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Full nName
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Email
                  </Typography>
                </TableCell>  
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Address-1
                  </Typography>
                </TableCell>                
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Enquiry date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Business unit
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Industry
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center" variant="subtitle2" fontWeight={600}>
                    Job level
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {EnquiryList && Array.isArray(EnquiryList) ? (              
              EnquiryList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((EnquiryList, index) => (                  
                <TableRow key={EnquiryList.full_name} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {index + 1}
                    </Typography>
                    </TableCell>                   
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>{EnquiryList.full_name}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EnquiryList.email}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EnquiryList.address_1}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {new Date(EnquiryList.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </Typography>
                    </TableCell>   
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EnquiryList.business_unit}</Typography>
                    </TableCell>   
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EnquiryList.industry}</Typography>
                    </TableCell> 
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EnquiryList.job_level}</Typography>
                    </TableCell>       
                  </TableRow>
      ))
  ) : null}
              
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={EnquiryList ? EnquiryList.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </DashboardCard>
    </>
  )
}

EmailEnquiryPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};