import { useCounter } from "../../hooks/useCounter";

export default function CustomHookDemo() {
  const { increment, decrement, count } = useCounter();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h2>Demo Custom Hook</h2>
      <div className="flex gap-5">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
