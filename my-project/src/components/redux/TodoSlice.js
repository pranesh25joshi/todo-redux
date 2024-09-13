import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                completed: false,
                text: action.payload
            }
            state.todos.push( newTodo );

        },
        deleteTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        tickTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, tickTodo } = todoSlice.actions;
