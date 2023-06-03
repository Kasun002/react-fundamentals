import ApiService from "../../services/APIService";
import { FullPokemon } from "./types";

export const fetchPokemon = async (index: number): Promise<FullPokemon> => {
  const response = await ApiService.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${index}`);
  return response.data
}
