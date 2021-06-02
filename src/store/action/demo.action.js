import axios from "axios";
import {
  GET_DEMO_DETAIL_FAILED,
  GET_DEMO_DETAIL_SUCCESS,
  GET_DEMO_LIST_SUCCESS,
} from "../constants/demo.constants";

export const getDemoList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://60a63fe9b970910017eb11ee.mockapi.io/Testing",
      data: null,
    })
      .then((res) => {
        dispatch(getDemoListSuccess(res.data));
      })
      .catch((err) => {
        // dispatch(stopLoading());
      });
  };
};

const getDemoListSuccess = (demoList) => {
  return {
    type: GET_DEMO_LIST_SUCCESS,
    payload: demoList,
  };
};

export const getDemoDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://60a63fe9b970910017eb11ee.mockapi.io/Testing?id=${id}`,
      data: null,
    })
      .then((res) => {
        dispatch(getDemoDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDemoDetailFailed(err));
      });
  };
};

const getDemoDetailSuccess = (demoDetail) => {
  return {
    type: GET_DEMO_DETAIL_SUCCESS,
    payload: demoDetail,
  };
};

const getDemoDetailFailed = (err) => {
  return {
    type: GET_DEMO_DETAIL_FAILED,
    payload: err,
  };
};
