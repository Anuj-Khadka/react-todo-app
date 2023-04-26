import React, { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";

const Summary = ({ todos, clearCompleted }) => {
  return (
    <div className="summary">
      <div>{todos.length} items left</div>
      <div className="filters">
        <button className="active filter-button" data-filter=".all">
          All
        </button>
        <button data-filter=".completed" className="filter-button">
          Active
        </button>
        <button data-filter=".incomplete" className="filter-button">
          Incomplete
        </button>
      </div>
      <div>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Summary;
