import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { QUERY } from "../query";

const initialValue = [
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Task",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Membuat Laporan Harian",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Istirahat !",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
    filteredData: initialValue,
    filter: QUERY.NONE,
  },
  reducers: {
    addNewTodo: (state, action) => {
      console.log("addnewtodo = ", action.payload);
      const newTodo = { title: action.payload, id: uuidv4(), completed: false };
      state.todos = [...state.todos, newTodo];
      if (state.filter === QUERY.INCOMPLETED || state.filter === QUERY.NONE)
        state.filteredData = [...state.filteredData, newTodo];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.filteredData = state.filteredData.filter(
        (todo) => todo.id !== action.payload
      );
    },
    checkTodo: (state, action) => {
      console.log("checkTodo");
      const checkedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      const checkedTodo2 = state.filteredData.find(
        (todo) => todo.id === action.payload
      );
      checkedTodo.completed = !checkedTodo.completed;
      checkedTodo2.completed = !checkedTodo2.completed;
      state.todos = [...state.todos];
      if (
        state.filter === QUERY.COMPLETED ||
        state.filter === QUERY.INCOMPLETED
      ) {
        state.filteredData = state.filteredData.filter(
          (data) => data.id !== action.payload
        );
      }
    },
    checkAll: (state, action) => {
      for (let i = 0; i < state.filteredData.length; i++) {
        state.filteredData[i].completed = true;
        const id = state.filteredData[i].id;
        const todo = state.todos.find((todo) => todo.id === id);
        todo.completed = true;
      }
      if (state.filter === QUERY.INCOMPLETED) {
        state.filteredData = [];
      } else {
        state.filteredData = [...state.filteredData];
      }
      state.todos = [...state.todos];
    },
    uncheckAll: (state, action) => {
      for (let i = 0; i < state.filteredData.length; i++) {
        state.filteredData[i].completed = false;
        const id = state.filteredData[i].id;
        const todo = state.todos.find((todo) => todo.id === id);
        todo.completed = false;
      }
      if (state.filter === QUERY.COMPLETED) state.filteredData = [];
      else state.filteredData = [...state.filteredData];
      state.todos = [...state.todos];
    },
    deleteAll: (state, action) => {
      let newTodo = state.todos;
      for (let i = 0; i < state.filteredData.length; i++) {
        newTodo = newTodo.filter(
          (todo) => todo.id !== state.filteredData[i].id
        );
      }
      state.todos = [...newTodo];
      state.filteredData = [];
    },
    filterTodo: (state, action) => {
      if (action.payload === QUERY.NONE) {
        state.filteredData = state.todos;
        state.filter = QUERY.NONE;
      } else if (action.payload === QUERY.COMPLETED) {
        state.filteredData = state.todos.filter(
          (todo) => todo.completed === true
        );
        state.filter = QUERY.COMPLETED;
      } else if (action.payload === QUERY.INCOMPLETED) {
        state.filteredData = state.todos.filter(
          (todo) => todo.completed === false
        );
        state.filter = QUERY.INCOMPLETED;
      }
    },
  },
});

export const {
  addNewTodo,
  removeTodo,
  checkTodo,
  checkSameElement,
  checkAll,
  uncheckAll,
  deleteAll,
  filterTodo,
} = todoSlice.actions;
export default todoSlice;
