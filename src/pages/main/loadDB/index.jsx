import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDemoList } from "../../../store/action/demo.action";
import LoadDBItem from "../loadDB-item";
function DemoLoadDB() {
  const dispatch = useDispatch();
  const { demoList } = useSelector((state) => state.demo);
  const renderListDemo = () => {
    return demoList.map((demo, index) => {
      console.log(demo);
      return <LoadDBItem demo={demo} />;
    });
  };
  useEffect(function () {
    dispatch(getDemoList());
  }, []);
  return <div>{renderListDemo()}</div>;
}
export default DemoLoadDB;
