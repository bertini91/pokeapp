import { create } from "zustand";
import { IPokemon, IPokemonDetails } from "../interfaces";

interface IPokemonStore {
  pokemons: [IPokemon] | [];
  total: number;
  next: null | string;
  previous: null | string;
  pokemonDetail: IPokemonDetails | null;
  setPokemons: (by: []) => void;
  setTotal: (by: number) => void;
  setNext: (by: string | null) => void;
  setPrevious: (by: string | null) => void;
  restore: () => void;
  setPokemonDetail: (by: IPokemonDetails) => void;
  resetPokemonDetail: () => void;
}

export const usePokemonStore = create<IPokemonStore>()((set) => ({
  pokemons: [],
  total: 0,
  next: "",
  previous: "",
  pokemonDetail: null,
  setPokemons: (by) => set((state) => ({ pokemons: by })),
  setNext: (by) => set((state) => ({ next: by })),
  setPrevious: (by) => set((state) => ({ previous: by })),
  setPokemonDetail: (by) => set((state) => ({ pokemonDetail: by })),
  resetPokemonDetail: () => set((state) => ({ pokemonDetail: null })),
  setTotal: (by) => set((state) => ({ total: by })),
  restore: () => set(() => ({ pokemons: [], set: 0, total: 0 })),
}));
