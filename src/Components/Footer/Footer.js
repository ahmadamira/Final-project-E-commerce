import React from 'react';
import { Container, Grid, Typography, Box, Divider, TextField, InputAdornment, IconButton } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { RiVisaLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#FBFBFB", padding: "2rem 0" }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography textAlign="left" variant="h6" sx={{ mb: 2 }}> Company info</Typography>
                        <Typography textAlign="left"> About Us</Typography>
                        <Typography textAlign="left">Latest Posts</Typography>
                        <Typography textAlign="left">Contact Us</Typography>
                        <Typography textAlign="left" sx={{ mb: 2 }}>Shop</Typography>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Typography textAlign="left" variant="h6" sx={{ mb: 2 }}>Help links</Typography>
                        <Typography textAlign="left">Tracking</Typography>
                        <Typography textAlign="left">Order Status</Typography>
                        <Typography textAlign="left">Delivery</Typography>
                        <Typography textAlign="left">Shipping Info</Typography>
                        <Typography textAlign="left" sx={{ mb: 2 }}>FAQ</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} textAlign="left">
                        <Typography variant="h6" textAlign="left" sx={{ mb: 2 }}>Useful links</Typography>
                        <Typography textAlign="left">Special Offers</Typography>
                        <Typography textAlign="left">Gift Cards</Typography>
                        <Typography textAlign="left">Advetising</Typography>
                        <Typography textAlign="left" sx={{ mb: 2 }}>Terms of Use</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} textAlign="left">
                        <Typography textAlign="left" variant="h6" sx={{ mb: 2 }}>Get in the know</Typography>

                        <TextField
                            label="Enter email"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    borderBottom: '1px solid black',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <ArrowForwardIosOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />




                    </Grid>
                </Grid>
                <Divider />
                <Box display="flex" flexDirection="row">
                    <Box mt={4} textAlign="left">
                        <Typography variant="body2" color="textSecondary">
                            © 2020 NorthStar eCommerce
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Privacy Policy
                            Terms & Conditions

                        </Typography>


                    </Box>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;
