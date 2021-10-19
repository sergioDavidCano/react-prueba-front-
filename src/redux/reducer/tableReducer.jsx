import { types } from "../types/types";
const initialState = {
  table: [],
};
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.tableSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.tableNewInfo:
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };

    case types.tableUpdated:
      return {
        ...state,
        table: state.table.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.tableDeleted:
      return {
        ...state,
        table: state.table.filter((e) => e.id !== state.activeEvent.id),
      };
    case types.tableLoaded:
      return {
        ...state,
        table: [...action.payload],
      };
    case types.tableLogout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
