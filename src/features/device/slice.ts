import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type InitialStateDevice = {
  width: number | null;
  height: number | null;
};

const initialState: InitialStateDevice = {
  width: null,
  height: null,
};

type SliceKey = "device";
export const sliceKey: SliceKey = "device";

export const deviceSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const selectWidth = (state: RootState) => state[sliceKey].width;
export const selectHeight = (state: RootState) => state[sliceKey].height;

export const { setWidth, setHeight } = deviceSlice.actions;
