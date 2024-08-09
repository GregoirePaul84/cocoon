import React, { useState } from 'react';
import { Stack, TextField, FormControlLabel, Button, Typography, FormControl, RadioGroup, Radio, styled, Alert, AlertTitle, Modal } from '@mui/material';
import { useForm } from '@formspree/react';
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
    const formSpreeKey = process.env.REACT_APP_FORMSPREE_KEY;

    const [submit] = useForm(formSpreeKey);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        ville: '',
        telephone: '',
        email: '',
        serviceChoisi: 'non défini',
        bienClient: 'non défini',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [displayError, setDisplayError] = useState({ display: false, message: null });
    const [openValidation, setOpenValidation] = useState(false);

    const navigate = useNavigate();

    const handleOpenValidation = () => setOpenValidation(true);
    const handleCloseValidation = () => setOpenValidation(false);

    const validateForm = () => {
        let newErrors = {};
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
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            handleOpenValidation();
        } else {
            setDisplayError({ display: true, message: 'Merci de renseigner tous les champs obligatoires.' });
        }
    };

    const handleFinalSubmit = async () => {

        try {
            await submit(formData);  
            handleCloseValidation();       
            navigate('/success');

        } catch (error) {            
            setDisplayError({ display: true, message: 'Une erreur est survenue lors de l\'envoi du formulaire. Merci de réessayer ultérieurement ou de privilégier le contact téléphonique au 04.48.15.08.72.' });
        }
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: undefined
            });
        }
    };

    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit}>
                <Stack marginBottom='20px'>
                    <Typography
                        component='h3'
                        fontFamily='"Dosis", sans-serif'
                        fontSize='1.2em'
                        fontWeight='600'
                        sx={{ color: '#504131' }}
                    >
                        Informations personnelles
                    </Typography>
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        fontSize='1em'
                        fontWeight='500'
                        sx={{ color: '#6C462A' }}
                    >
                        * Informations obligatoires
                    </Typography>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    marginBottom='40px'
                    position='relative'
                    sx={{
                        flexWrap: { xs: 'nowrap', sm: 'wrap' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        justifyContent: { xs: 'flex-start', sm: 'space-between' },
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
                            width: { xs: '100%', sm: '45%' },
                            '& .MuiFormHelperText-root': { position: 'absolute', bottom: '-22px' }
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
                            width: { xs: '100%', sm: '45%' },
                            '& .MuiFormHelperText-root': { position: 'absolute', bottom: '-22px' }
                        }}
                    />
                    <CustomTextField
                        label="Ville du bien *"
                        variant="outlined"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        error={!!errors.ville}
                        helperText={errors.ville}
                        sx={{
                            width: { xs: '100%', sm: '45%' },
                            '& .MuiFormHelperText-root': { position: 'absolute', bottom: '-22px' }
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
                            width: { xs: '100%', sm: '45%' },
                            '& .MuiFormHelperText-root': { position: 'absolute', bottom: '-22px' }
                        }}
                    />
                    <CustomTextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ width: { xs: '100%', sm: '45%' } }}
                    />
                </Stack>
                <Stack spacing={2} marginBottom='40px'>
                    <Stack direction='row' justifyContent='space-between'>
                        <Stack width='45%'>
                            <Typography
                                component='h3'
                                fontFamily='"Dosis", sans-serif'
                                fontSize='1.2em'
                                fontWeight='600'
                                marginBottom='15px'
                                sx={{ color: '#504131' }}
                            >
                                Service souhaité
                            </Typography>
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
                        <Stack width='45%'>
                            <Typography
                                component='h3'
                                fontFamily='"Dosis", sans-serif'
                                fontSize='1.2em'
                                fontWeight='600'
                                marginBottom='15px'
                                sx={{ color: '#504131' }}
                            >
                                Bien proposé
                            </Typography>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="bienClient"
                                    name="bienClient"
                                    value={formData.bienClient}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="non défini" control={<CustomRadio />} label="Non défini" sx={{ width: 'fit-content' }} />
                                    <FormControlLabel value="appartement" control={<CustomRadio />} label="Appartement" sx={{ width: 'fit-content' }} />
                                    <FormControlLabel value="maison" control={<CustomRadio />} label="Maison" sx={{ width: 'fit-content' }} />
                                    <FormControlLabel value="villa" control={<CustomRadio />} label="Villa" sx={{ width: 'fit-content' }} />
                                    <FormControlLabel value="autre" control={<CustomRadio />} label="Autre" sx={{ width: 'fit-content' }} />
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack marginBottom='20px'>
                    <Typography
                        component='h3'
                        fontFamily='"Dosis", sans-serif'
                        fontSize='1.2em'
                        fontWeight='600'
                        sx={{ color: '#504131' }}
                    >
                        Informations complémentaires
                    </Typography>
                </Stack>
                <Stack marginBottom='40px'>
                    <CustomTextarea
                        rows={8}
                        placeholder="Votre message ici (facultatif)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Stack>
                <Stack alignItems='center'>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            fontFamily: 'Dosis, sans-serif',
                            fontWeight: '600',
                            width: 'fit-content',
                            padding: '5px 25px 6px 25px',
                            color: '#504131',
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
            {displayError.display && (
                <Modal
                    open={displayError.display}
                    onClose={() => setDisplayError({ display: false, message: null })}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Alert severity="error">
                        <AlertTitle>Erreur dans l'envoi du formulaire</AlertTitle>
                        {displayError.message}
                    </Alert>
                </Modal>
            )}
        </>
    );
};

export default ContactForm;
