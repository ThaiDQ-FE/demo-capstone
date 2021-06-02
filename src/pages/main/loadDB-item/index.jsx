import React from "react";
import { withRouter } from "react-router-dom";

function LoadDBItem({ demo, history }) {
  const handleClick = () => {
    history.push(`/loadDBDetail/${demo.id}`);
  };
  return <p onClick={handleClick}>{demo.contentTesting}</p>;
}
export default withRouter(LoadDBItem);
