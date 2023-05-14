import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

const Hero = () => {
    const theme = useTheme();
    return (
        <Box display="inline-block" position="relative">
            <img src="/imgs/img_1.png" alt="Hero Image" style={{ width: '100%', height: 'auto' }} />
            <Box
                position="absolute"
                top="30%"
                right="10%"
                transform="translate(-50%, -50%)"
                textAlign="center"

            >
                <Typography variant="h3" color="white" sx={{
                    mb: 5,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem',
                    },
                }}> STYLIST PICKS BEAT <br></br> THE HEAT</Typography>
                <Button
                    variant="contained"

                    sx={{
                        backgroundColor: 'transparent',
                        border: '3px solid white',
                        color: 'white',

                    }}
                >
                    SHOP NOW
                </Button>
            </Box>
        </Box>
    );
}

export default Hero;
