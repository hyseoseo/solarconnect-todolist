import { useState, useEffect } from "react";
import { loadData } from "../../utils/load-data";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  deadline?: string;
};

export const useTodo = () => {
  const [todoState, setTodoState] = useState(loadData());
  let nextIdState = todoState.length
    ? todoState[todoState.length - 1].id + 1
    : 0;

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  const incrementNextId = () => {
    nextIdState = nextIdState + 1;
  };

  const toggleTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.map((todo: Itodo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done,
      }))
    );
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
      })
    );
  };

  useEffect(() => {
    saveData();
  }, [todoState]);

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
