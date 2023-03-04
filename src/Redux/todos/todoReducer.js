import {
  ADDED,
  CLEAR_ALL,
  COLOR_SELECTED,
  COMPLETE_ALL,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialStates";
const nextTodoId = todos => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case DELETED:
      return state.filter(todo => todo.id !== action.payload);

    case COLOR_SELECTED:
      const { todoId, color } = action.payload;
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case CLEAR_ALL:
      return state.filter(todo => !todo.completed);

    case COMPLETE_ALL:
      return state.map(todo => {
        return {
          ...todo,
          completed: true,
        };
      });
    default:
      return state;
  }
};

export default todoReducer;
