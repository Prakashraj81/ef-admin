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



export default function AddService({EditValue, EditModalOpen, CloseModalFunction}) {
  const [file, setFile] = useState(null);
  let [CurrentDate, setCurrentDate] = useState("");
  let [UpdateId, setUpdateId] = useState(0);
  let [Id, setId] = useState(0);
  let [ImageFile, setImageFile] = useState("");
  let [ShowLoader, setShowLoader] = useState(false); 

  let [ServiceDate, setServiceDate] = useState("");
  let [ServiceAmount, setServiceAmount] = useState(0);
  let [Heading_1, setHeading_1] = useState("");
  let [Heading_2, setHeading_2] = useState("");
  let [Heading_3, setHeading_3] = useState("");
  let [Heading_4, setHeading_4] = useState("");

  let [Contents_1, setContents_1] = useState("");
  let [Contents_2, setContents_2] = useState("");
  let [Contents_3, setContents_3] = useState("");
  let [Contents_4, setContents_4] = useState("");

  let [Image_1, setImage_1] = useState("");
  let [Image_2, setImage_2] = useState("");
  let [Image_3, setImage_3] = useState("");
  let [Image_4, setImage_4] = useState("");

  let [FirstService, setFirstService] = useState(true);
  let [SecondService, setSecondService] = useState(false); 
  let [ThirdService, setThirdService] = useState(false); 
  let [FourthService, setFourthService] = useState(false); 

  //Error state and button disabled
  let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
  let [Heading_1Error, setHeading_1Error] = useState(false);
  let [Contents_1Error, setContents_1Error] = useState(false);  
  let [PageLoadStatus, setPageLoadStatus] = useState(true);   

  useEffect(() => {
    // Get the current date in the format "YYYY-MM-DD"
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setServiceDate(formattedDate);
    console.log(EditValue);
  }, [ImageFile]);

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
    let ImageId = e.currentTarget.id;
    ImageFile = e.target.files[0];
    setImageFile(ImageFile);    
    handleServiceImageUpload(ImageFile, ImageId);
  };

  const handleServiceImageUpload = async (ImageFile, ImageId) => {
    if (!ImageFile) {
      console.error('No file selected.');
      console.log('No file selected.');
      return;
    }
    const formData = new FormData();
    formData.append('image', ImageFile);
    try {
      const response = await fetch('/api/services/imageupload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const responseData = await response.json();
        const fullPath = responseData.FilePath;        
        let ServiceImage = fullPath.split('\\').pop();
        if(ImageId === "Image_1"){   
          Image_1 = ServiceImage;
          setImage_1(ServiceImage);
        }
        else if(ImageId === "Image_2"){
          Image_2 = ServiceImage;
          setImage_2(ServiceImage);
        }
        else if(ImageId === "Image_3"){
          Image_3 = ServiceImage;
          setImage_3(ServiceImage);
        }
        else {
          Image_4 = ServiceImage;
          setImage_4(ServiceImage);
        }
      } else {
        console.error('Service image upload failed');
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
    if(InputId === "Heading_1"){
      setHeading_1(Value);
      setHeading_1Error(false);        
    }  
    else if(InputId === "Contents_1"){
      setContents_1(Value);
      setContents_1Error(false);
    }  
    else if(InputId === "Heading_2"){
      setHeading_2(Value);
    }  
    else if(InputId === "Contents_2"){
      setContents_2(Value);
    }  
    else if(InputId === "Heading_3"){
      setHeading_3(Value);
    }  
    else if(InputId === "Contents_3"){
      setContents_3(Value);
    }  
    else if(InputId === "Heading_4"){
      setHeading_4(Value);
    }      
    else{
      setContents_4(Value);
    }
    
};

//Submit API function 
const InsertService = async () => {  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  setCurrentDate(formattedDate);  
  console.log(formattedDate);  
  let defaultValues = {
      Id: UpdateId,
      ServiceDate: ServiceDate,
      Heading_1: Heading_1,
      Contents_1: Contents_1,
      Image_1: Image_1,
      ServiceAmount: ServiceAmount,
      Heading_2: Heading_2,
      Contents_2: Contents_2, 
      Image_2: Image_2,
      Heading_3: Heading_3,  
      Contents_3: Contents_3, 
      Image_3: Image_3,
      Heading_4: Heading_4,
      Contents_4: Contents_4, 
      Image_4: Image_4,
      ServiceAmount: ServiceAmount,
      Created_Date: CurrentDate,    
    };
    CloseModalFunction();
    setShowLoader(true);   
    if (defaultValues.Heading_1 === "") {
      isSumbitDisabled = true;
      setHeading_1Error(true);
    }       
    if(defaultValues.Contents_1 === ""){
      isSumbitDisabled = true;
      setContents_1Error(true);    
    }       
    
  //Api setup
  if (isSumbitDisabled !== true) {
      try {
        await axios.post('/api/services/insert', { Id, ServiceDate, Heading_1, Contents_1, Image_1, Heading_2, Contents_2, Image_2, Heading_3, Contents_3, Image_3, Heading_4, Contents_4, Image_4, ServiceAmount });  
        setShowLoader(false);    
        setPageLoadStatus(false);            
      } catch (error) {
        CloseModalFunction();   
        setShowLoader(false);
        console.error('Error inserting service:', error);
        console.log('Error inserting service:', error);
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
          setHeading_1("");
          setContents_1("");
          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const day = String(today.getDate()).padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`;
          setServiceDate(formattedDate); 
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
                setServiceDate(splitdate);
              } else {
                console.error('Invalid date format:', EditValue.Date);
              }
            } else {    
              setServiceDate(ServiceDate);
            }  

            if (EditValue.ServiceHeading_1 !== "") {
              setHeading_1(EditValue.ServiceHeading_1);
            } else {    
              setHeading_1("");
            } 
            
            if (EditValue.ServiceHeading_2 !== "") {
              setHeading_2(EditValue.ServiceHeading_2);
            } else {    
              setHeading_2("");
            } 

            if (EditValue.ServiceHeading_3 !== "") {
              setHeading_3(EditValue.ServiceHeading_3);
            } else {    
              setHeading_3("");
            } 

            if (EditValue.ServiceContent_1 !== "") {
              setContents_1(EditValue.ServiceContent_1);
            } else {    
              setContents_1("");
            } 

            if (EditValue.ServiceContent_2 !== "") {
              setContents_2(EditValue.ServiceContent_2);
            } else {    
              setContents_2("");
            } 

            if (EditValue.ServiceContent_3 !== "") {
              setContents_3(EditValue.ServiceContent_3);
            } else {    
              setContents_3("");
            }    
            
            if (EditValue.Service_Image_1 !== "") {
              setImage_1(EditValue.Service_Image_1);
            } else {    
              setImage_1("");
            }    
      }            
    }, [EditValue]);
}



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
                  Heading
                </Typography>
                <CustomTextField 
                onChange={onChangeInput} id="Heading_1" value={Heading_1}
                variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Content
                </Typography>
                <textarea className='w-full p-3 custom-text-area' onChange={onChangeInput} id="Contents_1" value={Contents_1} rows={7}></textarea>
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" id="Image_1" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {SecondService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub heading-2
                </Typography>
                <CustomTextField 
                onChange={onChangeInput} id="Heading_2" value={Heading_2}
                variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub content-2
                </Typography>
                <textarea className='w-full p-3 custom-text-area' onChange={onChangeInput} id="Contents_2" value={Contents_2} rows={7}></textarea>
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" id="Image_2" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {ThirdService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub heading-3
                </Typography>
                <CustomTextField 
                onChange={onChangeInput} id="Heading_3" value={Heading_3}
                variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub content-3
                </Typography>
                <textarea className='w-full p-3 custom-text-area' onChange={onChangeInput} id="Contents_3" value={Contents_3} rows={7}></textarea>
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" id="Image_3" onChange={handleFileChange} />
            </div>            
            </Grid>
                </>
            )}
            {FourthService && (
                <>
                <Grid container>
            <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub heading-4
                </Typography>
                <CustomTextField 
                onChange={onChangeInput} id="Heading_4" value={Heading_4}
                variant="outlined" fullWidth />
              </div>
              <div className="w-full inline-block mb-7">
                <Typography variant="subtitle1" fontWeight={600} component="label" mb="5px">
                  Sub content-4
                </Typography>
                <textarea className='w-full p-3 custom-text-area' onChange={onChangeInput} id="Contents_4" value={Contents_4} rows={7}></textarea>
              </div>
              <div className="image-sec w-full flex justify-between items-center">
                <input type="file" id="Image_4" onChange={handleFileChange} />
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
          <button className="px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150" onClick={InsertService}>
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>      
    </>
  )
}
