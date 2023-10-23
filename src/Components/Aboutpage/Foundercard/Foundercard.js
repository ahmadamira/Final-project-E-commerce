import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Foundercard(props) {
  const { pername, img } = props;
  return (
    <Card sx={{ maxWidth: 345, height: "364px" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="founder img" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="left"
          >
            {pername}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
