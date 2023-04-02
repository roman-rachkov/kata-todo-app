import React from "react";
import Button from "./button.jsx";

const IconButton = (props) => {
  return (
    <Button className={["icon", props.icon].join(" ")} {...props}></Button>
  );
};

export default IconButton;
