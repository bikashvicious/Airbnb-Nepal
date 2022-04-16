import React from "react";
import "./navbar.css";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import airnbnb from "../Images/airbnb.png";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <img src={airnbnb} className="logo" />
        <TextField
          id="outlined-basic"
          label="Start your search"
          variant="outlined"
          className="search-field"
        />
        <div className="circle-search">
          <SearchOutlinedIcon
            className="search-icon"
            style={{ fontSize: 20 }}
          />
        </div>
        <div className="host">Become a host</div>
        <LanguageIcon className="language" />

        <div className="toggle">
          <MenuIcon className="menu" />
          <AccountCircleIcon className="account" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
