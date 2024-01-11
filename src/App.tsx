import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center space-x-5">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-1 font-semibold text-lg bg-blue-700 rounded text-white"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-1 font-semibold text-lg bg-blue-700 rounded text-white"
        >
          Increment
        </button>
        <h1 className="font-bold text-4xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-1 font-semibold text-lg bg-red-700 rounded text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
