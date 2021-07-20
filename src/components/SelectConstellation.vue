<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="8">
        <v-select
          hide-details
          :items="constellations"
          label="Select a constellation"
          solo
          dense
          @change="selectConstellation"
        ></v-select>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    selectConstellation(abbreviation) {
      this.$store.commit('selectConstellation', abbreviation);
    },
  },
  computed: {
    constellations() {
      return this.$store.state.constellations;
    },
  },
};
</script>

<style></style>
