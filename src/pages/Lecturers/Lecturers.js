import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { SmallBanner } from "../../components/Banner";

class Lecturers extends Component {
  render() {
    return (
      <div>
        <SmallBanner title={"Our Lecturers"} />
        <div className="margin-bottom"></div>
        <div className="container">
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
  }
}

export default Lecturers;
