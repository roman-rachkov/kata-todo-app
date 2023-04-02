import React from "react";
import Button from "./UI/button.jsx";

const Footer = ({ left, filter, setFilter, removeCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        <li>
          <Button
            className={!filter ? "selected" : ""}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
        </li>
        <li>
          <Button
            className={filter && filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
        </li>
        <li>
          <Button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </li>
      </ul>
      <Button className="clear-completed" onClick={removeCompleted}>
        Clear completed
      </Button>
    </footer>
  );
};
export default Footer;
