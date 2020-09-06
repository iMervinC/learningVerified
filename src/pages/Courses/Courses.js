import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { CoursesData } from "../../data/CoursesData";
import { SmallBanner } from "../../components/Banner";
import { Context } from "../../context/CartContext";

const Courses = () => {
  const { addToCart } = useContext(Context);

  return (
    <div>
      <SmallBanner title={"Our Online MCLE Courses"} />
      <div className="container">
        <h3 className="label ">Courses</h3>
        <div className="row">
          {CoursesData.map((course, index) => {
            return (
              <Card
                key={index}
                body={course.title}
                footer={course.by}
                imgLink={course.imgUrl}
                onClick={() => addToCart(course)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
