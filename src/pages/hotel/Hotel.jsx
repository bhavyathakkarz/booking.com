import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const [slideNo, setSlideNo] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267164920.jpg?k=1875a9720d0f1018d625ebed01c7d209c689bc3a8c50b23842dd62cfcbbf7e5b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269991354.jpg?k=115c9b31dd102c807019e4a7eb9b53f4a4f371481e305576856dada00862733b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321438491.jpg?k=bda5dc3d6452d05aeeffb3d0d5a22aa5b128bedc079ca831eb35879c0ce5f1c2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321438445.jpg?k=086dfbf849cbdebffad3bae586c766a8f8eb76f64ee19638a482e0487d917496&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268858705.jpg?k=c63f631f5f8c6948b45d81844cd37dca6b8d4cfc1ec426b4595647da714f2cd4&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268858711.jpg?k=461739f5d898252de018e2c03440ff2a18e7b2f89c794c515b651d8b8707ed2f&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNo(i);
    setOpen(true);
  };

  const handleMove = (move) => {
    let newSlide;
    if (move === "l") {
      newSlide = slideNo === 0 ? 5 : slideNo - 1;
    } else {
      newSlide = slideNo === 5 ? 0 : slideNo + 1;
    }
    setSlideNo(newSlide);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="closeSlider"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNo].src} className="sliderImg" alt="htl" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location = 500m from center
          </span>
          <span className="hotelPrice">
            Book a stay over $114 at this propert and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((pic, i) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    src={pic.src}
                    alt="hotel"
                    className="hotelImg"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1> Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accomodations with air conditioning and
                free Wifi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen Tv,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Khrakow-Balice. 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
