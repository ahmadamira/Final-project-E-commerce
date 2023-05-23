import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import Abouthero from '../Aboutpage/Abouthero/Abouthero';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <Box>
            <Abouthero img="/imgs/contact.jpg" text="contact us" />
            <Container maxWidth="lg" sx={{ mt: '149px', mb: '110px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h4" gutterBottom textAlign="left">
                                We would love to hear from you.
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom textAlign="left">
                                If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Name"
                                        value={name}
                                        onChange={handleNameChange}
                                        margin="normal"
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="email"
                                    // error={true}
                                    // helperText={true && "error email"}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                label="Message"
                                value={message}
                                onChange={handleMessageChange}
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                rows={4}
                            />
                            <Box textAlign="left">
                                <Button variant="contained" color="primary" type="submit">
                                    Send Message
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom textAlign="left">
                            Visit Us
                        </Typography>
                        <Typography variant="body1" gutterBottom textAlign="left">
                            UET Lahore, Punjab, Pakistan

                        </Typography>
                        <Typography variant="body1" gutterBottom textAlign="left">
                            Phone: +923039898987
                        </Typography>
                        <Typography variant="h5" gutterBottom textAlign="left" sx={{ mt: '48px' }}>
                            Get In Touch
                        </Typography>
                        <Typography variant="body1" gutterBottom textAlign="left">
                            You can get in touch with us on this provided email.



                        </Typography>
                        <Typography variant="body1" gutterBottom textAlign="left">
                            Email: hmjawad087@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactForm;
