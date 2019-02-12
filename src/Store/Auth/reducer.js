import * as actionTypes from "./actionTypes";

const initialState = {
  auth: { isAuthenticated: false }
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOG_IN_REQUESTED:
      return state;
    case actionTypes.LOG_IN_SUCCEEDED:
      return {
        ...state,
        auth: { isAuthenticated: true }
      };
    case actionTypes.LOG_IN_FAILED:
      return {
        ...state,
        auth: { isAuthenticated: false }
      };
    default:
      return state;
  }
}
