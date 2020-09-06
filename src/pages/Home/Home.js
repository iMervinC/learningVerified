import React, { useContext } from "react";
import "./Home.scss";
import { Banner } from "../../components/Banner";
import { Card, LecturerCard } from "../../components/Card/Card";
import Button from "../../components/Button";
import { CoursesData } from "../../data/CoursesData";
import { LecturersData } from "../../data/LecturersData";
import { Link } from "react-router-dom";
import { Context } from "../../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(Context);

  return (
    <>
      <Banner
        title={"Welcome to Learning Verified"}
        tagline={"Video On Demand MCLE"}
      />
      <div className="container">
        <h3 className="label ">Courses</h3>
        <div className="row">
          {CoursesData.slice(0, 4).map((course, index) => {
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
        <div className="center">
          <Link to="/courses">
            <Button>See More</Button>
          </Link>
        </div>
        <h3 className="label ">Lecturers</h3>
        <div className="row ">
          {LecturersData.slice(0, 4).map((item, index) => {
            return (
              <LecturerCard
                key={index}
                body={item.name}
                footer={item.position}
                imgLink={item.imgUrl}
              />
            );
          })}
        </div>
        <div className="center margin-bottom">
          <Link to="/lecturers">
            <Button>See More</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
