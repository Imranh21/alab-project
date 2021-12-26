import React from "react";
import Header from "../../components/profile/Header";
import Image from "../../components/profile/Image";
import classes from "./Home.module.css";
import { user } from "../../data/user";

const Home = () => {
  const { name, des, location } = user;
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className={classes.contentBox}>
          <Image url="/images/user.jpg" />
          <p className={classes.location}>{location}</p>
          <h1 className={classes.nameTitle}>{name}</h1>
          <p className={classes.shortDes}>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
