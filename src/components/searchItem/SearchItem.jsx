import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/28108350.webp?k=4968181437b02729099b3e8629e8e008fbfd61a0beb9732810a2c0f3161a5c87&o=&s=1"
        alt="img"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Clayton Hotel</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport Taxi</span>
        <span className="siSubTitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio + 1 bathroom + 21m full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="searchListCancel">
          You can cancel later, so lock in the grat price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$154</span>
          <span className="siTaxOp">Includes Taxes and Fees</span>
          <button className="siavail">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
