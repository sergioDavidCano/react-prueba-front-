import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { startGetPokemons } from "../../redux/actions/pokemons";
export const Pokemons = () => {
  const dispatch = useDispatch();
  const [pokemonss, setPokemons] = useState([]);
  useEffect(() => {
    dispatch(startGetPokemons());
    setPokemons([{}, {}]);
  }, [dispatch]);
  // const { pokemons } = useSelector((state) => state);
  // const data = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* {pokemons.results.map((el) => (
        <h1>hola</h1>
      ))} */}
      <h1>HOla amikos</h1>
    </div>
  );
};
