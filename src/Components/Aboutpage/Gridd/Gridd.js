import React from "react";
import { Container, Grid } from "@mui/material";
import Testimcard from "../Testimocard/Testimocard";
const data = [
  {
    img: "/imgs/testm.png",
    descreption:
      "Once we ordered some accessories items and we got the products delivered in our doorstep.",
    pername: "Stacy",
  },
  {
    img: "/imgs/testm1.png",
    descreption:
      "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
    pername: "Tiffany",
  },
  {
    img: "/imgs/testem2.png",
    descreption:
      "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
    pername: "James",
  },
];
const Gridd = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ rowGap: 7, mb: "100px" }}
          >
            {data.map((item, data) => (
              <Grid item key={data} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container justifyContent="center">
                  <Testimcard
                    descreption={item.descreption}
                    pername={item.pername}
                    img={item.img}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gridd;
