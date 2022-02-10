import React from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/reducers/counterReducer';

function App() {
  const { value } = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <h1>Phantom</h1>
      <p>Powered by Codebandits</p>
      <div className="counter">
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <h3 className="counter-value">{value}</h3>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          type="button"
          className="reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
