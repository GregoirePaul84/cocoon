import { List, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PriceServices = ({ description }) => {

    return (
        <List disablePadding>
            <Stack 
                direction='row' 
                alignItems='center'
                height='calc(3em * 1.5)'
                columnGap='15px'
            >
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <CheckCircleIcon sx={{ color: '#E6C9A8'}} />
                </ListItemIcon>
                <Typography
                    component='p'
                    fontFamily='Dosis, sans-serif'
                    fontSize='1em'
                    fontWeight='300'
                    sx={{
                        color: '#FFFBF1',
                    }}
                >
                    {description}
                </Typography>
            </Stack>
        </List>
    );
};

export default PriceServices;