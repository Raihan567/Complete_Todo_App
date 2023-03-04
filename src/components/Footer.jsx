import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../Redux/filters/action";

const numberOfTodo = no_of_todo => {
  switch (no_of_todo) {
    case 0:
      return "No Task";

    case 1:
      return "1 Task";

    default:
      return `${no_of_todo} Tasks`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filters = useSelector(state => state.filters);
  const todoRemaining = todos.filter(todo => !todo.completed).length;
  const { status, colors } = filters;

  const handleStatusChanged = status => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = color => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodo(todoRemaining)} Left</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChanged("All")}
          class={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged("Incomplete")}
          class={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged("Completed")}
          class={`cursor-pointer ${status === "Completed" && "font-bold"}`}
        >
          Complete
        </li>
        <hr />
        <li
          onClick={() => handleColorChanged("green")}
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChanged("red")}
          class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChanged("yellow")}
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
