import React, { useCallback, useEffect, useState } from 'react';
import { Stack, TextField, FormControlLabel, Button, Typography, FormControl, RadioGroup, Radio, styled, Alert, AlertTitle, Modal } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import ContactValidation from './ContactValidation';
import { useNavigate } from 'react-router-dom';

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

    const [state, submit] = useForm("xovavaoj");

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        ville: '',
        telephone: '',
        email: '',
        serviceChoisi: 'non défini',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [displayError, setDisplayError] = useState(false);
    const [openValidation, setOpenValidation] = useState(false);

    const navigate = useNavigate();

    const handleOpenValidation = () => setOpenValidation(true);
    const handleCloseValidation = () => {
        console.log('fermeture');
        setOpenValidation(false);
    };

    const validateForm = () => {
        let newErrors = {};
        // Vérifiez chaque champ requis et ajoutez une erreur si nécessaire
        if (!formData.nom.trim()) {
            newErrors.nom = "Merci d'indiquer votre nom.";
        }
        if (!formData.prenom.trim()) {
            newErrors.prenom = "Merci d'indiquer votre prénom.";
        }
        if (!formData.ville.trim()) {
            newErrors.ville = "Merci d'indiquer votre ville.";
        }
        if (!formData.telephone.trim()) {
            newErrors.telephone = "Merci d'indiquer votre numéro de téléphone.";
        }
    
        setErrors(newErrors);
        // Renvoyer true si aucune erreur n'est trouvée
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            handleOpenValidation();
        } else {
            setDisplayError(true);
        }
    };

    const handleFinalSubmit = () => {
        console.log('Final Submit:', formData);
        submit(formData);  // Assurez-vous que cette fonction envoie réellement les données, cela peut dépendre de votre configuration avec useForm ou autre.
        handleCloseValidation();  // Fermez la modale après l'envoi.
        navigate('/success');
    };
    

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
    
        // Mise à jour des données du formulaire
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    
        // Suppression de l'erreur pour le champ actuellement modifié
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: undefined  // Supprime l'erreur du champ en cours de modification
            });
        }
    };


    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <>
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
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        fontSize='1em'
                        fontWeight='500'
                        sx={{
                            color: '#6C462A'
                        }}
                    >
                        * Informations obligatoires
                    </Typography>
                </Stack>
                <Stack 
                    direction={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    marginBottom='40px' 
                    position='relative'
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
                        label="Nom *" 
                        variant="outlined" 
                        name="nom" 
                        value={formData.nom} 
                        onChange={handleChange}
                        error={!!errors.nom}
                        helperText={errors.nom}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '45%'
                            },
                            '& .MuiFormHelperText-root': {
                                position: 'absolute',
                                bottom: '-22px'
                            }
                        }}
                    />
                    <CustomTextField 
                        label="Prénom *" 
                        variant="outlined" 
                        name="prenom" 
                        value={formData.prenom} 
                        onChange={handleChange}
                        error={!!errors.prenom}
                        helperText={errors.prenom}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '45%'
                            },
                            '& .MuiFormHelperText-root': {
                                position: 'absolute',
                                bottom: '-22px'
                            }
                        }}
                    />
                    <CustomTextField 
                        label="Ville *" 
                        variant="outlined" 
                        name="ville" 
                        value={formData.ville} 
                        onChange={handleChange}
                        error={!!errors.ville}
                        helperText={errors.ville}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '45%'
                            },
                            '& .MuiFormHelperText-root': {
                                position: 'absolute',
                                bottom: '-22px'
                            }
                        }}
                    />
                    <CustomTextField 
                        label="Téléphone *" 
                        variant="outlined" 
                        name="telephone" 
                        value={formData.telephone} 
                        onChange={handleChange}
                        error={!!errors.telephone}
                        helperText={errors.telephone}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '45%'
                            },
                            '& .MuiFormHelperText-root': {
                                position: 'absolute',
                                bottom: '-22px'
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
            <ContactValidation 
                openValidation={openValidation} 
                setOpenValidation={setOpenValidation} 
                handleCloseValidation={handleCloseValidation} 
                handleFinalSubmit={handleFinalSubmit}
            />
            <Modal
                open={displayError}
                onClose={() => setDisplayError(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Alert severity="error">
                    <AlertTitle>Erreur dans l'envoi du formulaire</AlertTitle>
                    Merci de réessayer ultérieurement ou de privilégier le contact téléphonique au 04.48.15.08.72.
                </Alert>
            </Modal>
        </>
    );
};

export default ContactForm;
