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
  let [Message, setMessage] = useState(""); 
  let [ShowLoader, setShowLoader] = useState(false);  

  //Error state and button disabled  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);    

  PageLoad(EditValue);
  function PageLoad(EditValue){    
    useEffect(() => {  
        if(EditValue.length === 0){                 
            setMessage("");            
        }
        else{            
            if (EditValue.Message !=="") {
              setMessage(EditValue.Message);
            } else {    
              setMessage("");
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
          Enquiry message view
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
                <div className="msg-view">
                    <p>{Message}</p>
                </div>                        
            </Grid>
          </Box>
        </DialogContent>        
      </BootstrapDialog>      
    </>
  )
}
