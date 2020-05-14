<template lang="html">
  <nav>

    <!-- NAVBAR for md screens and up -->
    <v-app-bar
      app
      fixed
      color="#FFF"
      elevate-on-scroll
      class="hidden-sm-and-down"
      >
      <v-toolbar-title class="text-uppercase black--text logo__nav">
        <img src="/zlogoword.png" alt="" height="85px" class="pt-2 pb-2 d-none d-sm-flex">
        <img src="/zlogo.png" alt="" height="50px" class="pt-1 hidden-sm-and-up">
      </v-toolbar-title>



      <v-spacer></v-spacer>

      <div class="nav__btns">
        <v-btn text v-on="on" color="black" class="hidden-sm-and-down">
          <span class="hidden-sm-and-down">SHOP NOW</span>
        </v-btn>

          <span class="mx-5 black--text hidden-sm-and-down">|</span>

        <v-btn text v-on="on" color="black">
          <span class="hidden-sm-and-down">MERCHANT LOG IN</span>
          <span class="hidden-md-and-up">LOG IN</span>
        </v-btn>

        <span class="mx-2 black--text">|</span>

        <v-btn text  color="black">
          <span class="hidden-sm-and-down">MERCHANT SIGN UP</span>
          <span class="hidden-md-and-up">SIGN UP</span>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- PPBAR FOR MOBILE -->
    <v-app-bar
      app
      fixed
      color="#FFF"
      elevate-on-scroll
      class="hidden-md-and-up"
      >
      <v-toolbar-title class="text-uppercase black--text logo__nav">
        <img src="/zlogoword.png" alt="" height="85px" class="pt-5 pb-3">
      </v-toolbar-title>



      <v-spacer></v-spacer>

      <div class="nav__btns">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    >
      <v-list
        nav

      >
        <v-list-item-group
          v-model="group"
          active-class="blue-grey lighten-4 text--accent-4"
        >
          <v-list-item>
            <span>Shop Now</span>
          </v-list-item>

          <v-list-item>
            <span>Merchant Log-in</span>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Merchant Sign Up</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {

  data(){
    return {
      drawer:false,
      links:[
        {icon: 'dashboard', text: 'Dashboard', route: '/'},
        {icon: 'folder', text: 'My Projects', route: '/projects'},
        {icon: 'person', text: 'Team', route: '/team'}
      ],
      snackbar: false
    }
  },

  components:{

  }

}
</script>

<style scoped>
.logo__nav{
  margin-left: 7%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
