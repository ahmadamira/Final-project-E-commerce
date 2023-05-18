import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Styledtypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Baloo',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '36px',
    color: '#555555',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        lineHeight: '24px',
    },
}));

const Testimcard = () => {
    return (
        <Box
            display="flex"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            maxWidth="921px"
            p={2}
            height="216px"
        >
            <Box
                mr={{ xs: 0, md: 2 }}
                maxWidth={{ sm: '100%', md: '200px', lg: '210px' }}


            >
                <img src="/imgs/testm.png" alt="Rounded Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
            <Box textAlign="left">
                <img src="/imgs/page 1.png" />
                <Styledtypo variant="body1" sx={{ mt: '12px', mb: '32px' }}>
                    Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.
                </Styledtypo>
                <Typography variant="h6">Stacy</Typography>
            </Box>
        </Box>
    );
};

export default Testimcard;
