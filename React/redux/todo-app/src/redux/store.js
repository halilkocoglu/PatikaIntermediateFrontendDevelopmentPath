import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos/todosSlice";
//1. U need to define a store for redux
export const store = configureStore({
  reducer: {
    // 3. add slices to store like(slice name and slice)
    todos: todosSlice,
  },
});
