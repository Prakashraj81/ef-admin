import React, {useState, UseEffect} from "react";
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

export default function AddPost({EditModalOpen, CloseModalFunction}) {
  const [file, setFile] = useState(null);

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
        //const data = await response.json();
        console.log('Image uploaded successfully. Image path:', response);
      //   if (data.imagePath) {
      //     console.log('Image uploaded successfully. Image path:', data.imagePath);
      //   } else {
      //     console.error('Image upload failed. Image path not received.');
      //   }
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
          Add Post
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


            <div>
      <input type="file" onChange={handleFileChange} />      
    </div>

              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="username"
                  mb="5px"
                >
                  Question
                </Typography>
                <CustomTextField variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="username"
                  mb="5px"
                >
                  Answer
                </Typography>
                <CustomTextAreaField maxRows={10} className="w-full Mui-TextField" variant="outlined" row={4} />
              </div>
            </Grid>
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
