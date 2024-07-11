import { Box, Modal, Typography, Stack, Button } from '@mui/material';
import React from 'react';

const ContactValidation = ({ openValidation, setOpenValidation, handleCloseValidation, handleFinalSubmit }) => {
    return (
        <Modal
            open={openValidation}
            onClose={handleCloseValidation}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                width: '75vw',
                maxWidth: '300px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: '#E7CAA9',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: 10,
            }}>
                <Typography component='h3' align='center' variant='h6' marginBottom='20px'>
                    Envoi du formulaire
                </Typography>
                <Typography align='center' marginBottom='20px'>
                    Êtes-vous sûr(e) de vouloir envoyer ces informations ?
                </Typography>
                <Stack direction='row' justifyContent='space-between' padding='0 15px'>
                    <Button 
                        color='error'
                        onClick={() => setOpenValidation(false)}
                    >
                        Annuler
                    </Button>
                    <Button 
                        color='success'
                        onClick={handleFinalSubmit}
                    >
                        Envoyer
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default ContactValidation;