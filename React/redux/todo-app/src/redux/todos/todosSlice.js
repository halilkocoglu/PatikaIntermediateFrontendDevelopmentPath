import { createSlice } from "@reduxjs/toolkit";
//2. create a slice for functions.
// give it a name, initial state and reducer(for functions)
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn React",
        completed: true,
      },
      {
        id: "2",
        title: "Learn Redux",
        completed: false,
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
