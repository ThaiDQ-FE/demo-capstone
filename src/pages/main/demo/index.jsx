import React, { useState } from "react";
import MultipleDatesPicker from "@randex/material-ui-multiple-dates-picker";
import { Button } from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
function Demoooo() {
  const [value, setValue] = useState();
  console.log(value);
  const [dates, setDates] = useState("");
  const [click, setClick] = useState(false);
  const [arai, setarai] = useState([]);
  let a = [];
  const handleClick = () => {
    setValue("");
    console.log("x");
    // splitString();
    setClick(true);
  };
  console.log(dates);
  const [change, setChange] = useState();
  const splitString = () => {
    const strCopy = dates.split(",");
    console.log(strCopy);
    // let uni = [...new Set(strCopy)];
    // console.log(uni);
    return strCopy.map((date, index) => {
      console.log(date);
      return (
        <form
          onClick={() => {
            handleClickTime(date);
          }}
        >
          <DatePicker value={date} format="DD/MM/YYYY" readOnly />

          <Button variant="outlined" color="primary">
            add
          </Button>
          <br />
        </form>
      );
    });
  };
  const handleClickTime = (date) => {
    a.push(date + " " + change.hour + ":" + change.minute);
    console.log(date + " " + change.hour + ":" + change.minute);
    console.log(a);
    // setarai(a);
  };
  const handleCC = () => {
    setarai(a);
  };
  // console.log(arai);
  // console.log(value.month.number + "/" + value.year);
  const today = new Date();
  const tomorrow = new Date(today);
  return (
    <div className="App">
      <DatePicker
        value={value}
        // onChange={(array) => {
        //   //Array of Dateobjecs
        //   // console.log(array.join(","));
        //   setDates(array.join(","));
        //   console.log(a);
        // }}
        onChange={setValue}
        // multiple
        plugins={[
          // <DatePanel />,
          <TimePicker hideSeconds />,
        ]}
        format="DD/MM/YYYY"
        onClose={() => false}
        minDate={tomorrow.setDate(tomorrow.getDate() + 1)}
      />
      <Button onClick={handleClick} variant="outlined" color="primary">
        asdsad
      </Button>
      {dates.toString()}
      <br />
      <div className="ohmy" style={{ position: "absolute", bottom: 0 }}>
        {click === true ? splitString() : ""}
      </div>
      <div className="ds" style={{ position: "absolute", bottom: 0, right: 0 }}>
        <DatePicker
          disableDayPicker
          format="HH:mm"
          onChange={setChange}
          value={change}
          plugins={[<TimePicker />]}
        />
      </div>
      <div
        className="fd"
        style={{ position: "absolute", bottom: 36, right: 0 }}
      >
        {arai}
      </div>
      <div
        className="fdfd"
        style={{ position: "absolute", bottom: 0, right: 500 }}
      >
        <Button variant="outlined" color="primary" onClick={handleCC}>
          ok
        </Button>
      </div>
    </div>
  );
}
export default Demoooo;
