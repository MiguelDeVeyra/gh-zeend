<template>
  <v-app app>
    <navbar/>
    <v-content class="bg">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'App',

  components: {
    navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css" scoped>
.bg{
  background: #fff;
  font-family: 'Poppins';
  color: #1A202C;
}

</style>
