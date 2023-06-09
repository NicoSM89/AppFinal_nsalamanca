import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuProducts from "../MenuProducts/MenuProducts";
import { Link } from "react-router-dom";
import "./ResponsiveNavigation.css";

import { ItemsContext } from "../../Context/ItemsContext";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const ResponsiveNavigation = () => {
  const [items] = useContext(ItemsContext);

  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Photo Products Store
          </Link>
          <MenuProducts />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <ShoppingCartIcon />
            <i className="fa-solid fa-cart-shopping"></i>
            {items.length}
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNavigation;
