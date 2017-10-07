import {combineReducers} from "redux";
import userReducer from "./userReducer";
import playersReducer from "./playersReducer";
import matchesReducer from "./matchesReducer";

const reducers = combineReducers({
  user: userReducer,
  players: playersReducer,
  matches: matchesReducer
});

export default reducers;
