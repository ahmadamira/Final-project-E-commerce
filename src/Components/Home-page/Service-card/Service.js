import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",

  height: "71px",
  width: "233px",
});
const Titletypo = styled(Typography)({
  fontFamily: "Baloo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "25px",
  marginLeft: "22px",
});
const Subtitletypo = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19.2px",
  display: "flex",
  alignItems: "center",
  color: "#555555",
  paddingLeft: "52PX",
  textAlign: "left",
  paddingTop: "8px",
});

const Service = (props) => {
  const { title, subtitle, img } = props;
  return (
    <div>
      <StyledBox>
        <Box display="flex" flexDirection="row">
          <img src={img}></img>
          <Titletypo>{title}</Titletypo>
        </Box>
        <Subtitletypo>{subtitle}</Subtitletypo>
      </StyledBox>
    </div>
  );
};

export default Service;
