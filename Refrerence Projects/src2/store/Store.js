import { legacy_createStore as createStore } from "redux";
// import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  const incrementBy =
    typeof action.incrementBy === "number" ? action.incrementBy : 1;
  if (action.type === "INCREMENT") {
    return {
      count: state.count + incrementBy,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else return { count: 0 };
});

//Get's called everytime a store value changes
const unsuscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "INCREMENT",
});

// unsuscribe();
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
export default store;
