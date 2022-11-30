import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const clickPlus = () => {
    setCount(count + 1);
  };
  const clickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={clickPlus}>+</button>
      <button onClick={clickMinus}>-</button>
    </div>
  );
}
