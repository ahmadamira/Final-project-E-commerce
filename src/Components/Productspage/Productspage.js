import React from 'react';
import { Container, Grid } from '@mui/material';
import Cardcom from '../Card-com/Card';
import Abouthero from '../Aboutpage/Abouthero/Abouthero';
import { Box } from '@mui/system';
import Sec from '../Home-page/Sec/Sec';
import { useContext } from 'react';
import Productcontext from '../../Context/Productscontext';
import { useParams } from 'react-router-dom';
const Productspage = () => {
    const { id } = useParams();
    const { products } = useContext(Productcontext)

    return (
        <Box>
            <Abouthero img="/imgs/about.jpg" text="Shop Now" />
            <Sec title={"Discover Our Products"} />
            <Box sx={{ mb: '100px' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} justifyContent="center">
                        {products.map((data) => (
                            <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Grid container justifyContent="center">
                                    <Cardcom img={data.images[0]} title={data.totalInfo.title} price={data.totalInfo.price} id={data.id} />
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
