import { defineStore } from 'pinia'
import { PokemonModel } from '../utils/types'
import { getPokemon } from '../composables/getPokemon'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    searchedPokemon: {} as PokemonModel,
    keptPokemons: [] as PokemonModel[],
  }),
  actions: {
    async fetchPokemons() {
      await getPokemon()
        .then((response) => {
          response.name =
            response.name[0].toUpperCase() + response.name.slice(1)
          this.searchedPokemon = response
        })
        .catch((error) => console.error(error))
    },
    catchPokemon(pokemon: PokemonModel) {
      this.keptPokemons.push(pokemon)
      this.fetchPokemons()
    },
    removeKeptPokemon(index: number) {
      this.keptPokemons.splice(index, 1)
    },
  },
})
