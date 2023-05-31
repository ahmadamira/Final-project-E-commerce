import React from 'react';
import { Container, Grid } from '@mui/material';
import Cardcom from '../../Card-com/Card';
import { useContext } from 'react';
import Productcontext from '../../../Context/Productscontext';
const Topseller = () => {
    const { products } = useContext(Productcontext)

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
                {products.slice(10, 14).map((data) => (
                    <Grid item key={data} xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Grid container justifyContent="center">
                            <Cardcom img={data.images[0]} title={data.totalInfo.title} price={data.totalInfo.price} id={data.id} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Topseller;
