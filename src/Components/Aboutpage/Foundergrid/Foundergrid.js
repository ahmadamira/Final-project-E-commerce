import React from 'react';
import { Container, Grid } from '@mui/material';
import Cardcom from '../../Card-com/Card';
import Foundercard from '../Foundercard/Foundercard';
const data = [
    {
        img: "/imgs/founder.png",
        pername: "HM Jawad"
    },
    {
        img: "/imgs/fonder1.png",
        pername: "Furqan Abid"
    },
    {
        img: "/imgs/founder2.png",
        pername: "Abdullah Ah"
    },
    {
        img: "/imgs/founder3.png",
        pername: "Abrar Khan"
    },

];
const Foundergrid = () => {
    const arr = [1, 2, 3, 4];

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
                {data.map((item, data) => (
                    <Grid item key={data} xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Grid container justifyContent="center">
                            <Foundercard pername={item.pername} img={item.img} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Foundergrid;
