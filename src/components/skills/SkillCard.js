import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const SkillCard = ({ icon, title, description }) => {
    return (
        <Stack 
            spacing={2} 
        >
            <Stack 
                direction='row' 
                spacing={2}
                justifyContent='center'
            >
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        height: '60px',
                        width: '60px',
                        borderRadius: '50%',
                        bgcolor: '#EAC985',
                        border: '2px solid #6C462A',
                        boxShadow: '-8px -5.5px 0 #6C462A'
                    }}
                >
                    {icon}
                </Stack>
                <Stack>
                    <Typography
                        component='h3'
                        fontFamily='Cormorant, serif'
                        fontSize='1.3em'
                        fontWeight='700'
                        textTransform='uppercase'
                        lineHeight='1.2'
                        marginBottom='6px'
                        sx={{
                            color: '#623E2A'
                        }}
                    >
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            width: '100px',
                            borderColor: '#EAC985',
                            borderBottomWidth: '2px',
                        }}
                    />
                </Stack>
            </Stack>
            <Typography
                align='center'
                fontFamily='Dosis, sans-serif'
                fontSize='1.3em'
                fontWeight='400'
                sx={{
                    color: '#C69F73'
                }}
            >
                {description}
            </Typography>
        </Stack>
    );
};

export default SkillCard;