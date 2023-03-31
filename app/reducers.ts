import { combineReducers } from "redux";
import { counterSlice } from "../src/features/counter/slice";
import {
  deviceSlice,
  sliceKey as deviceKey,
} from "../src/features/device/slice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  [deviceKey]: deviceSlice.reducer,
});

export default rootReducer;
