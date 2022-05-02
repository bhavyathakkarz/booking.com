import React from "react";
import "./homeList.css";

const HomeList = () => {
  return (
    <div className="homeList">
      <div className="homeListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/34405073.webp?k=8ddc5dfb562077f999427ce13fa59ef7de13fcb4bee37b7a4a3acc7ac7830e9a&o=&s=1"
          className="homeListImg"
        />
        <span className="homeListName">Sugar Loft Apartment</span>
        <span className="homeListCity">Madrid</span>
        <span className="homeListPrice">Starting from $120</span>
        <div className="homeListRating">
          <button className="rateBtn">8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="homeListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/18464259.webp?k=7237deed7ed4b49d4c6e29bf2bc4133cf9931c21a1a6508d53cfa70c25b4f0bd&o=&s=1"
          className="homeListImg"
        />
        <span className="homeListName">Villa Rock</span>
        <span className="homeListCity">Barcelona</span>
        <span className="homeListPrice">Starting from $150</span>
        <div className="homeListRating">
          <button className="rateBtn">9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="homeListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/81184106.webp?k=d85cbd78409f689f0938cd81bb3a7577c5572dde8c077fe71a7155aa92ac80ca&o=&s=1"
          className="homeListImg"
        />
        <span className="homeListName">Acta Voraport</span>
        <span className="homeListCity">Rio de Janeiro</span>
        <span className="homeListPrice">Starting from $90</span>
        <div className="homeListRating">
          <button className="rateBtn">7.2</button>
          <span>Good</span>
        </div>
      </div>
      <div className="homeListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/60739426.webp?k=a5265c90cd5ad10939331c8b557ce7cfe0f099189ccc95effefa7c0714be7bb2&o=&s=1"
          className="homeListImg"
        />
        <span className="homeListName">Arena Leme Hotel</span>
        <span className="homeListCity">Amsterdam</span>
        <span className="homeListPrice">Starting from $170</span>
        <div className="homeListRating">
          <button className="rateBtn">8.4</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
