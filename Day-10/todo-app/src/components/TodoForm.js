import React, { useState } from "react";

const TodoForm = ({ onSubmitHandler }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    onSubmitHandler({
      id: Math.random(),
      text: inputText,
      status: false,
    });

    setInputText("");
  };

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo here"
        name="inputText"
        value={inputText}
        onChange={handleChange}
        className="inputbox"
      />
      <button type="submit" className="submit-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
