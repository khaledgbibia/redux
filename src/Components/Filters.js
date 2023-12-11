import React from "react";

import { useDispatch } from "react-redux";
import { FilterAll, FilterDone, FilterUndone } from "./redux/taskSlice";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(FilterAll());
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(FilterDone());
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          dispatch(FilterUndone());
        }}
      >
        Undone
      </button>
    </div>
  );
};

export default Filters;