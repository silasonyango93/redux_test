import * as actionTypes from "./actionTypes";
import axios from "axios";
import querystring from "querystring";

export const login = credentials => {
  return (dispatch, getState) => {
    //dispatch the request
    dispatch({
      type: actionTypes.LOG_IN_REQUESTED
    });

    //try to log import { NavLink } from 'react-router-dom'
    axios.post('http://35.188.176.184:80/user_login', querystring.stringify(credentials))
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
