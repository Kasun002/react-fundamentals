import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemon } from '../../utils/fetchPokemon';
import { AsyncThunkConfig } from '../types';
import { FullPokemons } from '../../utils/types';

export const fetchPokemonsThunk = createAsyncThunk<FullPokemons, undefined, AsyncThunkConfig<Error>>
    ('api/getClaimEstimateThunk', async () => {
        const fetchers = [];

        for (let i = 1; i < 31; i++) {
            fetchers.push(fetchPokemon(i));
        }

        return await Promise.all(fetchers);
    });