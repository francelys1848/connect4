import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello My React App!</h1>
      <h2>Start editing to see some magic happen!</h2>

      <SlotName />
      <SlotName />
      <SlotName />
      <SlotName />
      <SlotName />
      <SlotName />
    </div>
  );
}
function SlotName() {
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
      <div> {playerTurn} </div>
      <div className="background" onClick={() => togglePlayerTurn()}>
        <div className={`${playerTurn} clear `}></div>
      </div>
    </div>
  );
}
