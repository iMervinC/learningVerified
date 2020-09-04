import React, { Component } from "react";
import { TextBanner } from "../../components/Banner";
import Card from "../../components/Card/Card";

class Faq extends Component {
  render() {
    return (
      <div className="lightBlueBg">
        <TextBanner title={"Frequently Asked Questions"} />
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

export default Faq;
