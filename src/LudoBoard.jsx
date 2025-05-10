import { useState } from "react";
import './LudoBoard.css'

const LudoBoard = () => {
  // let [blueMove, setBlueMove] = useState(0);
  // let [yellowMove, setYellowMove] = useState(0);
  // let [greenMove, setGreenMove] = useState(0);
  // let [redMove, setRedMove] = useState(0);
  //! In place of creating multiple state variables, we create an object to initialize the useState.
  let [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });
  let [arr, setArray] = useState(["no moves"]);

  let updateBlue = () => {
    // moves.blue += 1;
    // console.log(`moves: ${moves.blue}`);
    // console.log(moves);
    setMoves({ ...moves, blue: moves.blue + 1 });   //* updated object
    // converting it to callback
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: moves.blue + 1 };
    // });

    // arr.push("Blue Move");
    // setArray([...arr,"Blue Move"]);
    setArray((prevArr) => {
      return [...prevArr, "Blue Move"]
    });
  console.log(arr);
};

let updateGreen = () => {
  
  
    // setMoves({ ...moves , green: moves.green + 1});   //* updated object
    setMoves((prevMoves) => {
      return { ...prevMoves, green: moves.green + 1 };
    });
  };
  let updateYellow = () => {
   
    // setMoves({ ...moves , yellow: moves.yellow + 1});   //* updated object
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: moves.yellow + 1 };
    });
  };
  let updateRed = () => {
   
    // setMoves({ ...moves , red: moves.red + 1});   //* updated object
    setMoves((prevMoves) => {
      return { ...prevMoves, red: moves.red + 1 };
    });
  };
  return (
    <div>
      <h3>Game Begins!</h3>
      
      <div className="board">
        <p>{arr}</p>
              <p>Blue Moves= {moves.blue}</p>
              <button style={{background:"blue",color:"white"}} onClick={updateBlue}>+1</button>
              <p>Yellow Moves= {moves.yellow }</p>
              <button style={{background:"yellow"}} onClick={updateYellow}>+1</button>
              <p>Green Moves= {moves.green }</p>
              <button style={{ background: "green", color: "white" }} onClick={updateGreen}>+1</button >
              <p>Red Moves= {moves.red}</p>
              <button style={{background:"red",color:"white"}} onClick={updateRed}>+1</button>
              
          </div>
    </div>
  )
}

export default LudoBoard
