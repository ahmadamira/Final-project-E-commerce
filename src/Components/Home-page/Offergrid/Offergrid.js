import React from 'react';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Offer from '../Offers-card/Offer';

const Titletypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '48px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
        lineHeight: '36px',

    },
}));

const Subtitletypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '130%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '24px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        lineHeight: '24px',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    background: '#FFFFFF',
    color: '#0000FF',
    marginTop: '32px',

    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',

    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',

    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '18px',

    },
}));
const handleClick = () => {

    window.scrollTo(0, 0);
};
const Offergrid = () => {
    const arr = [1, 2];

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7} >
                    <Box sx={{ height: '429px', backgroundColor: 'black', position: 'relative' }}>
                        <Box sx={{ width: '80%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }} >
                            <Titletypo>peace of mind</Titletypo>
                            <Subtitletypo>
                                A one-stop platform for all your fashion needs,<br></br> hassle-free. Buy with a peace of mind.
                            </Subtitletypo>
                            <StyledButton onClick={handleClick} variant="contained"
                                component={Link}
                                to="/products">buy now</StyledButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Box sx={{ height: '429px', backgroundColor: 'black', position: 'relative' }}>
                        <Box sx={{ width: '80%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }} >
                            <Titletypo>Buy 2 Get 1 Free</Titletypo>
                            <Subtitletypo>
                                End of season sale. Buy any 2 items of your choice  and get 1 free.
                            </Subtitletypo>
                            <StyledButton onClick={handleClick} variant="contained"
                                component={Link}
                                to="/products">buy now</StyledButton>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Offergrid;
