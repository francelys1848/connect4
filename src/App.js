import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello My React App!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SlotName />
    </div>
  );
}
function SlotName() {
  return (
    <div className="background">
      <div className="clear"></div>
    </div>
  );
}
