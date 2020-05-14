<template>
  <v-app app>
    <navbar/>
      <v-content class="bg">
        <router-view></router-view>
      </v-content>
    <zfooter/>
  </v-app>
</template>
<script>
import navbar from './components/navbar.vue';
import zfooter from './components/footer.vue';

export default {
  name: 'App',

  components: {
    navbar,
    zfooter
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
