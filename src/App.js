import "./App.css";
import { useState } from "react";

function App() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="App">
      <label>분</label>
      <input disabled={flipped === false} id="one" />
      <label>초</label>
      <input disabled={!flipped === false} id="two" />
      <div
        className="w-16 h-11 bg-cyan-600 rounded text-center pt-2"
        onClick={() => {
          setFlipped((flipped) => !flipped);
        }}
      >
        flipp
      </div>
      <div
        className="w-16 h-11 bg-pink-300 text-center pt-2 rounded"
        onClick={() => {
          document.getElementById("one").value=null;
          document.getElementById("two").value=null;
        }}
      >
        reset
      </div>
    </div>
  );
}

export default App;
