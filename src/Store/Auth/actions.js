import * as actionTypes from "./actionTypes";

export const login = credentials => {
  return (dispatch, getState) => {
    //dispatch the request
    dispatch({
      type: actionTypes.LOG_IN_REQUESTED
    });

    //try to log import { NavLink } from 'react-router-dom'
    fetch("https://your API", {
      method: "POST",
      body: JSON.stringify(credentials)
    })
      .then(response => {
        response.json().then(status => {
          dispatch({ type: actionTypes.LOG_IN_SUCCEEDED });
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.LOG_IN_FAILED,
          payload: { error: error }
        });
      });
  };
};
