import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDemoDetail } from "../../../store/action/demo.action";

class LoadDBDetail2 extends Component {
  saySomething() {
    const sdemoDetail = Array.from(this.props.demoDetail);
    return sdemoDetail.map((demo, index) => {
      let a = demo.contentInformation;
      return <>{(document.getElementById("test").innerHTML = a)}</>;
    });
  }
  render() {
    return <div id="test">{this.saySomething()}</div>;
  }
  componentDidMount() {
    const {
      params: { id },
    } = this.props.match;
    this.props.dispatch(getDemoDetail(id));
  }
}

const mapStateToProps = (state) => {
  return {
    demoDetail: state.demo.demoDetail,
  };
};
export default connect(mapStateToProps)(withRouter(LoadDBDetail2));
