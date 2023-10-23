import React from "react";
import Service from "../Service-card/Service";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
  Grid,
} from "@mui/material";

const data = [
  {
    img: "/imgs/iconservice.png",
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on all orders above $100",
  },
  {
    img: "/imgs/iconser1.png",
    title: "SUPPORT 24/7",
    subtitle: "Our support team is there to help you for queries",
  },
  {
    img: "/imgs/iconser2.png",
    title: "30 DAYS RETURN",
    subtitle: "Simply return it within 30 days for an exchange.",
  },
  {
    img: "/imgs/iconser3.png",
    title: "100% SECURE",
    subtitle: "Our payments are secured with 256 bit encryption",
  },
];

const Servicegrid = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: "70px", mb: "70px" }}>
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            container
            justifyContent="center"
          >
            <Service
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Servicegrid;
