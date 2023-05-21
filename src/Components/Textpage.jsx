import React, { useRef, useState } from "react";
const Textpage = () => {
  /* const [text, setText] = useState("");
  const handleUpClick = () => {
    const selectedText = window.getSelection().toString();
    const transformedText = selectedText.toUpperCase();
    const updatedText = text.replace(selectedText, transformedText);
    setText(updatedText);
    //    showAlert("Converted to UpperCase","success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChane");
    setText(event.target.value);
  }; */

  return (
    <div className="m-2 outerdiv">
      {/*  <button className="btn btn-primary my-3 " onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <div className="p-2 innerdiv">
        <div className="my-5 mx-2 ">
          <textarea
            onChange={handleOnChange}
            value={text}
            id="inputtext"
            placeholder="Type Text"
          ></textarea>
        </div>
      </div> */}
    </div>
  );
};

export default Textpage;
