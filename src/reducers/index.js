import {combineReducers} from "redux";
import UserReducer from "./userReducer";
import PlayersReducer from "./playersReducer";
import MatchesReducer from "./matchesReducer";

const reducers = combineReducers({
  user: UserReducer,
  players: PlayersReducer,
  matches: MatchesReducer
});

export default reducers;
