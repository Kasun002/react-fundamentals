import React, { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchPokemonsThunk } from '../redux/pokemons/PokemenThunkAPI';
import PokemonRoute from './pokemen-route';

const Pokemon: React.FC<NoProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsThunk());
  }, [dispatch]);

  return <PokemonRoute />;
};

export default React.memo(Pokemon);