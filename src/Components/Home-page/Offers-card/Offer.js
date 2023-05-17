import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button, useTheme, Container } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({

    alignContent: 'center',
    background: '#000000',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto',
        padding: '24px',
    },
}));

const Titletypo = styled(Typography)(({ theme }) => ({
    paddingTop: '15%',
    top: '10%',
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
        paddingTop: '10%',
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
    marginTop: "32px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '8px 16px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        padding: '10px 20px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
        padding: '12px 24px',
    },
}));

const Offer = () => {

    return (
        <div>

            <StyledBox>

                <Titletypo>peace of mind</Titletypo>
                <Subtitletypo> A one-stop platform for all your fashion needs,<br></br> hassle-free. Buy with a peace of mind.</Subtitletypo>
                <StyledButton>buy now</StyledButton>
            </StyledBox>

        </div>
    );
}

export default Offer;
