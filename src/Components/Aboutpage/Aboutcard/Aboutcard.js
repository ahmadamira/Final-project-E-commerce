import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme, backgroundImage }) => ({
    position: 'relative',
    width: '100%',
    height: '600px',
    [theme.breakpoints.down('sm')]: {
        height: '400px',
    },
    backgroundImage: `url(${backgroundImage})`,
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
const handleClick = () => {

    window.scrollTo(0, 0);
};
const Aboutcard = ({ img }) => {
    return (
        <StyledBox backgroundImage={img}>
            <StyledButton onClick={handleClick} variant="contained"
                component={Link}
                to="/products">buy now</StyledButton>
        </StyledBox>
    );
};

export default Aboutcard;
