import React from "react";
import "./footer.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <section className="left">© 2022 Airbnb, inc.</section>
        <section className="left"> Terms </section>
        <section className="left"> Sevices</section>
        <section className="left"> Sitemap</section>

        <LanguageOutlinedIcon className="right" />
        <section className="right1">English(US)</section>
        <section className="right1">$ USD</section>
        <FacebookIcon className="right-icon" />
        <TwitterIcon className="right-icon" />
        <InstagramIcon className="right-icon" />
      </div>
    </div>
  );
};

export default Footer;
