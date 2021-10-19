import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "../reducer/authReducer";
import { pokemonsReducer } from "../reducer/pokemonsReducer";
import { uiReducer } from '../reducer/uiReducer';
import { calendarReducer } from '../reducer/calendarReducer';
import { tableReducer } from "../reducer/tableReducer";
const createRootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    ui: uiReducer,
    calendar: calendarReducer,
    pokemons: pokemonsReducer,
    table: tableReducer,
  });
export default createRootReducers;
