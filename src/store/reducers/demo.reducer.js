import {
  GET_DEMO_DETAIL_FAILED,
  GET_DEMO_DETAIL_SUCCESS,
  GET_DEMO_LIST_SUCCESS,
} from "../constants/demo.constants";

const initialState = {
  demoList: [],
  demoDetail: {},
  errors: {},
};

const demoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DEMO_LIST_SUCCESS: {
      state.demoList = payload;
      return { ...state };
    }
    case GET_DEMO_DETAIL_SUCCESS: {
      return { ...state, demoDetail: payload };
    }
    case GET_DEMO_DETAIL_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default demoReducer;
