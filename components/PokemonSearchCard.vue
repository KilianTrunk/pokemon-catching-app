<template>
  <v-card class="elevation-4 pt-3 pb-3">
    <div class="d-flex flex-no-wrap">
      <v-avatar class="ma-3" size="125" rounded="0">
        <v-img :src="pokemon.img"></v-img>
      </v-avatar>
      <v-divider vertical></v-divider>
      <div>
        <v-card-title class="text-h5">
          {{ pokemon.name }}
        </v-card-title>
        <v-card-subtitle
          ><div class="d-flex align-center">
            <v-icon icon="mdi-heart" color="green" class="pr-2"></v-icon>Health
            points:
            {{ pokemon.stats.hp }}
          </div></v-card-subtitle
        >
        <v-card-subtitle class="mt-1"
          ><div class="d-flex align-center">
            <v-icon icon="mdi-sword" color="red" class="pr-2"></v-icon>Attack:
            {{ pokemon.stats.attack }}
          </div></v-card-subtitle
        >
        <v-card-subtitle class="mt-1"
          ><div class="d-flex align-center">
            <v-icon icon="mdi-shield" color="blue" class="pr-2"></v-icon
            >Defence: {{ pokemon.stats.defense }}
          </div></v-card-subtitle
        >
        <v-card-subtitle class="mt-1"
          ><div class="d-flex align-center">
            <v-icon icon="mdi-fast-forward" color="purple" class="pr-2"></v-icon
            >Speed: {{ pokemon.stats.speed }}
          </div></v-card-subtitle
        >
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true,
      },
    },
  }
</script>
