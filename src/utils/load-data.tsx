import { Itodo } from "../components/todo/TodoService";

export function loadData(): Itodo[] {
  let initialTodos: Itodo[] = [];
  let data = localStorage.getItem("todos");
  if (!data) {
    return initialTodos;
  }
  let loadedTodos = JSON.parse(data);
  loadedTodos.map((todo) => initialTodos.push(todo));
  console.log("initial");
  console.log(initialTodos);
  return initialTodos;
}
