import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../counter/action"

export const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  // console.log(count);
  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => dispatch(increment(10))}>INCREMENT by 10</button>
        <button onClick={() => dispatch(decrement(5))}>DECREMENT by 5</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
};
