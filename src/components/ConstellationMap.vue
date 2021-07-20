<template>
  <v-container>
    <v-row v-if="$store.state.selected">
      <v-col></v-col>
      <v-col cols="10">
        <v-img style="width:100%" :src="imagePath" />
        <div class="caption pt-4 indigo--text text--lighten-3">
          The charts above were produced in collaboration with Sky & Telescope
          magazine (Roger Sinnott & Rick Fienberg). Alan MacRobert's
          constellation patterns, drawn in green in the charts, were influenced
          by those of H. A. Rey but in many cases were adjusted to preserve
          earlier traditions. The images are released under the Creative Commons
          Attribution 3.0 Unported license.
        </div>
      </v-col>

      <v-col />
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    imagePath: function() {
      let selected = this.$store.state.selected.toUpperCase();
      try {
        return require(`../assets/${selected}.gif`);
      } catch (e) {
        return require(`../assets/unknown.gif`);
      }
    },
  },
};
</script>

<style></style>
