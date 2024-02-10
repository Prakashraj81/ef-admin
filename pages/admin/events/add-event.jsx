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
import StarRating from "./star-rating";
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

  

export default function AddEvent({EditValue, EditModalOpen, CloseModalFunction}) {
  let [UpdateId, setUpdateId] = useState(0);
  let [Id, setId] = useState(0);
  let [EventDate, setEventDate] = useState(""); 
  let [CategoryList, setCategoryList] = useState([]);
  let [EventCategoryRefId, setEventCategoryRefId] = useState(0);
  let [EventHeading, setEventHeading] = useState(""); 
  let [EventName, setEventName] = useState("");  
  let [EventImage, setEventImage] = useState("");  
  let [EventAmount, setEventAmount] = useState(0);
  let [EventClassCount, setEventClassCount] = useState(0);
  let [EventMembers, setEventMembers] = useState(0);
  let [EventRating, setEventRating] = useState(0);
  let [EventStarRating, setEventStarRating] = useState(0);
  let [CurrentDate, setCurrentDate] = useState("");
  let [ImageFile, setImageFile] = useState("");

  let [LoginError, setLoginError] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [EventHeadingError, setEventHeadingError] = useState(false);
  let [EventDateError, setEventDateError] = useState(false);
  let [EventAmountError, setEventAmountError] = useState(false);
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    


  useEffect(() => {
    // Get the current date in the format "YYYY-MM-DD"
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setEventDate(formattedDate);
    GetCategoryList();
  }, [EventImage, ImageFile]);

  const GetCategoryList = async() => {
    try {
      const response = await axios.post('/api/event-category/geteventcategory');
        if (response.data.eventcategory.length !== 0) {
          setCategoryList(response.data.eventcategory);
          return;
        } else {
          setCategoryList([]);
        }
    } catch (error) {
      console.error('Error:', error);
    }   
  }
  
  const dropdownCategoryList = (event) => {
    let CategoryId = Number(event.target.value);
    setEventCategoryRefId(CategoryId);
  }

  const handleRating = (input) => {
    setEventStarRating(input);
    setEventRating(input);
  };

  
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    console.log(ImageFile);
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
      const response = await fetch('/api/events/imageupload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const responseData = await response.json();
        const fullPath = responseData.FilePath;        
        EventImage = fullPath.split('\\').pop();
        setEventImage(EventImage);
        //Insert event
        InsertEvent();
      } else {
        console.error('Event image upload failed');
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
      if(InputId === "EventHeading"){
        setEventHeading(Value);
        setEventName(Value);
        setEventHeadingError(false);        
      }
      else if(InputId === "EventClassCount"){
        setEventClassCount(Value);
      }
      else if(InputId === "EventMembers"){
        setEventMembers(Value);
      }
      else if(InputId === "EventAmount"){
        setEventAmount(Value);
        setEventAmountError(false);   
      }
      else if(InputId === "EventRating"){
        setEventStarRating(Value);
        setEventRating(Value);
      }
      else{
        setEventClassCount(Value);
      }
      
  };
  
  //Submit API function 
  const InsertEvent = async () => {  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);  
    console.log(formattedDate);  
    let defaultValues = {
        Id: UpdateId,
        EventDate: EventDate,
        EventCategoryRefId: EventCategoryRefId,
        EventHeading: EventHeading,
        EventName: EventName,
        EventImage: EventImage, 
        EventAmount: EventAmount,  
        EventClassCount: EventClassCount,     
        EventMembers: EventMembers,
        EventRating: EventRating,
        EventStarRating: EventStarRating,
        Created_Date: CurrentDate,    
      };
      CloseModalFunction();
      setShowLoader(true);   
      if (defaultValues.EventDate === "") {
        isSumbitDisabled = true;
        setEventDateError(true);
      }       
      if(defaultValues.EventHeading === ""){
        isSumbitDisabled = true;
        setEventHeadingError(true);    
      }
      if (defaultValues.EventAmount === "") {
        isSumbitDisabled = true;
        setEventAmountError(true);
      }          
      
    //Api setup
    if (isSumbitDisabled !== true) {
        try {
          await axios.post('/api/events/insert', { Id, EventDate, EventCategoryRefId, EventHeading, EventName, EventImage, EventAmount, EventClassCount, EventMembers, EventRating, EventStarRating });  
          setShowLoader(false);    
          setPageLoadStatus(false);            
        } catch (error) {
          CloseModalFunction();   
          setShowLoader(false);
          console.error('Error inserting testimonial:', error);
          console.log('Error inserting testimonial:', error);
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
            setEventRating(0);            
            setEventHeading("");
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
            if (EditValue.EventDate !== "") {
                const dateObject = new Date(EditValue.EventDate);          
                if (!isNaN(dateObject.getTime())) {
                  const splitdate = dateObject.toISOString().split('T')[0];
                  setEventDate(splitdate);
                } else {
                  console.error('Invalid date format:', EditValue.EventDate);
                }
              } else {    
                setEventDate(EventDate);
              }  

              if (EditValue.EventCategoryRefId !== 0) {
                setEventCategoryRefId(EditValue.EventCategoryRefId);
              } else {    
                setEEventCategoryRefId(0);
              }   

            if (EditValue.EventHeading !=="") {
              setEventHeading(EditValue.EventHeading);
              setEventName(EditValue.EventHeading);
            } else {    
              setEventHeading('');
              setEventName('');
            }   
            
            if (EditValue.EventClassCount !== 0) {
              setEventClassCount(EditValue.EventClassCount);
            } else {    
              setEventClassCount(0);
            }   
            
            if (EditValue.EventMembers !== 0) {
              setEventMembers(EditValue.EventMembers);
            } else {    
              setEventMembers(0);
            }   

            if (EditValue.EventAmount !== 0) {
              setEventAmount(EditValue.EventAmount);
            } else {    
              setEventAmount(0);
            }   

            if (EditValue.EventRating !== 0) {
              setEventRating(EditValue.EventRating);
              setEventStarRating(EditValue.EventStarRating);
            } else {    
              setEventRating(0);
              setEventStarRating(0);
            }   

            if (EditValue.EventImage !== "") {
              setEventImage(EditValue.EventImage);
            } else {    
              setEventImage("");
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
          Add Event 
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
                {EventDateError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventCategoryRefId"
                  mb="5px"
                >
                  Event category <i className="text-red">*</i>
                </Typography>
                <select className='w-full p-3 custom-text-area' onChange={dropdownCategoryList} variant="outlined" fullWidth>
                  <option value='0' id='0'>Select category name</option>
                  {CategoryList && CategoryList.map((list) => (
                    <option id={list.Id} value={list.Id} key={list.EventCategoryName}>{list.EventCategoryName}</option>
                  ))}
                </select>             
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventHeading"
                  mb="5px"
                >
                  Event heading <i className="text-red">*</i>
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventHeading} id="EventHeading" variant="outlined" fullWidth />
                {EventHeadingError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventClassCount"
                  mb="5px"
                >
                  Event class count
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventClassCount} id="EventClassCount" variant="outlined" fullWidth />                
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventMembers"
                  mb="5px"
                >
                  Event members
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventMembers} id="EventMembers" variant="outlined" fullWidth />                
              </div>


              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventAmount"
                  mb="5px"
                >
                  Event amount <i className="text-red">*</i>
                </Typography>
                <CustomTextField onChange={onChangeInput} value={EventAmount} id="EventAmount" variant="outlined" fullWidth />
                {EventAmountError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="Rating"
                  mb="5px"
                >
                  Event rating
                </Typography>
                <CustomTextField 
                type="number"
                step="0.1"
                min="0"
                max="5"       
                value={EventRating}         
                onChange={(e) => {
                    if (e.target.value > 5)     
                    return alert("Maximum limit of five stars :)");               
                    return handleRating(e.target.value);
                }}
                id="Rating" variant="outlined" fullWidth />                
                <br/>
                <StarRating stars={EventRating} />
              </div>
              
              
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="EventImage"
                  mb="5px"
                >
                  Event image (optional)
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
