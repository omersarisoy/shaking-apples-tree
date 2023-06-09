'use client'

import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./features/treeSlice";

export default configureStore({
  reducer: { 
    tree: treeReducer 
  },
});
