import "./styles.css";
import { useState } from "react";

export default function App() {
  let [playerTurn, changePlayerTurn] = useState("red");
  let [column, changeColumn] = useState([]);
  function togglePlayerTurn() {
    if (column.length < 6) {
      changeColumn([...column, playerTurn]);
      if (playerTurn === "red") {
        changePlayerTurn("yellow");
      } else {
        changePlayerTurn("red");
      }
    }
  }
  return (
    <div className="App">
      <div className="background" onClick={() => togglePlayerTurn()}>
        <SlotName token={column[5]} />
        <SlotName token={column[4]} />
        <SlotName token={column[3]} />
        <SlotName token={column[2]} />
        <SlotName token={column[1]} />
        <SlotName token={column[0]} />
      </div>
    </div>
  );
}

function SlotName(props) {
  return (
    <div>
      {/* <div> {playerTurn} </div> */}
      <div className="background">
        <div className={`${props.token} clear `}></div>
      </div>
    </div>
  );
}
