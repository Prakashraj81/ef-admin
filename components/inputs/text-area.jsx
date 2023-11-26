import * as React from 'react';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';

export default function BasicTextArea({title}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >      
    <Typography>{title}</Typography>
    <TextareaAutosize        
        aria-label="minimum height"
        minRows={5}
        placeholder=""                
        style={{ width: '100%' }}
      />    
    </Box>
  );
}
