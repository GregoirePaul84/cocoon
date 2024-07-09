import React, { useState } from 'react';
import { Stack, TextField, FormControlLabel, Button, TextareaAutosize, Typography, FormControl, RadioGroup, Radio, styled } from '@mui/material';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
        borderColor: '#EAC985',
        }
    },
    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
        color: '#987349',
        }
    }
});

const CustomRadio = styled(Radio)({
    '&.Mui-checked': {
      color: '#987349',
    }
});

const CustomTextarea = styled('textarea')({
    padding: '10px',
    borderRadius: '4px',
    outline: 'none',
    resize: 'none',
    '&:focus': {
      outline: '1px solid #987349', 
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' 
    },
  });

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        ville: '',
        telephone: '',
        email: '',
        serviceChoisi: 'non défini',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Form Data:', formData);
        // Vous pourriez ici ajouter une logique pour envoyer les données à un serveur, etc.
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack marginBottom='20px' >
                <Typography
                    component='h3'
                    fontFamily='"Dosis", sans-serif'
                    fontSize='1.2em'
                    fontWeight='600'
                    sx={{
                        color: '#6C462A'
                    }}
                >
                    Informations personnelles
                </Typography>
            </Stack>
            <Stack 
                spacing={{
                    xs: 4,
                    sm: 0
                }} 
                direction={{
                    xs: 'column',
                    sm: 'row'
                }}
                marginBottom='40px' 
                sx={{
                    flexWrap: {
                        xs: 'nowrap',
                        sm: 'wrap'
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'flex-start'
                    },
                    justifyContent: {
                        xs: 'flex-start',
                        sm: 'space-between'
                    },
                    rowGap: '40px'
                }}
            >
                <CustomTextField 
                    label="Nom" 
                    variant="outlined" 
                    name="nom" 
                    value={formData.nom} 
                    onChange={handleChange}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%'
                        }
                    }}
                />
                <CustomTextField 
                    label="Prénom" 
                    variant="outlined" 
                    name="prenom" 
                    value={formData.prenom} 
                    onChange={handleChange}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%'
                        }
                    }}
                />
                <CustomTextField 
                    label="Ville" 
                    variant="outlined" 
                    name="ville" 
                    value={formData.ville} 
                    onChange={handleChange}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%'
                        }
                    }}
                />
                <CustomTextField 
                    label="Téléphone" 
                    variant="outlined" 
                    name="telephone" 
                    value={formData.telephone} 
                    onChange={handleChange}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%'
                        }
                    }}
                />
                <CustomTextField 
                    label="Email" 
                    variant="outlined" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%'
                        }
                    }}
                />                
            </Stack>
            <Stack marginBottom='15px' >
                <Typography
                    component='h3'
                    fontFamily='"Dosis", sans-serif'
                    fontSize='1.2em'
                    fontWeight='600'
                    sx={{
                        color: '#6C462A'
                    }}
                >
                    Service souhaité 
                </Typography>
            </Stack>
            <Stack spacing={2} marginBottom='40px'>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="service"
                        name="serviceChoisi"
                        value={formData.serviceChoisi}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="non défini" control={<CustomRadio />} label="Non défini" sx={{ width: 'fit-content' }} />
                        <FormControlLabel value="clés en main" control={<CustomRadio />} label="Service Clés en main (25%)" sx={{ width: 'fit-content' }} />
                        <FormControlLabel value="clés confort" control={<CustomRadio />} label="Service Clés confort (20%)" sx={{ width: 'fit-content' }} />
                        <FormControlLabel value="clés essentielles" control={<CustomRadio />} label="Service Clés essentielles (15%)" sx={{ width: 'fit-content' }} />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <Stack marginBottom='20px' >
                <Typography
                    component='h3'
                    fontFamily='"Dosis", sans-serif'
                    fontSize='1.2em'
                    fontWeight='600'
                    sx={{
                        color: '#6C462A'
                    }}
                >
                    Informations complémentaires
                </Typography>
            </Stack>
            <Stack marginBottom='40px' >
                <CustomTextarea
                    rows={8}
                    placeholder="Votre message ici (facultatif)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </Stack>
            <Stack alignItems='center' >
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{
                        fontFamily: 'Dosis, sans-serif',
                        fontWeight: '600',
                        width: 'fit-content',
                        padding: '5px 25px 6px 25px',
                        color: '#3E3E3E',
                        backgroundColor: '#EAC985', 
                        '&:hover': { backgroundColor: '#d9b278' }
                    }}
                    
                >
                    Envoyer
                </Button>
            </Stack>
        </form>
    );
};

export default ContactForm;
