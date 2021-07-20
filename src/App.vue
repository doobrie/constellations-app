<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <span class="mr-2">The Constellations</span>
      </div>
    </v-app-bar>

    <v-main>
      <SelectConstellation />
      <ConstellationInfo />
      <ConstellationMap />
    </v-main>
  </v-app>
</template>

<script>
import SelectConstellation from './components/SelectConstellation';
import ConstellationInfo from './components/ConstellationInfo';
import ConstellationMap from './components/ConstellationMap';
export default {
  name: 'App',

  components: {
    ConstellationInfo,
    ConstellationMap,
    SelectConstellation,
  },

  data: () => ({
    //
  }),
};
</script>
