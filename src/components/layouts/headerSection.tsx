"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material"; // <-- you missed this closing }
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SellIcon from "@mui/icons-material/Sell";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BusinessIcon from "@mui/icons-material/Business";

export default function HeaderNavs() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography
        sx={{
          color: "#4D869C",
          fontWeight: 500,
          fontFamily: "Geist",
          fontSize: "20px",
          marginTop: "40px",
        }}
      >
        Michaela.L
      </Typography>
    </Box>
  );
}
