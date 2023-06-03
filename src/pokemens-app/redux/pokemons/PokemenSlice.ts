import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "./types";
import { fetchPokemonsThunk } from "./PokemenThunkAPI";

export const adapter = createEntityAdapter<PokemonState>();

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: adapter.getInitialState(),
    reducers: {
        addPokemon: (state, action: PayloadAction<PokemonState>) => {
            adapter.addOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonsThunk.fulfilled, (state, action) => {
            const pokemons = action.payload.map((fullPokemon) => ({
                id: fullPokemon.id,
                name: fullPokemon.name,
                stats: fullPokemon.stats,
                sprite: fullPokemon.sprites.front_default
            }));
            adapter.setAll(state, pokemons);
        });
    }
});