import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tickTodo, deleteTodo } from './redux/TodoSlice';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch(); // Initialize dispatch

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center p-4 m-4 bg-white border rounded-lg shadow-sm">
          <span className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
          <div>
            <button 
              onClick={() => dispatch(tickTodo(todo.id))}
              className={`m-2 px-4 py-2 text-white rounded-lg ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'}`}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </button>
            <button 
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="m-2 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;