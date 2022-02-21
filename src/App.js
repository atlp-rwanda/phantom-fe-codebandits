import React from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset
} from './redux/reducers/counterReducer.js';

function App() {
  const { value } = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center text-center items-center h-screen">
      <h1 className="text-5xl mb-4 text center font-bold font-rale text-primary">
        Phantom
      </h1>
      <p className="pb-8">Powered by Codebandits</p>
      <div className="pb-8 flex flex-row items-center">
        <button
          id="decrement"
          type="button"
          className="bg-gray-400 rounded-md px-2 font-bold flex items-center py-0 justify-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <h3 className="mx-2 font-bold">{value}</h3>
        <button
          id="increment"
          type="button"
          className="bg-gray-400 rounded-md px-2 font-bold flex items-center py-0 justify-center"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          id="reset"
          type="button"
          className="ml-3 bg-gray-400 px-2 rounded-md font-bold hover:text-hover transition-all 3s"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <q className="font-bold">Added the tailwind css</q>
    </div>
  );
}

export default App;
