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
import AddEvent from "./add-event";


export default function Blog() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let [EditModalOpen, setEditModalOpen] = React.useState(false);
  let [EditValue, setEditValue] = React.useState([]);
  let [EventList, setEventList] = React.useState();
  let [ModalId, setModalId] = useState(0);
  let [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  let [SuccessMsg, setSuccessMsg] = React.useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    

  const EditModalFunction = (event) => {    
    let EditId = event.currentTarget.id;
    EditId = Number(atob(event.currentTarget.id));    
    if(EditId !== 0){      
      GetEventList(EditId);            
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
      GetEventList(0);      
    }    
  }, []);


  //Get events list api function
  const GetEventList = async (id) => {
    setShowLoader(true);
    try {
      let data = { Id: id };  
      if (id !== 0) {
        //const response = await axios.post('/api/events/select', data);
        if (response.data.events.length !== 0) {
          setEditValue(response.data.events[0]);
          setEditModalOpen(true);
          setShowLoader(false);
        } else {
          setEditValue([]);
        }
      } else {
        //const response = await axios.post('/api/events/select', data);
        if (response.data.events.length !== 0) {
          setEventList(response.data.events);
        } else {
          setEventList([]);
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
            //const response = await axios.post('/api/events/delete', data);
            setDeleteModalOpen(false);
            if (response.data.message === "Testimonial deleted successfully") {                
                //Update events list
                setSuccessMsg(true);
                GetEventList(0); 
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
      <AddEvent EditValue={EditValue} EditModalOpen={EditModalOpen} CloseModalFunction={CloseModalFunction}/>
      <DashboardCard title="">
      <div className="block md:flex lg:flex xl:flex 2xl:flex justify-between items-center">
          <Typography variant="h5">Events list</Typography>
          <Button 
          onClick={EditModalFunction}
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "#FFF",
          }}
          className="flex justify-between items-center bg-blue-600 text-white hover:bg-blue-400"><IconCirclePlus className="pr-2" />Add event</Button>
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
                  Event image
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Event category name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Event heading
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                  Event amount
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
            {EventList && Array.isArray(EventList) ? (
              EventList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((EventList, index) => (
            <TableRow key={EventList.CustomerName} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {index + 1}
                    </Typography>
                    </TableCell>                   
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EventList.CustomerName}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{EventList.StarRating}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                    <Typography>
                      {new Date(EventList.Date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </Typography>
                    </TableCell>                    
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      {EventList.Active === 1 ? (
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
                          <IconEdit onClick={EditModalFunction} id={btoa(EventList.Id)} className="mx-auto text-primary-main cursor-pointer" />
                        </Tooltip>
                        <Tooltip title="Delete" arrow>
                          <IconTrashX id={btoa(EventList.Id)} onClick={DeleteTestimonial} className="mx-auto text-error-main cursor-pointer" />
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
          count={EventList ? EventList.length : 0}
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