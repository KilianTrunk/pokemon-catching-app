<template>
  <v-card-title>{{ selectedPokemon.name }}</v-card-title>
  <v-card-subtitle
    >Health Points: {{ selectedPokemon.stats.hp }}</v-card-subtitle
  >
  <v-card-subtitle>Attack: {{ selectedPokemon.stats.attack }}</v-card-subtitle>
  <v-card-subtitle
    >Defense: {{ selectedPokemon.stats.defense }}</v-card-subtitle
  >
  <v-card-subtitle>Speed: {{ selectedPokemon.stats.speed }}</v-card-subtitle>
</template>

<script lang="ts">
  export default {
    props: {
      selectedPokemon: {
        type: Object,
        required: true,
      },
    },
  }
</script>
