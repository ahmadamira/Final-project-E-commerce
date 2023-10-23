import React, { useContext } from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Tabscom from "./Tabscom/Tabscom";
import { useParams } from "react-router-dom";
import { Carttotalcontext } from "../../Context/Carttotalcontext";
import Productcontext from "../../Context/Productscontext";
import { useSnackbar } from "notistack";

const Productpage = () => {
  const { products } = useContext(Productcontext);
  const { id } = useParams();
  const element = products.find((item) => item.id === Number(id));
  const { enqueueSnackbar } = useSnackbar();

  const { cartTotal, addItem } = useContext(Carttotalcontext);

  const handleAddToCartin = () => {
    addItem(element);

    enqueueSnackbar("Item added to cart", { variant: "success" });
  };
  const handleAddToCart = () => {
    {
      cartTotal.find((item) => item.id === Number(id))
        ? enqueueSnackbar("You already have this item in your cart", {
            variant: "warning",
          })
        : handleAddToCartin();
    }
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={10} mb={20}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={element.images[1]}
                alt="Product Photo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left">
              <Typography variant="h4" gutterBottom>
                {element.title}
              </Typography>
              <Rating
                name="half-rating"
                defaultValue={element.rating}
                precision={0.5}
                mt={4}
              />
              <Typography variant="h5" gutterBottom mt={4}>
                <span style={{ color: "blue" }}> ${element.price}</span>
              </Typography>
              <Typography variant="body1" gutterBottom mt={4}>
                {element.description}
              </Typography>
              <Box mt={4}>
                <Typography variant="body1" gutterBottom>
                  Size:
                </Typography>
                <Select fullWidth variant="outlined" sx={{ width: "50%" }}>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="Xlarge">Xlarge</MenuItem>
                </Select>
              </Box>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Tabscom />
      </Container>
    </Box>
  );
};

export default Productpage;
