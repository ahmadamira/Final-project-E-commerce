import React from 'react';
import { Typography, Grid, Container, Box, Select, MenuItem, Button } from '@mui/material';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Tabscom from './Tabscom/Tabscom';

const Productpage = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2} mt={10} mb={20}>
                    <Grid item xs={12} sm={6}>

                        <Box display="flex" justifyContent="center">

                            <img src="/imgs/productt.png" alt="Product Photo" style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Box textAlign="left">
                            <Typography variant="h4" gutterBottom>
                                Plain White Shirt
                            </Typography>

                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} mt={4} />

                            <Typography variant="h5" gutterBottom mt={4}>
                                <span style={{ color: 'blue' }}> $59.00</span>
                            </Typography>

                            <Typography variant="body1" gutterBottom mt={4}>
                                A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.
                            </Typography>

                            <Box mt={4}>
                                <Typography variant="body1" gutterBottom>
                                    Size:
                                </Typography>
                                <Select fullWidth variant="outlined" sx={{ width: '50%' }}>
                                    <MenuItem value="small">Small</MenuItem>
                                    <MenuItem value="medium">Medium</MenuItem>
                                    <MenuItem value="large">Large</MenuItem>
                                    <MenuItem value="Xlarge">Xlarge</MenuItem>
                                </Select>
                            </Box>

                            <Box mt={4}>
                                <Button variant="contained" color="primary">
                                    Add to Cart
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Tabscom />
            </Container>

        </Box>

    );
};

export default Productpage;
