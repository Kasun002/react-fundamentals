import React from 'react';
import PokemonRoute from './pokemen-route';
// import { Presenter } from '@/components/app/Presenter';
// import { useAppDispatch } from '@/store/hooks';
// import { fetchPokemonsThunk } from '@/store/pokemons/thunk';

const Pokemon: React.FC<NoProps> = () => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(fetchPokemonsThunk());
//   }, [dispatch]);  

  return <PokemonRoute />;
};

export default React.memo(Pokemon);