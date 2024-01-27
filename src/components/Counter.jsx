import { Component } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import "./counter.module.css";
import { type } from "@testing-library/user-event/dist/type";
import { counterActions } from "../store/counter";

// const Counter = (state = { counter: 0, showCounter: true }, action) => {
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({
  //     type: "increment",
  //   });
  // };

  // const increaseHandler = () => {
  //   dispatch({
  //     type: "increase",
  //     amount: 10,
  //   });
  // };
  // const decrementHandler = () => {
  //   dispatch({
  //     type: "decrement",
  //   });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({
  //     type: "toggle",
  //   });
  // };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER, payload:10 }
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main>
      <h1>Redux Counter</h1>
      <div>Counter Value</div>
      {show && <div>{counter}</div>}
      <div className="counter-button">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//Class Based Component
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.derement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main>
//         <h1>Redux Counter</h1>
//         <div>Counter Value</div>
//         <div>{this.props.counter}</div>
//         <div className="counter-button">
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () =>
//       dispatch({
//         type: "increment",
//       }),
//     derement: () =>
//       dispatch({
//         type: "decrement",
//       }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
