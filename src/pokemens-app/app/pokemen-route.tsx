import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../css/_app.css';
import Home from "../pages/Home";
import Pokemons from "../pages/Pokemons";
import { ROUTES } from "../utils/routes";

const PokemonRoute: React.FC<NoProps> = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <div className="app-container">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.POKEDEX} element={<Pokemons />} />
        {/* <Route path={ROUTES.POKEMON_DETAIL} element={<PokemonDetail />} />
          <Route path={ROUTES.MY_POKEMONS} element={<MyPokemons />} />
          <Route path={ROUTES.NETWORK_ERROR} element={<NetworkError />} />
          <Route element={<NotFound />} /> */}
      </Routes>
    </div>
  </div>
);

export default React.memo(PokemonRoute)