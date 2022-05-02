import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      Counter : {count}
      <div>
        <button onClick={() => dispatch(increment(10))}>increment</button>
        <button onClick={() => dispatch(decrement(10))}>decrement</button>
      </div>
    </div>
  );
};
