import React from 'react';
import { Container, Grid } from '@mui/material';
import Cardcom from '../Card-com/Card';
import Abouthero from '../Aboutpage/Abouthero/Abouthero';
import { Box } from '@mui/system';
import Sec from '../Home-page/Sec/Sec';


const Productspage = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Box >
            <Abouthero img="/imgs/about.jpg" text="Shop Now" />
            <Sec title={"Discover Our Products"} />
            <Box sx={{ mb: '100px' }}>
                <Container maxWidth="lg">

                    <Grid container spacing={2} justifyContent="center">
                        {arr.map((data) => (
                            <Grid item key={data} xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Grid container justifyContent="center">
                                    <Cardcom />
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Productspage;
