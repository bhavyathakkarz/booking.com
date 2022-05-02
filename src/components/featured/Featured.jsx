import React from "react";
import "./featured.css";
import manchster from "../../images/manchster.jpg";
import leeds from "../../images/leeds.jpg";
import birmigham from "../../images/birmigham.jpg";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={manchster} alt="manchster" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Manchster</h1>
          <h2>1,087 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={leeds} alt="leeds" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Leeds</h1>
          <h2>382 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={birmigham} alt="birmigham" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Birmingham</h1>
          <h2>1,007 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={manchster} alt="manchster" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Manchster</h1>
          <h2>1,087 properties</h2>
        </div>
      </div>
      {/* <div className="featuredItem">
        <img src={manchster} alt="manchster" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Manchster</h1>
          <h2>1,087 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={manchster} alt="manchster" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Manchster</h1>
          <h2>1,087 properties</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
