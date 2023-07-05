import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./pages/blog/blog.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { blog: blogReducer },
});

// Lay Rootstate va Appdispatch tu store
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppdispatch = () => useDispatch<AppDispatch>();
