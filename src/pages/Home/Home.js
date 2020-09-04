import React from "react";
import "./Home.scss";
import { Banner } from "../../components/Banner";
import Card from "../../components/Card/Card";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <Banner
        title={"Welcome to Learning Verified"}
        tagline={"Video On Demand MCLE"}
      />
      <div className="container">
        <h3 className="label ">Courses</h3>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="center">
          <Button>See More</Button>
        </div>
        <h3 className="label ">Lecturers</h3>
        <div className="row ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="center margin-bottom">
          <Button>See More</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
