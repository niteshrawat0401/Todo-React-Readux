import { reducer } from "./reducer.js";
import Store from "./store.js"


const store = new Store(reducer,{
count : 0,
});

let counter = document.getElementById("counterValue");
let inc = document.getElementById("incrementCounter");
let dec = document.getElementById("decrementCounter");

counter.innerText = store.getState().count;

inc.addEventListener("click", function () {
    store.dispatch({
        type : "INCREMENT",
    })
  counter.innerText = store.getState().count;
});

dec.addEventListener("click", function () {
    store.dispatch({
        type : "DECREMENT",
    });
  counter.innerText = store.getState().count;
});
