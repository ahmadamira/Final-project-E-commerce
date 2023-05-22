import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '348px',
    background: `url('/imgs/about.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const TextContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: '20px',
    left: '20px',
}));

const Title = styled(Typography)(({ theme }) => ({

    width: '100%',

    top: '315px',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '48px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
}));
const Abouthero = () => {
    return (
        <HeroSection>
            <TextContainer>
                <Title>About Northstar</Title>
            </TextContainer>
        </HeroSection>
    );
};

export default Abouthero;
