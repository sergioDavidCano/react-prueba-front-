import { put, call, takeLatest } from "redux-saga/effects";
import { START_GET_POKEMONS, SUCCESS_GET_POKEMONS} from '../actions/pokemons';
import {apiCall} from '../api/index';
function* getPokemons({ payload }) {
  //Api call es para hacer la llamada a la api o backend que
  //necesitamos
  try { 
      const results = yield call(apiCall,'get', 'https://pokeapi.co/api/v2/pokemon');
     console.log('Hey la function esta escuchando');
     yield put({ type: SUCCESS_GET_POKEMONS, results});
  } catch (err) {}
}
//Wather vigila las acciones diparadas
export default function* pokemons() {
    yield takeLatest(START_GET_POKEMONS, getPokemons);
}
