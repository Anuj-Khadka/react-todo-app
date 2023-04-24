import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <label htmlFor="item">New Item</label> */}
        <span className="btn">
          <MdAddCircleOutline size="1.8rem"/>
        </span>
        <input
          type="text"
          id="item"
          placeholder="Add a new item..."
          autoComplete="off"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
    </form>
  );
};

export default NewTodoForm;
