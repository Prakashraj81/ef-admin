import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { IconX } from "@tabler/icons-react";
import Slide from '@mui/material/Slide';

export default function SuccessAlert() {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="left" ref={ref} {...props} />;
    });
    const [open, setOpen] = React.useState(true);    

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>    
                <Alert
                className='absolute bg-success-light right-0 bottom-0 z-10'
                severity="success"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <IconX fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                        >
                    <Typography className="success-main" color="inherit" size="small">Enquiry form saved successfully!</Typography>
                </Alert>          
            </Slide>
            </Collapse>
        </Box>
    );
}