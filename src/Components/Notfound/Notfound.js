
import React from 'react';
import { Typography, Box } from '@mui/material';

const Notfound = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Typography variant="h1" fontWeight="bold" align="center">
                404 Not Found
            </Typography>
            <Typography variant="body1" align="center">
                Oops! The page you're looking for does not exist.
            </Typography>
        </Box>
    );
};

export default Notfound;
