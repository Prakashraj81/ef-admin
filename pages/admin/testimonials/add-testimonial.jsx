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

  

export default function AddTestimonial({EditValue, EditModalOpen, CloseModalFunction}) {
  let [UpdateId, setUpdateId] = useState(0);
  let [Id, setId] = useState(0);
  let [CustomerName, setCustomerName] = useState("");
  let [ReviewDate, setReviewDate] = useState(""); 
  let [City, setCity] = useState("");  
  let [Contents, setContents] = useState("");  
  let [AvgRating, setAvgRating] = useState(0);
  let [CurrentDate, setCurrentDate] = useState("");

  let [LoginError, setLoginError] = useState(false);
  let [ShowLoader, setShowLoader] = useState(false);  

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [CustomerNameError, setCustomerNameError] = useState(false);
  let [ReviewDateError, setReviewDateError] = useState(false);
  let [CityError, setCityError] = useState(false);
  let [ContentsError, setContentsError] = useState(false);  
  let [ShowPasswordError, setShowPasswordError] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    


  useEffect(() => {
    // Get the current date in the format "YYYY-MM-DD"
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setReviewDate(formattedDate);
  }, []);

  const handleRating = (input) => {
    setAvgRating(input);
  };

  const onChangeInput = (event) => {
      let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "CustomerName"){
        setCustomerName(Value);
        setCustomerNameError(false);        
      }
      else if(InputId === "City"){
        setCity(Value);
        setCityError(false);   
      }
      else if(InputId === "ReviewDate"){
        setReviewDate(Value);
        setReviewDateError(false);   
      }
      else{
        setContents(Value);
        setContentsError(false);
      }
      
  };
  
  //Submit API function 
  const InsertTestimonial = async () => {  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);  
    console.log(formattedDate);  
    let defaultValues = {
        Id: UpdateId,
        AvgRating: AvgRating,
        City: City,
        ReviewDate: ReviewDate,
        CustomerName:CustomerName,
        Contents:Contents,        
        Created_Date: CurrentDate,    
      };
      CloseModalFunction();
      setShowLoader(true);    
      if(defaultValues.CustomerName === ""){
        isSumbitDisabled = true;
        setCustomerNameError(true);    
      }
      if (defaultValues.City === "") {
        isSumbitDisabled = true;
        setCityError(true);
      }    
      if (defaultValues.Contents === "") {
        isSumbitDisabled = true;
        setContentsError(true);
      }    
      if (defaultValues.ReviewDate === "") {
        isSumbitDisabled = true;
        setReviewDateError(true);
      }      
    //Api setup
    if (isSumbitDisabled !== true) {
        console.log(defaultValues);
        try {
          await axios.post('/api/testimonials/insert', { Id, ReviewDate, CustomerName, City, AvgRating, Contents });  
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
            setAvgRating(0);            
            setCustomerName("");
            setCity("");
            setContents("");      
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            setReviewDate(formattedDate); 
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
            if (EditValue.Rating !=="") {
                setAvgRating(EditValue.Rating);
              } else {    
                setAvgRating(0);
              }    
              if (EditValue.Date !== "") {
                const dateObject = new Date(EditValue.Date);          
                if (!isNaN(dateObject.getTime())) {
                  const splitdate = dateObject.toISOString().split('T')[0];
                  setReviewDate(splitdate);
                } else {
                  console.error('Invalid date format:', EditValue.Date);
                }
              } else {    
                setReviewDate(ReviewDate);
              }    
            if (EditValue.CustomerName !=="") {
              setCustomerName(EditValue.CustomerName);
            } else {    
              setCustomerName('');
            }    
            if (EditValue.City !=="") {
                setCity(EditValue.City);
              } else {    
                setCity('');
              }    
              if (EditValue.Message !=="") {
                setContents(EditValue.Message);
              } else {    
                setContents('');
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
          Add Testimonial
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
                  htmlFor="Rating"
                  mb="5px"
                >
                  Star rating
                </Typography>
                <CustomTextField 
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={AvgRating}
                onChange={(e) => {
                    if (e.target.value > 5)     
                    return alert("Maximum limit of five stars :)");               
                    return handleRating(e.target.value);
                }}
                id="Rating" variant="outlined" fullWidth />                
                <br/>
                <StarRating stars={AvgRating} />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="ReviewDate"
                  mb="5px"
                >
                  Review date
                </Typography>
                <CustomTextField onChange={onChangeInput} value={ReviewDate} type="date" id="ReviewDate" variant="outlined" fullWidth />
                {ReviewDateError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="CustomerName"
                  mb="5px"
                >
                  Customer name
                </Typography>
                <CustomTextField onChange={onChangeInput} value={CustomerName} id="CustomerName" variant="outlined" fullWidth />
                {CustomerNameError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="City"
                  mb="5px"
                >
                  City
                </Typography>
                <CustomTextField onChange={onChangeInput} value={City} id="City" variant="outlined" fullWidth />
                {CityError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
              </div>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="Contents"
                  mb="5px"
                >
                  Contents
                </Typography>                
                <textarea className='w-full p-3 custom-text-area' onChange={onChangeInput} id="Contents" value={Contents} rows={7}></textarea>
                {ContentsError && (
                <p className="text-red-500" role="alert">This field required</p>
                )}
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
          onClick={InsertTestimonial}
          className="px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150">
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>      
    </>
  )
}
