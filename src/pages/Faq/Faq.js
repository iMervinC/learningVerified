import React, { Component } from "react";
import { TextBanner } from "../../components/Banner";
import { FaqCard } from "../../components/Card/Card";

class Faq extends Component {
  render() {
    return (
      <div className="lightBlueBg">
        <TextBanner title={"Frequently Asked Questions"} />
        <div className="margin-bottom"></div>
        <div className="container">
          <div className="row">
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
