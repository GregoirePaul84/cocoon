import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Container
            id='contact'
            sx={{
                width: '100vw',
                padding: '40px 7%',
                scrollMarginTop: '70px'
            }}
        >
            <Stack spacing={2} marginBottom='40px' >
                <Typography
                    align='center'
                    padding='0 16px'
                    fontFamily='"Dosis", sans-serif'
                    fontSize='1.6em'
                    fontWeight='500'
                    color='#504131'
                >
                    Vous avez <span style={{ fontWeight: '700' }} >d'autres questions</span> ou <span style={{ fontWeight: '700' }}>souhaitez nous contacter ?</span>
                </Typography>
                <Typography
                    align='center'
                    padding='0 16px'
                    fontFamily='"Dosis", sans-serif'
                    fontSize='1.4em'
                    fontWeight='500'
                    color='#6C462A'
                >
                    Contactez-nous au <strong>04.48.15.08.72</strong> ou remplissez le formulaire ci-dessous !
                </Typography>
            </Stack>
            <ContactForm />
        </Container>
    );
};

export default Contact;