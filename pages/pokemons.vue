<template>
  <div class="d-flex flex-wrap flex-row">
    <v-col
      cols="2"
      v-if="pokemon.name"
      v-for="(pokemon, index) in store.keptPokemons"
      :key="index"
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="elevation-4" v-bind="props">
          <v-img :src="pokemon.img"></v-img>
          <v-card-title class="text-center">{{ pokemon.name }}</v-card-title>
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#036358"
            class="align-center justify-center"
          >
            <v-btn variant="flat" @click="showModal(pokemon, index)"
              >See more info</v-btn
            >
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
  </div>

  <v-dialog
    v-model="showStats"
    width="13rem"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <PokemonInfo :selectedPokemon="selectedPokemon" />
      <v-card-actions class="dflex justify-space-between">
        <v-btn @click="showStats = false">Close</v-btn>
        <v-btn
          size="large"
          style="background-color: red"
          color="white"
          density="compact"
          icon="mdi-trash-can"
          @click="
            store.removeKeptPokemon(selectedIndex),
              (showStats = false),
              (showSnackbar = true)
          "
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="showSnackbar" :timeout="1800" color="red" class="mt-5">
    Got rid of
    <span class="font-weight-bold">{{ selectedPokemon.name }}</span>
    !
  </v-snackbar>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { usePokemonStore } from '../store/index'
  import PokemonInfo from '~/components/PokemonInfo.vue'
  import { PokemonModel } from '~/utils/types'

  const store = usePokemonStore()
  const pokemon = computed(() => {
    return store.searchedPokemon
  })

  const showSnackbar = ref(false)

  const showStats = ref(false)
  const selectedPokemon = ref({} as PokemonModel)
  const selectedIndex = ref(69)

  const showModal = (pokemon: PokemonModel, index: number) => {
    selectedPokemon.value = pokemon
    selectedIndex.value = index
    showStats.value = true
  }
</script>
