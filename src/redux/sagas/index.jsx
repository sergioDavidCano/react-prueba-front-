import{all} from 'redux-saga/effects';
import pokemons from './pokemons';
export default function* rootSaga(){
   yield all([
       pokemons()
   ]);
}