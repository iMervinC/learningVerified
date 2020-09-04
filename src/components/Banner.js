import React from "react";
import "../pages/Home/Home.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title">{props.title}</h1>
          <p className="banner-tagline">{props.tagline}</p>
        </div>
      </div>
    </div>
  );
};

const SmallBanner = (props) => {
  return (
    <div className="banner banner-small">
      <div className="container banner-content">
        <h1 className="banner-title">{props.title}</h1>
      </div>
    </div>
  );
};

const TextBanner = (props) => {
  return (
    <div className="banner banner-text">
      <div className="container banner-content">
        <h1 className="banner-title">{props.title}</h1>
      </div>
    </div>
  );
};
export { Banner, SmallBanner, TextBanner };
