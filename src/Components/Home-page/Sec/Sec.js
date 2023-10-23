import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const Stbox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "48px",
  marginBottom: "48px",
}));
const Titlehome = styled(Typography)(({ theme }) => ({
  height: "48px",

  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  textAlign: "center",
  color: "#1D1D1D",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
}));

const Subtitlehome = styled(Typography)(({ theme }) => ({
  height: "48px",
  left: "586px",

  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "48px",
  textAlign: "center",
  color: "#555555",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "24px",
  },
}));
const Sec = (props) => {
  const { title, subtitle } = props;
  return (
    <Stbox>
      <Titlehome>{title}</Titlehome>
      <Subtitlehome>{subtitle}</Subtitlehome>
    </Stbox>
  );
};

export default Sec;
