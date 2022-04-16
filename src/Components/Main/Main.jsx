import React from "react";
import "./main.css";
import Cards from "./Cards/Cards";

import { useTheme } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import mountain from "../Images/mountain.jpg";

const Main = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 className="heading">Inspiration for your next trip </h1>
      <h3 className="subheading">
        Join unique interactivities led by one-of-a-kind hosts-all without
        leaving home.
      </h3>
      <div className="kum">
        <Card className="img-card">
          <CardMedia
            className="img"
            component="img"
            image="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/09/Living-Goddess-Kumari.jpg"
            alt="God"
          />
        </Card>
      </div>
      <h1 className="things-trip">Things to do on your trip</h1>

      <button className="button" size="large">
        Experiences
      </button>

      <h1 className="shop-heading">Shop Airbnb gift cards</h1>

      <button className="learnmore">Learn more</button>

      <Cards className="card" />
      <div className="img-div">
        <img className="img-question" src={mountain} alt="homestay" />
      </div>

      <h1 className="question-hosting">Question about hosting?</h1>
      <button className="ask">Ask a Superhost</button>
    </div>
  );
};

export default Main;
