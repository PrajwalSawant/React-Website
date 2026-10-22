import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState();

  const handleUpClick = () => {
    console.log("first", text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container my-3">
      <h3>{props.heading}</h3>

      <textarea
        value={text}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        onChange={handleOnChange}
      ></textarea>

      <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert To LowerCase
      </button>
      <div>
        <h2>Text summary</h2>
        <p>{/* {text.split("").length} as a text {text.length} */}</p>

        <p>{0.008 * text.split("").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
