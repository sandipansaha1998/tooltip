import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div className="App" style={{}}>
      <h4 style={{ marginBottom: `50px` }}>Tooltip Example</h4>
      <h4 style={{ position: `relative` }}>
        {" "}
        <span
          style={{
            border: `2px solid black`,
            padding: `10px`,
          }}
          onMouseEnter={() => {
            setShowToolTip(true);
          }}
          onMouseLeave={() => {
            setShowToolTip(false);
          }}
        >
          {" "}
          Hover me
        </span>
        {showToolTip && (
          <span
            style={{
              position: "absolute",
              top: `-36px`,
              backgroundColor: `black`,
              color: "white",
              padding: `3px`,
            }}
          >
            Info
          </span>
        )}
      </h4>
    </div>
  );
}

export default App;
