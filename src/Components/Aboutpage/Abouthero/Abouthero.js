import React from "react";
import { Container, styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const HeroSection = styled(Box)(({ theme, backgroundImage }) => ({
  height: "348px",
  background: `url('${backgroundImage}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "20px",
  left: "20px",
}));

const Title = styled(Typography)(({ theme }) => ({
  width: "100%",
  top: "315px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: "48px",
  textTransform: "uppercase",
  color: "#FFFFFF",
}));

const Abouthero = ({ img, text }) => {
  return (
    <HeroSection backgroundImage={img}>
      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <TextContainer>
          <Title>{text}</Title>
        </TextContainer>
      </Container>
    </HeroSection>
  );
};

export default Abouthero;
