import React, { useState, useCallback } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
function Booking() {
  const listTime = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
  const showList = () => {
    return listTime.map((time, index) => {
      return <h4>{time}</h4>;
    });
  };

  console.log(listTime);
  const [value, onChange] = useState(new Date());
  console.log(value.getDay());

  const tileDisabled = ({ date }) => {
    if (date.getDay() === 0 || date.getDay() === 6) return date;
  };
  return (
    <div className="booking__wrapper">
      {showList()}
      <div className="booking__container">
        <div className="booking__content">content img</div>
        <div className="booking__dateTime">
          <h2 className="booking__title">Select a Date & Time</h2>
          <div className="booking__item">
            <div className="booking__date">
              <Calendar
                onChange={onChange}
                value={value}
                tileDisabled={tileDisabled}
              />
            </div>
            <div className="booking__time">
              <div className="booking__datePicker">
                {value.toLocaleString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Booking;
