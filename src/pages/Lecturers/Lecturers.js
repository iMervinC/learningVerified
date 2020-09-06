import React, { Component } from "react";
import { Card } from "../../components/Card/Card";
import { SmallBanner } from "../../components/Banner";
import { LecturersData } from "../../data/LecturersData";

class Lecturers extends Component {
  render() {
    return (
      <div>
        <SmallBanner title={"Our Lecturers"} />
        <div className="margin-bottom"></div>
        <div className="container">
          <div className="row">
            {LecturersData.map((item, index) => {
              return (
                <Card
                  key={index}
                  body={item.name}
                  footer={item.position}
                  imgLink={item.imgUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Lecturers;
