import { types } from "../types/types";
export const pokemonsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.START_GET_POKEMONS:
      return {
        name: 'Loading',
        results: []
      };
    case types.SUCCESS_GET_POKEMONS:
      return {
        name: 'Success',
        results: action.results
      };
    default:
      return state;
  }
};
