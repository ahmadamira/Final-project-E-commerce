import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Cardcom = () => {
    return (
        <Link to="/product" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 295, height: 450, mb: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image="/imgs/cardimg.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Plain White Shirt
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="small" color="primary">
                        $29.00
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
}

export default Cardcom;
