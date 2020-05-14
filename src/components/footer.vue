<template lang="html">
  <section class="mt-12">
    <v-footer
        padless
        color="green lighten-1 white--text"
      >
        <v-row class="mt-5" wrap>
          <v-col cols="12" md="2"
              class="infor__section"
            >
            <h5 class="title mb-3 ml-3">Information</h5>
            <div v-for="link in infolinks" :key="link.name">
              <v-btn
                small
                depressed
                color="green lighten-1"
                class="info__btn my-1"
                >
                {{link.name}}
              </v-btn><br>
            </div>
          </v-col>
          <v-col cols="12" md="2"
              class="infor__section"
              offset-xs1
            >
            <h5 class="title mb-2 ml-3">Support</h5>
            <div v-for="link in supplinks" :key="link.name">
              <v-btn
                small
                depressed
                color="green lighten-1"
                class="info__btn my-1"
                >
                {{link.name}}
              </v-btn><br>
            </div>

          </v-col>
          <v-col cols="12" md="2"
              class="infor__section"
            >
            <h5 class="title mb-2 ml-3">Contact Us</h5>
            <div class="">
              <p class="ml-3 body-2">
                Level 10-1, Global Place,
                25th Street cor. 5th Avenue, 1630
                Bonifacio Global City
                Taguig City, Metro Manila
              </p>
              <v-btn
                small
                depressed
                color="green lighten-1"
                class="info__btn my-1"
                >
                Message Us
              </v-btn><br>
            </div>

          </v-col>
          <v-col cols="12" md="4"
              class="infor__section"
            >
            <h5 class="title">Partners</h5>
            <div class="">
              <img src="/logo.png" alt="" height="50px">
            </div>
          </v-col>
          <v-col
            class="green darken-1 py-4 text-center white--text"
            cols="12"
          >
          © 2018-2020 Zeend. All Rights Reserved.
          </v-col>
        </v-row>
    </v-footer>
  </section>
</template>

<script>

export default {

  data(){
    return {
      drawer:false,

        infolinks: [
          {name: 'Terms and Conditions', route: '/tnc'},
          {name: 'Privacy Policy', route: '/pripo'},
          {name: 'About us', route: '/about'},
          {name: 'Blogs', route: '/blog'},
        ],
        supplinks:[
          {name: 'FAQs', route: '/faqs'},
          {name: 'Help', route: '/Help'},
        ],
    }
  },

  components:{

  }

}
</script>

<style scoped>

.infor__section{
  margin-left: 2vw;
}

.info__btn{
  color: #FFF;
}


</style>
