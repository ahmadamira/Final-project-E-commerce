import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Herosec/Hero";
import Newarrivals from "./New-arrivals-grid/Newarrivals";
import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";
import Servicegrid from "./Service-grid/Servicegrid";
import Offergrid from "./Offergrid/Offergrid";
import Topseller from "./Topseller/Topseller";
import Sec from "./Sec/Sec";

const Stbox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "48px",
  marginBottom: "48px",
}));
const handleClick = () => {
  window.scrollTo(0, 0);
};
const Home = () => {
  return (
    <div>
      <Hero />
      <Sec
        title={"Discover NEW Arrivals"}
        subtitle={"Recently added shirts!"}
      />
      <Newarrivals />
      <Servicegrid />
      <Offergrid />
      <Sec title={"Top Sellers"} subtitle={"Browse our top-selling products"} />
      <Topseller />
      <Stbox>
        <Button
          onClick={handleClick}
          variant="contained"
          component={Link}
          to="/products"
          sx={{
            backgroundColor: "#024E82",
            color: "#FFFFFF",
          }}
        >
          SHOP NOW
        </Button>
      </Stbox>
    </div>
  );
};

export default Home;
