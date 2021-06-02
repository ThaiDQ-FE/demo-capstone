import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDemoDetail } from "../../../store/action/demo.action";
import { withRouter } from "react-router-dom";
function LoadDBDetail(props) {
  const dispatch = useDispatch();
  const { demoDetail } = useSelector((state) => state.demo);
  const renderLDemoDetail = () => {
    const sdemoDetail = Array.from(demoDetail);
    return sdemoDetail.map((demo, index) => {
      let content = `${demo.contentInformation}`;
      console.log(content);
      let a = demo.contentInformation;
      let b = document.getElementById("test");
      console.log(b);
      return <>{b != null ? (b.innerHTML = content) : ""}</>;
    });
  };
  useEffect(() => {
    let {
      params: { id },
    } = props.match;
    dispatch(getDemoDetail(id));
  }, []);
  return <div id="test" onLoad={renderLDemoDetail()}></div>;
}
export default withRouter(LoadDBDetail);
