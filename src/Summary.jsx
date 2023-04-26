import React, { useState } from "react";

const Summary = ({ todos, deleteTodo }) => {
  return (
    <div className="summary">
      <span>{todos.length} items left</span>
      <span>
        <button className="clear-completed">Clear Completed</button>
      </span>
    </div>
  );
};

export default Summary;
