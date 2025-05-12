import { useState } from "react";
import "./style/style.css";

const ToDoList = () => {

  let newTodo = {
    id: -1,
    text: "",
    completed: false
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === '')
      return;
    newTodo.id = Date.now();
    newTodo.text = trimmed;
    newTodo.completed = false;
    setTodos(prev => [newTodo, ...prev]);
    alert(`${newTodo.text} added Successfully`);
    setInput('');
  }

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    alert(`Data deleted Successfully`);

  };

  return (
    <div role="main" aria-label="Todo List Application">
      <h1>Awesome Todo List App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-required="true"
          aria-label="Todo text input"
        />
        <button
          type="submit"
          className="add-btn"
          aria-label="Add todo"
          onClick={addTodo}
        >
          +
        </button>
      </form>
      <ul className="todo-list" aria-live="polite">
        {todos.length === 0 && (
          <li style={{ textAlign: 'center', color: '#ccc', fontStyle: 'italic' }}>
            No tasks, add some!
          </li>
        )}
        {todos.map(todo => (
          <li
            key={todo.id}
            className={'todo-item' + (todo.completed ? ' completed' : '')}
          >
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              aria-checked={todo.completed}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className="todo-label"
            >
              {todo.text}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
              aria-label={`Delete task: ${todo.text}`}
              title="Delete task"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
