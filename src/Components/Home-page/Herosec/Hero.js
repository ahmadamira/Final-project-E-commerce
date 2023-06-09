import React from "react";
import { Box, Typography, Button, useTheme, Container } from "@mui/material";
import classes from "./Hero.module.css";
import { Link } from 'react-router-dom';
const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      display="inline-block"
      position="relative"
      sx={{ width: "100%" }}
      className={classes.hero}
    >
      {/* <img
        src="/imgs/img_1.png"
        alt="Hero Image"
        style={{ width: "100%", height: "auto" }}
      /> */}
      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            right: { xs: "50%", md: "30%", lg: "10%" },
            top: "50%",
            transform: {
              xs: "translate(50%, -50%)",
              lg: "translate(0%, -50%)",
            },
            textAlign: "center",
            width: { xs: "100%", md: "initial" },
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{
              mb: 5,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            STYLIST PICKS BEAT <br></br> THE HEAT
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/products"

            sx={{
              backgroundColor: "transparent",
              border: "3px solid white",
              color: "white",
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Container >
    </Box >
  );
};

export default Hero;
