<template lang="html">
  <section class="mt-12">
    <v-footer color="grey lighten-4 black--text">
      <v-row class="mx-auto mt-2">
        <v-col cols="12" md="3" class="offset-1">
          <h2 class="footer__header__title">Support</h2>
          <p><a href="#">Help</a></p>
          <p><a href="#">FAQs</a></p>
          <p><a href="#">Zeend Wallet</a></p>
          <p><a href="#">Payment Methods</a></p>
          <p><a href="#">Contact Us</a></p>
        </v-col>
        <v-col cols="12" md="3" class="ZeendAbt">
          <h2 class="footer__header__title">Zeend</h2>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Zeend Blog</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Merchant Account</a></p>
          <p><a href="#">Terms and Conditions</a></p>
        </v-col>
        <v-col cols="12" md="5" class="AppDL">
          <div class="app__head">
            <h3 class="footer__header__title">Download the App</h3>
          </div>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" md="5" class="offset-1">
          <span class="body-1">Follow us on: </span><i class="fa fa-facebook mr-2" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i>
        </v-col>
        <v-col cols="12" md="5" class="mt-2">
          <div class="text-center">
            © 2018-2020 Zeend. All Rights Reserved.
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </section>
</template>

<script>

export default {

  data(){
    return {

    }
  },

  components:{

  }

}
</script>

<style scoped>

a{
  text-decoration: none;
  color: black!important;
  font-size: .8em;
}
a:hover{
  color: #EC614B!important;
}

p{
  margin: 0 !important;
}
.footer__header__title{
  font-size: 1.1em;
  font-weight: lighter;
  margin-bottom:  1vh;
}
.app__head{
  margin-top: 8vh;
}
@media (max-width:900px){
    .app__head{
      margin-top: 0;
    }
}

@media (max-width:900px){
  .ZeendAbt, .AppDL{
    margin-left: 8vw;
  }
}

.fa{
  border-radius: 50%;
  font-size: .8em;
  width: 3em;
  height: 3em;
  text-align: center;
  padding-top: 13px
}

.fa-facebook{
  background: #3B5998;
  color: white;
  vertical-align: middle;
}

.fa-linkedin{
  background: #007bb5;
  color: white;
  vertical-align: middle;
}
</style>
