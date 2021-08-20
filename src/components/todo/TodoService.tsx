/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { loadData } from "../../utils/load-data";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  deadline: string;
};

//let initialTodos: Itodo[] = [];

export const useTodo = () => {
  //initialTodos = loadData();
  const [todoState, setTodoState] = useState(loadData());
  let nextIdState = todoState.length
    ? todoState[todoState.length - 1].id + 1
    : 0;

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  const incrementNextId = () => {
    console.log(nextIdState);
    nextIdState = nextIdState + 1;
  };

  const toggleTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.map((todo: Itodo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done
      }))
    );
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
    console.log(todoState);
  };

  const createTodo = (todo: Itodo) => {
    //const nextId = todoState.length + 1;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState
      })
    );
    console.log(todoState);
  };
  /*
  const loadData = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data!);
    setTodoState(initialTodos);
  };
  
  useEffect(() => {
    loadData();
  }, []);
*/
  useEffect(() => {
    saveData();
  }, [todoState]);

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
