import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOption">
                <div className="listOptionItem">
                  <span className="listOptionsText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" min={1} className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionsText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" min={1} className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionsText">Adult</span>
                  <input
                    type="number"
                    placeholder={options.adult}
                    className="listOptionInput"
                    min={1}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionsText">Children</span>
                  <input
                    type="number"
                    placeholder={options.children}
                    className="listOptionInput"
                    min={0}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionsText">Room</span>
                  <input
                    type="number"
                    placeholder={options.room}
                    className="listOptionInput"
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
