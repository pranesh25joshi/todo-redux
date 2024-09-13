import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/TodoSlice';

const InputComp = () => {
  const dispatch = useDispatch();
  const  [inputTodo, setinputTodo] = useState("");

  const changeFunction = (event) =>{
    setinputTodo(event.target.value);
  }
  
  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Enter your task"
        className="!m-4 !w-1/2 !px-4 !py-2 !text-gray-700 !bg-white !border !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
        value={inputTodo}
        onChange={changeFunction}
      />
      <button 
      className="!m-4 !px-4 !py-2 !text-white !bg-blue-500 !rounded-lg hover:!bg-blue-600"
      onClick={() => {
        if (inputTodo) {
          dispatch(addTodo(inputTodo));
          setinputTodo(""); // Clear the input after adding
        }
      }}
      >
        Add Task
      </button>
    </div>
  )
};

export default InputComp