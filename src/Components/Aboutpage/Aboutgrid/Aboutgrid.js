import React from "react";
import { Container, Grid } from "@mui/material";
import Aboutcard from "../Aboutcard/Aboutcard";

const Aboutgrid = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ mt: "89px" }}>
          <Grid container justifyContent="center">
            <Aboutcard img={"/imgs/Aboutcard.png"} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ mt: "89px" }}>
          <Grid container justifyContent="center">
            <Aboutcard img={"/imgs/card2.png"} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Aboutgrid;
