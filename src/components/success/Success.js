import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import logoSrc from '../../medias/images/logo_2.svg';
import { useNavigate } from 'react-router-dom';

const Success = () => {

    const navigate = useNavigate();

    return (
        <Box 
            bgcolor='#987349'
            height='100vh'
            width='100vw'    
        >
            <Stack spacing={3} padding='20px'>
                <img 
                    src={logoSrc} 
                    alt="logo conciergerie cocoon" 
                    style={{
                        width: '200px'
                    }}
                />
                <Stack spacing={3} alignItems='center'>
                    <Typography color='#fff' fontSize='1.2em' fontWeight='300' lineHeight='2'>
                        Merci ! Le formulaire a été envoyé avec succès.
                    </Typography>
                    <Typography color='#fff' fontSize='1.2em' fontWeight='200' lineHeight='2'>
                        Nous reviendrons vers vous dans les plus brefs délais.
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ 
                            width: 'fit-content',
                            padding: '5px 16px 6px 16px',
                            fontFamily: 'Dosis, sans-serif',
                            fontSize: '1.2em',
                            fontWeight: '600',
                            textTransform: 'initial',
                            color: '#3E3E3E',
                            backgroundColor: '#EAC985', 
                            '&:hover': { backgroundColor: '#d9b278' },
                            borderRadius: '25px'
                        }}
                        onClick={() => navigate('/')}
                    >
                        Retour au site
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Success;