import { useState } from "react";

const Counter = () => {
  // let count = 0;
  let [count, setCount] = useState(0); //initialization
  // console.log(count);
  function incCount() {
    count += 1;
    setCount(count);
    console.log(count);
  }

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Click for Increment</button>
    </div>
  );
};

export default Counter;
