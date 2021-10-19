//Pokemos api
import {types} from '../types/types';
export const START_GET_POKEMONS = "START_GET_POKEMONS";
export const SUCCESS_GET_POKEMONS = "SUCCESS_GET_POKEMONS";
export const startGetPokemons = payload => ({
  type: types.START_GET_POKEMONS,
  ...payload,
});
export const successGetPokemons = payload => ({
  type: types.SUCCESS_GET_POKEMONS,
  ...payload,
});
