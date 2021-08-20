import { Itodo } from "../components/todo/TodoService";

export function loadData(): Itodo[] {
  const initialTodos: Itodo[] = [];
  const data = localStorage.getItem("todos");
  if (!data) {
    return initialTodos;
  }
  const loadedTodos: [] = JSON.parse(data);
  loadedTodos.map((todo) => initialTodos.push(todo));
  return initialTodos;
}
