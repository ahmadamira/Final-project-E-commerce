import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '50%',
    height: '600px',
    [theme.breakpoints.down('sm')]: {
        height: '400px',
    },
    backgroundImage: 'url(/imgs/aboutcard.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#0000FF',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
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

const Aboutcard = () => {
    return (
        <StyledBox>
            <StyledButton variant="contained">buy now</StyledButton>
        </StyledBox>
    );
};

export default Aboutcard;
