import React from "react";

function TextError(props) {
  return (
    <div className="error m-0" style={{ color: "red", fontSize: "14px" }}>
      {props.children}
    </div>
  );
}

export default TextError;
