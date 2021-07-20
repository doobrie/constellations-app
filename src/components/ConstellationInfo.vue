<template>
  <v-container>
    <v-row v-if="$store.state.selected">
      <v-col></v-col>
      <v-col cols="8">
        <div class="text-center mb-2">
          <span class="indigo--text text--lighten-3 ">Name:</span>
          {{ $store.getters.selectedConstellation.text }}
        </div>
        <div class="text-center mb-2">
          <span class="indigo--text text--lighten-3 ">Abbreviation:</span>
          {{ $store.getters.selectedConstellation.value }}
        </div>
        <div class="text-center mb-2">
          <span class="indigo--text text--lighten-3 ">Description:</span>
          {{ $store.getters.selectedConstellation.description }}
        </div>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
