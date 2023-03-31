import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type ?? "text"}
      className={props.className ?? ""}
      // value={props.value ?? ""}
      {...props}
    />
  );
};

export default Input;
