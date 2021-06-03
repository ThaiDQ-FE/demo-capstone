import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import { NavLink } from "react-router-dom";
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
  const [value, onChange] = useState("");
  const [time, setTime] = useState("");
  const [click, setClick] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const handleOnclick = (index) => {
    setClick(index);
    setConfirm(false);
  };
  const handleOnConfirm = () => {
    setConfirm(true);
  };
  console.log(confirm);
  const showList = () => {
    return listTime.map((time, index) => {
      return (
        <>
          <Button
            className={
              click === index ? "booking__buttonClick" : "booking__button"
            }
            variant="outlined"
            color="primary"
            key={index}
            onClick={() => handleOnclick(index)}
          >
            <span className="booking__span">{time}</span>
          </Button>
          {click === index ? (
            <Button
              className="booking__confirm"
              variant="outlined"
              onClick={handleOnConfirm}
            >
              <span className="booking__confirmBtn">Confirm</span>
            </Button>
          ) : (
            ""
          )}
        </>
      );
    });
  };
  const tileDisabled = ({ date }) => {
    if (date.getDay() === 0 || date.getDay() === 6) return date;
  };
  return (
    <div className="booking__wrapper">
      <div
        className={
          value === "" ? "booking__containerDefault" : "booking__container"
        }
      >
        <NavLink to="/">
          <div className="booking__back">
            <img
              src="https://image.flaticon.com/icons/png/512/271/271218.png"
              alt=""
            />
          </div>
        </NavLink>
        <div
          className={
            value === "" ? "booking__contentDefault" : "booking__content"
          }
        >
          <div className="booking__img">
            <img
              src="https://chiase24.com/wp-content/uploads/2020/01/Tong-hop-nhung-hinh-anh-Icon-dang-yeu-cute-nhat-30.gif"
              alt=""
            />
          </div>
          <div className="booking__avata">
            <hr className="booking__hr" />
            <img
              src="https://i.pinimg.com/474x/b3/64/20/b36420d81bbbd18b8e6cd37a79c90905.jpg"
              alt=""
            />
          </div>
          <div className="booking__text">
            <p className="booking__name">Đặng Quốc Thái</p>
            <h4 className="booking__result">Meeting with the Admin</h4>
            <p className="booking__clock">
              <img
                src="https://image.flaticon.com/icons/png/512/1827/1827379.png"
                alt=""
              />{" "}
              30 min
            </p>
            <p className="booking__end">
              Thanks for booking a call. We are very pleased to welcome you
            </p>
          </div>
        </div>

        {confirm === false ? (
          <div
            className={
              value === "" ? "booking__dateTimeDefault" : "booking__dateTime"
            }
          >
            <h2 className="booking__title">Select a Date & Time</h2>
            <div
              className={
                value === "" ? "booking__itemDefault" : "booking__item"
              }
            >
              <div
                className={
                  value === "" ? "booking__dateDefault" : "booking__date"
                }
              >
                <Calendar
                  onChange={onChange}
                  value={value}
                  tileDisabled={tileDisabled}
                />
              </div>
              {value !== "" ? (
                <div className="booking__time">
                  <div className="booking__datePicker">
                    {value.toLocaleString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </div>
                  <div className="booking__showList">{showList()}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="booking__form">form</div>
        )}
      </div>
    </div>
  );
}
export default Booking;
