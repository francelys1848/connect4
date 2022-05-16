import "./styles.css";
import { useState } from "react";

export default function App() {
  let column = ["red", "yellow", "yellow", "red", "red", "yellow"];
  console.log(column[0]);
  return (
    <div className="App">
      <h1>Hello My React App!</h1>
      <h2>Start editing to see some magic happen!</h2>

      <SlotName token={column[5]} />
      <SlotName token={column[4]} />
      <SlotName token={column[3]} />
      <SlotName token={column[2]} />
      <SlotName token={column[1]} />
      <SlotName token={column[0]} />
    </div>
  );
}
function SlotName(props) {
  let [playerTurn, changePlayerTurn] = useState("red");
  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  return (
    <div>
      {/* <div> {playerTurn} </div> */}
      <div className="background" onClick={() => togglePlayerTurn()}>
        <div className={`${props.token} clear `}></div>
      </div>
    </div>
  );
}
