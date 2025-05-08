

const Closure = () => {
    let x = 10;
  //   x += 20;
  // return x;
  function inner() {
    let y = 20;
    console.log(x + y);
  }
  return inner;
}

export default Closure
