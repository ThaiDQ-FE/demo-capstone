import React from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
function demo3() {
  const format = "h:mm a";

  const now = moment().hour(0).minute(0);
  const onChange = (value) => {
    console.log(value && value.format(format));
  };
  return (
    <div>
      <TimePicker
        showSecond={false}
        defaultValue={now}
        className="xxx"
        onChange={onChange}
        format={format}
        use12Hours
        inputReadOnly
      />
      ,
    </div>
  );
}
export default demo3;
