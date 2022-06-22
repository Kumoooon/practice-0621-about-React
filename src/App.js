import "./App.css";
import { useState } from "react";

function TimeConverter() {
  const [flipped, setFlipped] = useState(true);
  const [times, setTimes] = useState("");
  return (
    <div>
      <h3>Minutes To Hours</h3>
      <label className="inline-block">Minute</label>
      <input
        className="inline-block"
        disabled={flipped === false}
        id="one"
        type="number"
        value={flipped === true ? times : Math.floor(times / 60)}
        onChange={(e) => {
          const value = e.target.value;
          setTimes(value);
        }}
      />{" "}
      <div
        className="w-24 h-11 bg-pink-300 text-center pt-2 rounded inline-block"
        onClick={() => {
          setFlipped((flipped) => !flipped);
          setTimes("");
        }}
      >
        {!flipped ? "Turn back" : "inverted"}{" "}
      </div>
      <label className="inline-block">Seconds</label>
      <input
        className="inline-block"
        disabled={!flipped === false}
        id="two"
        type="number"
        value={flipped === false ? times : times * 60}
        onChange={(e) => {
          const value = e.target.value;
          setTimes(value);
        }}
      />
    </div>
  );
}
function KmToMiles() {
  const [flipped, setFlipped] = useState(true);
  const [length, setLength] = useState("");
  return (
    <div>
      <h3>Km to Miles</h3>
      <label className="inline-block">Km</label>
      <input
        className="inline-block"
        disabled={flipped === false}
        id="one"
        type="number"
        value={flipped === true ? length : Math.floor(length / 1.1609)}
        onChange={(e) => {
          const value = e.target.value;
          setLength(value);
        }}
      />{" "}
      <div
        className="w-24 h-11 bg-pink-300 text-center pt-2 rounded inline-block"
        onClick={() => {
          setFlipped((flipped) => !flipped);
          setLength("");
        }}
      >
        {!flipped ? "Turn back" : "inverted"}{" "}
      </div>
      <label className="inline-block">Miles</label>
      <input
        className="inline-block"
        disabled={!flipped === false}
        id="two"
        type="number"
        value={flipped === false ? length : length * 1.609}
        onChange={(e) => {
          const value = e.target.value;
          setLength(value);
        }}
      />
    </div>
  );
}

function Jayden() {
  return <h2>thank you for stopping by</h2>;
}
function App() {
  const events = (e) => {
    const value = e.target.value;
    setMenu(value);
    console.log(value);
  };
  const [menu, setMenu] = useState(2);
  return (
    <div className="App">
      <h1>Super Converter</h1>

      <select onChange={events}>
        <option value="2">---choose one---</option>
        <option value="0">Miutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {menu == 0 ? <TimeConverter /> : null}
      {menu == 1 ? <KmToMiles /> : null}
      {menu == 2 ? <Jayden /> : null}
    </div>
  );
}

export default App;
