import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardAppComponent = ({ productsData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={productsData.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productsData.trademark}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productsData.producto}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productsData.year} | {productsData.product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {productsData.price} | stock: {productsData.stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productsData.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAppComponent;