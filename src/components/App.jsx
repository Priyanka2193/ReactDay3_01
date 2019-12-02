import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [state, setstate] = useState("");

  const [headingText, setheadingtext] = useState(" ");

  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    //setheadingtext("Submitted");
    setheadingtext(name);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }
  return (
    <div className="container">
      <h1>
        Hello <br />
        {headingText}
      </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
