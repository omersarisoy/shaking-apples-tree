'use client'

import { createSlice } from "@reduxjs/toolkit";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    apples: [
      { id: 0, top: "102px", left: "63px", isDropped: false},
      { id: 1, top: "135px", left: "164px", isDropped: false},
      { id: 2, top: "181px", left: "173px", isDropped: false},
      { id: 3, top: "48px", left: "177px", isDropped: false },
      { id: 4, top: "201px", left: "85px", isDropped: false },
      { id: 5, top: "194px", left: "217px", isDropped: false },
      { id: 6, top: "100px", left: "125px", isDropped: false },
      { id: 7, top: "102px", left: "225px", isDropped: false },
      { id: 8, top: "155px", left: "116px", isDropped: false },
      { id: 9, top: "111px", left: "278", isDropped: false },
      { id: 10, top: "201px", left: "276px", isDropped: false },
      { id: 11, top: "156px", left: "116px", isDropped: false },
    ],
    treeShake: false,
  },
  reducers: {
    setTreeShake: (state) => {
      state.treeShake = !state.treeShake;
    },
    setAppleDown: (state, action) => {
      const id = action.payload.id;
      const isDropped = action.payload.isDropped;
      state.apples[id].isDropped = action.payload.isDropped;
      if (isDropped) {
        state.apples[id].top = "350px";
        state.apples[id].transition = action.payload.transition;
      }
    },
    setAppleBasket: (state, action) => {
      const id = action.payload.id;
      const isDropped = state.apples[id].isDropped;
      const onBasket = state.apples[id].onBasket;

      if (isDropped && !onBasket) {
        state.apples[id].top = "330px";
        state.apples[id].left = `${action.payload.left}px`;
        state.apples[id].transition = action.payload.transition;
        state.apples[id].onBasket = true;
      }
    },
  },
});
export const selectAllApples = (state) => state.tree.apples;
export const { setTreeShake, setAppleDown, setAppleBasket } = treeSlice.actions;

export default treeSlice.reducer;
