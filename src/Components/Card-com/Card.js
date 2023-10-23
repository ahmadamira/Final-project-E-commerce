import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const Cardcom = (props) => {
  const { img, price, title, id } = props;

  const productLink = `/product/${id}`;

  return (
    <Link
      onClick={handleClick}
      to={productLink}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 295, height: 450, mb: 3 }}>
        <CardActionArea>
          <CardMedia component="img" height="342px" image={img} alt="T-shirt" />
          <CardContent>
            <Typography gutterBottom variant="h6" width="100%">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small" color="primary">
            ${price}
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default Cardcom;
