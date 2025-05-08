import { useState } from 'react';

function init() {
  return Math.random();
}

const Counter = () => {
  //   let arr = useState(10);
  // console.log(arr);
  let [count, setCount] = useState(init);   //initialization
  console.log("Component is rendered!");
  console.log(`count=${count}`);

    // function inCount() {
    //     count += 1;
    //     console.log(count);
  // }
  function incCount() {
    // count = count + 1;
    // setCount (count + 1);
    // console.log(`Inside incCount,count=${count}`);
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  }
  return (
    <div>
          {/* <h3>Count={count}</h3>
          <button onClick={inCount}>Increment</button> */}
      <h3>Count={count}</h3>
      <button onClick={incCount}>Click for Increment</button>
    </div>
  )
}

export default Counter;
