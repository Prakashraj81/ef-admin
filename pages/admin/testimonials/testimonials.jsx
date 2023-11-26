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
import { IconEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import theme from "../../../components/shared/theme";
import DeleteModal from "../../../components/modal/delete-modal";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import SuccessAlert from "../../../components/alert/success-alert";
import AddTestimonial from "./add-testimonial";


export default function Blog() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let [EditModalOpen, setEditModalOpen] = React.useState(false);
  let [EditValue, setEditValue] = React.useState([]);
  let [TestimonialsList, setTestimonialsList] = React.useState();
  let [ModalId, setModalId] = useState(0);
  let [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  let [SuccessMsg, setSuccessMsg] = React.useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    

  const EditModalFunction = (event) => {    
    let EditId = event.currentTarget.id;
    EditId = Number(atob(event.currentTarget.id));    
    if(EditId !== 0){      
      GetTestimonialsList(EditId);            
    }
    else {      
      setEditValue([]);
      setEditModalOpen(true);
    }    
  };
  const CloseModalFunction = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {    
    if(PageLoadStatus){
      GetTestimonialsList(0);      
    }    
  }, []);


  //Get testimonials list api function
  const GetTestimonialsList = async (id) => {
    setShowLoader(true);
    try {
      let data = { Id: id };  
      if (id !== 0) {
        const response = await axios.post('/api/testimonials/select', data);
        if (response.data.testimonials.length !== 0) {
          setEditValue(response.data.testimonials[0]);
          setEditModalOpen(true);
          setShowLoader(false);
        } else {
          setEditValue([]);
        }
      } else {
        const response = await axios.post('/api/testimonials/select', data);
        if (response.data.testimonials.length !== 0) {
          setTestimonialsList(response.data.testimonials);
        } else {
          setTestimonialsList([]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setPageLoadStatus(false);
    setShowLoader(false);
  };    


  //Delete modal popup open function
  const DeleteModalFunction = async (event) => {
    let value = event.currentTarget.id;
    let data = { Id: ModalId };    
    if (value === "Yes") {
      setDeleteModalOpen(false);
      setShowLoader(true);
        try {
            const response = await axios.post('/api/testimonials/delete', data);
            setDeleteModalOpen(false);
            if (response.data.message === "Testimonial deleted successfully") {                
                //Update testimonials list
                setSuccessMsg(true);
                GetTestimonialsList(0); 
                setShowLoader(false);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            console.log('Full Axios Error:', error.response);
        }
    } else {
        setDeleteModalOpen(false);
        setModalId(0);
    }
};

  

  //Delete user function api
  const DeleteTestimonial = (event) => {
    let DeleteId = 0;
    DeleteId = Number(atob(event.currentTarget.id));
    if (DeleteId !== 0) {
      setDeleteModalOpen(true);
      setModalId(DeleteId);
    }
    else {
      setDeleteModalOpen(false);
      setModalId(0);
    }    
  }




  return (
    <>
    <>
    {ShowLoader && (
          <BackdropLoader ShowLoader={ShowLoader} />
        )}
      </>
    {SuccessMsg && (<SuccessAlert />)}
      {DeleteModalOpen && (
        <DeleteModal DeleteModalOpen={DeleteModalOpen} DeleteModalFunction={DeleteModalFunction} />
      )}
      <AddTestimonial EditValue={EditValue} EditModalOpen={EditModalOpen} CloseModalFunction={CloseModalFunction}/>
      <DashboardCard title="">
      <div className="block md:flex lg:flex xl:flex 2xl:flex justify-between items-center">
          <Typography variant="h5">Testimonials list</Typography>
          <Button 
          onClick={EditModalFunction}
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "#FFF",
          }}
          className="flex justify-between items-center bg-blue-600 text-white hover:bg-blue-400"><IconCirclePlus className="pr-2" />Add new</Button>
        </div>

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
                    Customer name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Star rating
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Review date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center" variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {TestimonialsList && Array.isArray(TestimonialsList) ? (
              TestimonialsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((TestimonialsList, index) => (
            <TableRow key={TestimonialsList.CustomerName} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {index + 1}
                    </Typography>
                    </TableCell>                   
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{TestimonialsList.CustomerName}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{TestimonialsList.StarRating}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {new Date(TestimonialsList.Date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </Typography>
                    </TableCell>                    
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      {TestimonialsList.Active === 1 ? (
                        <>
                          <Chip
                            className="text-xs"
                            style={{
                              backgroundColor: theme.palette.success.light,
                              color: theme.palette.success.main,
                            }}
                            size="small"
                            label={"Active"}
                          ></Chip>
                        </>
                      )
                        :
                        (
                          <>
                            <Chip
                              className="text-xs"
                              size="small"
                              style={{
                                backgroundColor: theme.palette.error.light,
                                color: theme.palette.error.main,
                              }}
                              label={"InActive"}
                            ></Chip>
                          </>
                        )
                      }
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-between items-center">
                        <Tooltip title="Edit" arrow>
                          <IconEdit onClick={EditModalFunction} id={btoa(TestimonialsList.Id)} className="mx-auto text-primary-main cursor-pointer" />
                        </Tooltip>
                        <Tooltip title="Delete" arrow>
                          <IconTrashX id={btoa(TestimonialsList.Id)} onClick={DeleteTestimonial} className="mx-auto text-error-main cursor-pointer" />
                        </Tooltip>
                      </div>
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
          count={TestimonialsList ? TestimonialsList.length : 0}
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

Blog.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};