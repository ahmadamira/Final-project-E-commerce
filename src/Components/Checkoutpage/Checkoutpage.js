import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Box } from '@mui/system';

const Checkoutpage = () => {
    const [fullName, setFullName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [townCity, setTownCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <Box sx={{ mt: '97px', mb: '50px' }}>

            <Container maxWidth="lg" >
                <Typography variant="h4" textAlign='left' sx={{ marginBottom: '1rem' }}>
                    Billing Details
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '50%' }}>
                    <TextField
                        label="Full Name"
                        fullWidth
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Street Address"
                        fullWidth
                        required
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Town/City"
                        fullWidth
                        required
                        value={townCity}
                        onChange={(e) => setTownCity(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Phone"
                        fullWidth
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Email Address"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                    />

                </form>
                <Typography variant="h4" textAlign='left' sx={{ marginBottom: '1rem' }}>
                    Your order
                </Typography>

                <TableContainer component={Paper} sx={{ marginTop: '2rem', width: '100%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant='h6'>Product</Typography></TableCell>
                                <TableCell><Typography variant='h6'>Total</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Plain White Shirt</TableCell>
                                <TableCell>$59.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Subtotal</TableCell>
                                <TableCell>$59.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>$59.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box component={Paper} display='flex' flexDirection='column' justifyContent='space-around' height='245.38px' sx={{ marginTop: '1rem' }}>
                    <Box backgroundColor='#FBFBFB' textAlign='center' sx={{ ml: '24px', mr: '24px' }}>
                        <Typography color='#555555' variant="body1" sx={{ marginRight: '1rem', pt: '25px', pb: '25px', pl: '16px' }} textAlign='left'>Cash on delivery.  Please contact us if you require assistance or wish to make alternate arrangements.</Typography>
                    </Box>
                    <Box textAlign='right'><Button variant="contained" color="primary" sx={{ backgroundColor: '#D6763C' }} >place order</Button></Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Checkoutpage;
