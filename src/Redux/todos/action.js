import {
  ADDED,
  CLEAR_ALL,
  COLOR_SELECTED,
  COMPLETE_ALL,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = todoText => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = todoId => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const deleted = todoId => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: { todoId, color },
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const completeAll = () => {
  return {
    type: COMPLETE_ALL,
  };
};
