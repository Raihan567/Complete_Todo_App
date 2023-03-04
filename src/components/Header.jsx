import React, { useState } from "react";
import notesImg from "../assets/images/notes.png";
import doubleTickImg from "../assets/images/double-tick.png";
import plusImg from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, clearCompleted, completeAll } from "../Redux/todos/action";
const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const handleClearAllTask = () => {
    dispatch(clearCompleted());
  };

  const handleCompleteAllTask = () => {
    dispatch(completeAll());
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notesImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAllTask}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearAllTask} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
