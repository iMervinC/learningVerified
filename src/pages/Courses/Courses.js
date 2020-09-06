import React from "react";
import { Card } from "../../components/Card/Card";
import { CoursesData } from "../../data/CoursesData";
import { SmallBanner } from "../../components/Banner";

const Courses = () => {
  return (
    <div>
      <SmallBanner title={"Our Online MCLE Courses"} />
      <div className="container">
        <h3 className="label ">Courses</h3>
        <div className="row">
          {CoursesData.map((item, index) => {
            return (
              <Card
                key={index}
                body={item.title}
                footer={item.by}
                imgLink={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
