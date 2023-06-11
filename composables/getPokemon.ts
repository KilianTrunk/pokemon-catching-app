import { PokemonModel } from "~/utils/types";

export async function getPokemon(): Promise<PokemonModel> {
  const pokemonNumber = Math.floor(Math.random() * 1000) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
  const data = await response.json();
  const stats = {
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  };
  return {
    name: data.name,
    stats,
    mainAbility: data.abilities[0].ability.name,
    img: data.sprites.front_default,
  };
}