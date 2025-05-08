function printHello() {
    // document.write("Hello!");
    console.log("Hello!")
}
function printBye(event) {
    console.log("Bye");
    console.log(event);
}
function handleDoubleClick() {
    console.log("Handle double click!")
}

const Button = () => {
    let styles={
        cursor: "pointer"
    }

  return (
      <div>
          <p onClick={printBye} style={styles}>This paragraph is for click demo.</p>
          <p onMouseOver={printHello} style={styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis illum ipsam fugit delectus dolor odit itaque totam rerum facilis!</p>
      <button onClick={printHello}>Click Me!</button>
      <button onDoubleClick={handleDoubleClick}> DoubleClick Me!</button>
    </div>
  )
}

export default Button