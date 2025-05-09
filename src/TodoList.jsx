import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    // console.log("adding new task...");
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log(id);
    // ? This filter method creates a copy of the array, consisting on those elements whose id not matches the selected item's id.
    //   let copy = todos.filter((todo) => todo.id != id);
    // console.log(copy);
    // setTodos(todos.filter((todo) => todo.id != id));
    setTodos((prevTodos) => todos.filter(prevTodos.id != id));
  };

  let upperCaseAllTodo = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        // console.log(todo);
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
    // console.log(newArr);
  };

  let upperCaseOne = (id) => {
    // console.log('One to uppercase');
    setTodos((todos) =>
      todos.map((todo) => {
        // console.log(todo);
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add task..."
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />

      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>Uppercase One</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAllTodo}>Uppercase All</button>
    </>
  );
}
