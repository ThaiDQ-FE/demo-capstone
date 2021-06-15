import React, { useState } from "react";
import { Button } from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import AnalogClock from "analog-clock-react";
import "./style.scss";
function Demo2() {
  const [value, setValue] = useState();
  const [time, setTime] = useState();
  const [mang, setMang] = useState([]);
  const [chui, setChui] = useState(false);
  console.log(value);
  console.log(time);
  console.log(typeof mang);
  const clicked = () => {
    let dayTime;
    let monthTime;

    if (value.day < 10) {
      dayTime = "0" + value.day;
    } else {
      dayTime = value.day;
    }
    if (value.month < 10) {
      monthTime = "0" + value.month;
    } else {
      monthTime = value.month;
    }
    let resultDate = dayTime + "/" + monthTime + "/" + value.year;
    let resultTime = moment(time).format("hh:mm");
    let resultFinal = resultDate + " " + resultTime;
    console.log(resultFinal);
    // const found = find(function callbackFn(element));
    const found = mang.find((element) => element === resultFinal);
    if (found !== undefined) {
      setChui(true);
    } else {
      setChui(false);
      mang.push(resultFinal);
    }
    console.log(found);
    setTime(undefined);
  };
  console.log(mang);
  const handleDelete = (index) => {
    let tempMang = [...mang];
    console.log(tempMang);
    tempMang.splice(index, 1);
    setMang(tempMang);
  };
  const renderSpan = () => {
    return mang.map((item, index) => {
      return (
        <span className="spanTest" key={index}>
          {item}
          <Button onClick={() => handleDelete(index)}>X</Button>
        </span>
      );
    });
  };
  let a = moment(time).format("hh");
  let b = moment(time).format("mm");
  console.log(moment(time).format("hh"));
  let options = {
    useCustomTime: true, // set this to true
    width: "200px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#fff",
    handColors: {
      second: "transparent",
      minute: "#757575",
      hour: "#000",
    },
    seconds: 0, // set your
    minutes: b, // own
    hours: a, // time here.
  };
  return (
    <div>
      <ul>{renderSpan()}</ul>
      <br />
      {chui === true ? <span>dmm thằng đó đã có</span> : ""}
      <br />
      <DatePicker
        value={value}
        onChange={setValue}
        format="DD/MM/YYYY"
        onClose={() => false}
        plugins={[
          <div>
            {/* <AnalogClock {...options} />, */}
            <TimePicker
              value={time}
              showSecond={false}
              use24Hours
              minuteStep={30}
              onChange={setTime}
            />
          </div>,
        ]}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={clicked}
          disabled={time === undefined}
        >
          abcc
        </Button>
      </DatePicker>
    </div>
  );
}
export default Demo2;
