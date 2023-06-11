<template>
  <v-row justify="center">
    <v-col cols="5" v-if="pokemon.name">
      <PokemonSearchCard :pokemon="pokemon" />
      <div class="d-flex justify-end mt-5">
        <v-btn
          @click=";(showCatchDialog = true), catchPokemonDialog(pokemon)"
          color="green"
          class="mr-3"
          >Catch
          <template v-slot:prepend>
            <v-icon icon="mdi-plus-box" color="white"></v-icon></template
        ></v-btn>
        <v-btn @click="store.fetchPokemons" color="blue"
          >Search
          <template v-slot:prepend>
            <v-icon icon="mdi-magnify" color="white"></v-icon></template
        ></v-btn>
      </div>
    </v-col>
  </v-row>
  <v-dialog v-model="showCatchDialog" :scrim="false" persistent width="auto">
    <v-card :color="caughtOrNOt">
      <v-card-text>
        {{ catchDialogText }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="showSnackbar" :timeout="1800" color="green" class="mt-5">
    Caught
    <span class="font-weight-bold">{{ caughtPokemonName }}</span>
    !
  </v-snackbar>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue'
  import { usePokemonStore } from '../store/index'
  import { PokemonModel } from '~/utils/types'
  import PokemonSearchCard from '~/components/PokemonSearchCard.vue'

  const showCatchDialog = ref(false)
  const catchDialogText = ref('Attempting to catch the pokemon!')
  const caughtOrNOt = ref('purple')
  const showSnackbar = ref(false)
  const caughtPokemonName = ref('')

  const catchPokemonDialog = (pokemon: PokemonModel) => {
    setTimeout(() => {
      let isCaught = Math.floor(Math.random() * 100) + 1
      if (isCaught > 60) {
        catchDialogText.value = 'Pokemon has been caught!'
        caughtOrNOt.value = 'green'
        store.catchPokemon(pokemon)
        caughtPokemonName.value = pokemon.name
        showSnackbar.value = true
      } else {
        catchDialogText.value = 'Pokemon has been lost!'
        caughtOrNOt.value = 'red'
        store.fetchPokemons()
      }
    }, 3000)
    setTimeout(() => (showCatchDialog.value = false), 3800)
    catchDialogText.value = 'Attempting to catch the pokemon!'
    caughtOrNOt.value = 'purple'
  }

  const store = usePokemonStore()
  const pokemon = computed(() => {
    return store.searchedPokemon
  })
  onMounted(() => {
    store.fetchPokemons()
  })
</script>
