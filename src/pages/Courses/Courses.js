import React from "react";
import Card from "../../components/Card/Card";
import { SmallBanner } from "../../components/Banner";

const Courses = () => {
  return (
    <div>
      <SmallBanner title={"Our Online MCLE Courses"} />
      <div className="container">
        <h3 className="label ">Courses</h3>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Courses;
