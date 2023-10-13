import React, {useState, useEffect} from "react";
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
import { IconX } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { IconEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import theme from "../../../components/shared/theme";
import axios from 'axios';
import { useRouter } from 'next/router';
//import router from "/router";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



export default function AddService({EditModalOpen, CloseModalFunction}) {
  const [file, setFile] = useState(null);
  let [FirstService, setFirstService] = useState(true);
  let [SecondService, setSecondService] = useState(false); 
  let [ThirdService, setThirdService] = useState(false); 
  let [FourthService, setFourthService] = useState(false); 

//   useEffect(() => {
//     setFirstService(true);
//   });

  const AddService = (event) => {
    let serviceId = event.currentTarget.id;
    if(serviceId === "FirstService") {
        setFirstService(true);
        setSecondService(false);
        setThirdService(false);
        setFourthService(false);
    }
    else if(serviceId === "SecondService") {
        setFirstService(false);
        setSecondService(true);
        setThirdService(false);
        setFourthService(false);
    }
    else if(serviceId === "ThirdService") {
        setFirstService(false);
        setSecondService(false);
        setThirdService(true);
        setFourthService(false);   
    }
    else{
        setFirstService(false);
        setSecondService(false);
        setThirdService(false);
        setFourthService(true);
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected.');
      console.log('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/post/insert', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully. Image path:', response);      
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };
  return (
    <>  
      <BootstrapDialog open={EditModalOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Add Service
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
            <div className="w-full flex justify-between items-center px-2 py-3">
                <Button id="FirstService" onClick={AddService} className={FirstService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main"}>Service-1</Button>
                <Button id="SecondService" onClick={AddService} className={SecondService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main"}>Service-2</Button>
                <Button id="ThirdService" onClick={AddService} className={ThirdService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main"}>Service-3</Button>
                <Button id="FourthService" onClick={AddService} className={FourthService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main"}>Service-4</Button>
            </div>
            {FirstService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Heading-1
                </Typography>
                <CustomTextField variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Content-1
                </Typography>
                <CustomTextAreaField maxRows={10} className="w-full Mui-TextField" variant="outlined" row={4} />
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {SecondService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Heading-2
                </Typography>
                <CustomTextField variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Content-2
                </Typography>
                <CustomTextAreaField maxRows={10} className="w-full Mui-TextField" variant="outlined" row={4} />
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {ThirdService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Heading-3
                </Typography>
                <CustomTextField variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Content-3
                </Typography>
                <CustomTextAreaField maxRows={10} className="w-full Mui-TextField" variant="outlined" row={4} />
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {FourthService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Heading-4
                </Typography>
                <CustomTextField variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Content-4
                </Typography>
                <CustomTextAreaField maxRows={10} className="w-full Mui-TextField" variant="outlined" row={4} />
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <button className="px-2 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150" onClick={CloseModalFunction}>
            Cancel
          </button>
          <button className="px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150">
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>      
    </>
  )
}
