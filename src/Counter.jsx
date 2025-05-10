import { useState } from "react";

const Counter = () => {
  // let count = 0;
  let [count, setCount] = useState(0); //initialization

  function incCount() {
    count += 1;
    console.log(count);
    setCount(count);
  }

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Click for Increment</button>
    </div>
  );
};

export default Counter;
