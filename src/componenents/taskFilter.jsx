import React from "react";
import Button from "./UI/button.jsx";
import PropTypes from "prop-types";

const TaskFilter = ({ changeFilterHandler, selected, children }) => {
  return (
    <li>
      <button
        className={selected ? "selected" : ""}
        onClick={() => changeFilterHandler(null)}
      >
        {children}
      </button>
    </li>
  );
};

TaskFilter.propType = {
  changeFilterHandler: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.string,
};

TaskFilter.defaultProps = {
  changeFilterHandler: {},
  selected: false,
  children: "All",
};

export default TaskFilter;
