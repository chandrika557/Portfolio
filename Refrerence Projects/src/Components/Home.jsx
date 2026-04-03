import React from "react";
import './Styles.scss';
import store from "../store/Store";

const Home = () => {
  const counter = store.getState().count;
  const increment = () => {
    store.dispatch({ type: "INCREMENT" });
    console.log(store.getState());
  };
  const decrement = () => {
    store.dispatch({ type: "DECREMENT" });
    console.log(store.getState());
  };
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
      <button onClick={increment}>add</button>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>minus</button>
    </div>
  );
};

export default Home;
