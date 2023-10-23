import React from "react";
import { Container, Grid } from "@mui/material";
import Cardcom from "../../Card-com/Card";
import { useContext } from "react";
import Productcontext from "../../../Context/Productscontext";

const Newarrivals = () => {
  const { products } = useContext(Productcontext);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        {products.slice(1, 9).map((data) => (
          <Grid item key={data} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Grid container justifyContent="center">
              <Cardcom
                img={data.images[0]}
                title={data.title}
                price={data.price}
                id={data.id}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Newarrivals;
