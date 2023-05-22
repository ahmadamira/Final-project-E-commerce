import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const HeroSection = styled(Box)(({ theme, backgroundImage }) => ({
    position: 'relative',
    height: '348px',
    background: `url('${backgroundImage}')`,
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

const Abouthero = ({ img, text }) => {
    return (
        <HeroSection backgroundImage={img}>
            <TextContainer>
                <Title>{text}</Title>
            </TextContainer>
        </HeroSection>
    );
};

export default Abouthero;
