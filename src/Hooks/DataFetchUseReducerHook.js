import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  posts: {},
  error: "",
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: false,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something Went Wrong",
        posts: {},
      };
  }
};

const DataFetchUseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading" : state.posts.title}
      {state.error ? state.error : ""}
    </div>
  );
};

export default DataFetchUseReducerHook;
