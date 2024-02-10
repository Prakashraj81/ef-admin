import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Grid,
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
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomTextAreaField from '../../../components/forms/theme-elements/CustomTextAreaField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { IconX } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { IconEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import BackdropLoader from '../../../components/loader/backdrop-loader';
import theme from "../../../components/shared/theme";
import axios from 'axios';
import { useRouter } from 'next/router';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

  

export default function AddEventCategory({EditValue, EditModalOpen, CloseModalFunction}) {
  let [UpdateId, setUpdateId] = useState(0);
  let [Id, setId] = useState(0);
  let [EventCategoryName, setEventCategoryName] = useState("");
  let [EventDate, setEventDate] = useState(""); 
  let [EventCategoryImage, setEventCategoryImage] = useState(""); 
  let [Status, setStatus] = useState("");   
  let [CurrentDate, setCurrentDate] = useState("");
  let [ShowLoader, setShowLoader] = useState(false);  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [EventCategoryNameError, setEventCategoryNameError] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    


  useEffect(() => {
    // Get the current date in the format "YYYY-MM-DD"
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setEventDate(formattedDate);
  }, [Status, EventCategoryImage]);

  let [ImageFile, setImageFile] = useState("");
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleEventImageUpload = async () => {
    if (!ImageFile) {
      console.error('No file selected.');
      console.log('No file selected.');
      return;
    }
    const formData = new FormData();
    formData.append('image', ImageFile);
    try {
      const response = await fetch('/api/event-category/imageupload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const responseData = await response.json();
        const fullPath = responseData.FilePath;        
        EventCategoryImage = fullPath.split('\\').pop();
        setEventCategoryImage(EventCategoryImage);
        setStatus(EventCategoryImage);        
        //Insert event category
        InsertEventCategory(EventCategoryImage);
      } else {
        console.error('Event category image upload failed');
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };
  
  const onChangeInput = (event) => {
      let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "EventCategoryName"){
        setEventCategoryName(Value);
        setEventCategoryNameError(false);        
      }      
  };
  
  //Submit API function 
  const InsertEventCategory = async (EventCategoryImage) => {  
    setEventCategoryImage(EventCategoryImage);
    setStatus(EventCategoryImage);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);      
    let defaultValues = {
        Id: UpdateId,
        EventDate: EventDate,
        EventCategoryName: EventCategoryName,
        EventCategoryImage: EventCategoryImage,
        Status: EventCategoryImage,        
        Created_Date: CurrentDate,    
      };
      CloseModalFunction();
      setShowLoader(true);    
      if(defaultValues.EventCategoryName === ""){
        isSumbitDisabled = true;
        setEventCategoryNameError(true);    
      }
         
    //Api setup
    if (isSumbitDisabled !== true) {        
        try {
          if(EventCategoryImage !== ""){
            await axios.post('/api/event-category/insert', { Id, EventDate, EventCategoryName, EventCategoryImage });
            setImageFile("");  
            setShowLoader(false);    
            setPageLoadStatus(false);  
          }
           else {
            console.log("EventCategoryImage is empty");
           }         
        } catch (error) {
          CloseModalFunction();   
          setShowLoader(false);
          console.error('Error inserting category:', error);
          console.log('Error inserting category:', error);
        }       
    }
    else {
        setisSumbitDisabled(true);
        setShowLoader(false);
    }
  };  


  PageLoad(EditValue);
  function PageLoad(EditValue){    
    useEffect(() => {  
        if(EditValue.length === 0){                 
            setEventCategoryName("");
            setEventCategoryImage("");            
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            setEventDate(formattedDate); 
        }
        else{
            if(EditValue.Id !== 0){
                setUpdateId(EditValue.Id);
                setId(EditValue.Id);            
            }
            else{
                setUpdateId(0);
                setId(0);            
            }
            
              if (EditValue.Date !== "") {
                const dateObject = new Date(EditValue.Date);          
                if (!isNaN(dateObject.getTime())) {
                  const splitdate = dateObject.toISOString().split('T')[0];
                  setEventDate(splitdate);
                } else {
                  console.error('Invalid date format:', EditValue.Date);
                }
              } else {    
                setEventDate(Date);
              }    
              if (EditValue.EventCategoryName !=="") {
                setEventCategoryName(EditValue.EventCategoryName);
              } else {    
                setEventCategoryName("");
              } 
            if (EditValue.EventCategoryImage !=="") {
                setEventCategoryImage(EditValue.EventCategoryImage);
              } else {    
                setEventCategoryImage("");
              }                  
        }            
      }, [EditValue]);
  }
 

  return (    
    <>    
    <>
    {ShowLoader && (
        <BackdropLoader ShowLoader={ShowLoader} />
    )}
    </>  
      <BootstrapDialog open={EditModalOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add event category
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={CloseModalFunction}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IconX />
        </IconButton>
        <DialogContent dividers>
          <Box>
            <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventDate"
                  mb="5px"
                >
                  Event date
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventDate} type="date" id="EventDate" variant="outlined" fullWidth />                
              </div>
            <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventCategoryName"
                  mb="5px"
                >
                  Event category name
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventCategoryName} id="EventCategoryName" variant="outlined" fullWidth />    
                {EventCategoryNameError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}            
              </div>  
                          
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventCategoryImage"
                  mb="5px"
                >
                  Event category image (optional)
                </Typography>
                <div className="image-sec w-full flex justify-between items-center">
                    <input type="file" onChange={handleFileChange} />
                </div>                   
              </div>                          
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <button 
          onClick={CloseModalFunction}
          className="px-2 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150">
            Cancel
          </button>
          <button 
          onClick={handleEventImageUpload}
          className="px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150">
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>      
    </>
  )
}
