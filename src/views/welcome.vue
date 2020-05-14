<template>
  <div class="welcome">
    <!-- HERO HEADER -->
    <section class="hidden-sm-and-down">
      <v-row class="initial__row" wrap>
        <v-col cols="12" md="5">
          <div class="circle__clip">
            <h2 class="hero__header d-none d-lg-flex">Instant website <br> for your business!</h2>
            <h2 class="hero__header d-none d-md-flex d-lg-none">Instant website <br> for your business!</h2>
            <div class="hero__text">
              <p>Do you own a grocery, pharmacy, hardware, rice store or </p>
              <p>other business establishments? Build a <span class="red--text font-weight-bold">free!</span> website</p>
              <p> for your business with <span class="green--text font-weight-bold">Zeend.com</span> !</p>
            </div>
            <v-btn
              depressed
              x-large
              color="#EC614B"
              class="hero__button mt-2 font-weight-bold white--text"
            >SIGN UP NOW <v-icon class="ml-5">arrow_forward</v-icon> </v-btn>

          </div>
        </v-col>
        <v-col cols="12" md="7" class="hidden-xs-and-down">
          <div class="clip">
            <img src="/groco.svg"  class="image__clip">
          </div>
        </v-col>
      </v-row>
    </section>
    <!-- MOBILE HERO HEADER -->
    <div class="hero__header__small__screen hidden-md-and-up">
      <v-row>
        <div class="mobile__text__Wrapper">
          <h2 class="mobile__hero__tile black--text font-weight-bold">Instant website <br> for your business!</h2>
          <p class=" font-weight-regular black--text mr-12">Do you own a grocery, pharmacy, hardware,
            rice store or other business establishments? build a
            <span class="red--text font-weight-bold">free!</span>
            website for your business <br> with
            <span class="green--text font-weight-bold">Zeend.com</span> !
          </p>
          <v-btn
            depressed
            large
            color="#09bb00"
            class=" mt-2 font-weight-bold white--text"
          >SIGN UP NOW <v-icon class="ml-5">arrow_forward</v-icon> </v-btn>
        </div>
        <div class="">
          <img src="/groco.svg"  class="image__clipper mobile">
        </div>
      </v-row>
    </div>
    <!-- END OF HERO HEADER -->

    <!-- WHY YOUR BUSINESS NEEDS A WEB -->
    <section>
      <div class="why__zeend mx-5">
        <div class="text-center">
          <h1 class="why__zeend__header">Why your business needs a <span class="green--text">website</span> </h1>
        </div>
          <v-row wrap class="why__first__row">
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto"
                  width="100%"
                  src="/aroundtheworld.svg"
                >
                </v-img>

                <h3 class="pb-1 pt-7 text-center title-1">Wide Market Visibility</h3>

                <v-card-text class="text--primary text-center ">
                  <p class="body-1">Having an online store means <br> wider market reach, which  <br> means more customers!</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto"
                    @click="dialog=true"
                  >
                    Learn more
                  </v-btn>
                  <v-dialog
                    v-model="dialog"
                    max-width="700"
                    height="400"
                  >
                    <v-card>
                      <v-card-title class="headline">Wide Market Visibility</v-card-title>
                      <v-img
                        class="white--text mx-auto my-5"
                        width="50%"
                        src="/aroundtheworld.svg"
                      >
                      </v-img>
                      <v-card-text class="subtitle-1">
                        The market for your brick-and-mortar store is limited to customers who can physically visit your establishment.
                        But if you have an online store at the same time, you have absolutely wider market reach,
                        anyone can practically see and visit your online store.
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto mt-7"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto"
                  width="100%"
                  src="/addrev.svg"
                >
                </v-img>

                <h3 class="pb-1 pt-5 text-center title-1">Additional Revenue</h3>

                <v-card-text class="text--primary text-center">
                  <p class="vody-1">Having a website for your business <br> means new soruce of revenue!</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto mt-5"
                    @click="dialog1=true"
                  >
                    Learn more
                  </v-btn>
                  <v-dialog
                    v-model="dialog1"
                    max-width="700"
                  >
                    <v-card>
                      <v-card-title class="headline">Additional Revenue</v-card-title>
                      <v-img
                        class="white--text mx-auto my-5"
                        width="50%"
                        src="/addrev.svg"
                      >
                      </v-img>
                      <v-card-text class="subtitle-1">
                        Having a website for your business means new source of revenue or sales.
                        Customers are gradually adapting the online shopping trend because of its convenience.
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog1 = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto mt-7"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto"
                  width="70%"
                  src="/time.svg"
                >
                </v-img>

                <h3 class="pb-1 pt-7 text-center title-1">Open 24/7</h3>

                <v-card-text class="text-center body-1">
                  <p class="vody-1">Your customers can shop <br> any time of the day!</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto mt-6"
                    @click="dialog2 =true"
                  >
                    Learn more
                  </v-btn>
                  <v-dialog
                      v-model="dialog2"
                      max-width="700"
                    >
                      <v-card>
                        <v-card-title class="headline">Open 24/7</v-card-title>
                        <v-img
                          class="white--text mx-auto my-5"
                          width="50%"
                          src="/time.svg"
                        >
                        </v-img>
                        <v-card-text class="subtitle-1">
                          One of the advantages of having an online store is because it is open 24 hours a day.
                          Your customers can shop anytime of the day and any day of the week, including holidays.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog2 = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto mt-7"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto"
                  width="100%"
                  src="/paymentstripe.svg"
                >
                </v-img>

                <h3 class="pb-1 pt-5 text-center title-1">Payment Gateway</h3>

                <v-card-text class="text--primary text-center">
                  <p class="vody-1">Accept other payment options such as <br> debit or credit cards, online banking, remmitance or e-wallets</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto mt-5"
                    @click="dialog3=true"
                  >
                    Learn more
                  </v-btn>
                  <v-dialog
                      v-model="dialog3"
                      max-width="700"
                    >
                      <v-card>
                        <v-card-title class="headline">Additional Revenue</v-card-title>
                        <v-img
                          class="white--text mx-auto my-5"
                          width="70%"
                          src="/paymentstripe.svg"
                        >
                        </v-img>
                        <v-card-text class="subtitle-1">
                          Small and medium business establishments normally  accept cash payments only.
                          With a website there are many payment options such as payment gateways for debit and credit cards,
                          over-the-conter (OTC), online banking, remittance centers and e-wallets.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog3 = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto mt-8"
                  width="100%"
                  src="/transact.svg"
                >
                </v-img>

                <h3 class="pb-1 mt-12 text-center title-1">Automated Transactions</h3>

                <v-card-text class="text--primary text-center ">
                  <p class="body-1">Managing your online store does not require additonal staff</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto mt-9"
                    @click="dialog4=true"
                  >
                    Learn more
                  </v-btn>
                  <v-dialog
                      v-model="dialog4"
                      max-width="700"
                    >
                      <v-card>
                        <v-card-title class="headline">Automated Transactions</v-card-title>
                        <v-img
                          class="white--text mx-auto my-5"
                          width="70%"
                          src="/transact.svg"
                        >
                        </v-img>
                        <v-card-text class="subtitle-1">
                          Selling online is now simple and easy with new technologies.
                          Managing online store does not require additional staff or personnel.
                          Customers can shop in your  online store themselves without assitance of sales clerk or cashier.
                          The sales or transactions are also automatically recorded.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog4 = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="px-5">
              <v-card
                class="mx-auto mt-7"
                max-width="350"
                flat
              >
                <v-img
                  class="white--text mx-auto"
                  width="84%"
                  src="/adverttwo.svg"
                >
                </v-img>

                <h3 class="pb-1 pt-5 text-center title-1">Advertise your store</h3>

                <v-card-text class="text--primary text-center mb-1">
                  <p class="vody-1">  Online presence is an effective and <br> cost efficient (if not free) way of <br> promoting your business. </p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="#09bb00"
                    text
                    class="mx-auto mt-4"
                    @click="dialog5=true"
                  >
                    Learn More
                  </v-btn>
                  <v-dialog
                      v-model="dialog5"
                      max-width="700"

                    >
                      <v-card>
                        <v-card-title class="headline">Advertise your store</v-card-title>
                        <v-img
                          class="white--text mx-auto my-5"
                          width="70%"
                          src="/adverttwo.svg"
                        >
                        </v-img>
                        <v-card-text class="subtitle-1">
                          Online presence is an effective and cost efficient (if not free) way of promoting your business.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog5 = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
      </div>
    </section>

    <!--  How to signup on Zeend Process [md and up screens]-->
    <section class="mx-12  how__section">
      <div class="steps__header my-12">
        <h2 class="how__section__head">How to Sign-up as a merchant at <span class="green--text">Zeend.com</span></h2>
      </div>
      <v-carousel
        show-arrows-on-hover
        hide-delimiter-background
        class="hidden-sm-and-down"
        height="550px"
      >
        <v-carousel-item class="step__one">
          <v-row class="pb-1"
            >
            <!-- for desktops -->
            <v-col cols="5" >
              <img src="/forms.svg" alt="" height="80%" class="pl-10">
            </v-col>
            <v-col cols="7" class="pl-12" >
              <h1>1. Create a seller account</h1>
              <ul>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-12">arrow_forward</v-icon>
                  Signup for free in the <span class="green--text">Zeend</span> Merchant Account
                </li>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-12">arrow_forward</v-icon>
                  Input store details (category, name, address)
                </li>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-12">arrow_forward</v-icon>
                  Upload business permit and governement ID
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item class="step__two">
          <v-row class="pb-12"
            wrap
            >
            <v-col cols="5">
              <img src="/addboy.svg" alt="" height="90%" class="pl-12 ml-12">
            </v-col>
            <v-col cols="7" class="step__two__col__text">
              <h1>2. Set Up your prodcuts</h1>
              <ul>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5">arrow_forward</v-icon>
                  Set Up your prodcuts on your <span class="green--text">Zeend</span> Merchant Website or Mobile App
                </li>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-2">arrow_forward</v-icon>Set Up prodcuts on your online store choose from:
                </li>
                <li class="pt-5 title">
                  <span class="ml-12 pl-12 green--text"><v-icon class="black--text mr-5">radio_button_unchecked</v-icon>Zeend</span> catalogue <br>
                </li>
                <li class="pt-5 title">
                  <span class="ml-12 pl-12"><v-icon class="black--text mr-5">radio_button_unchecked</v-icon>Own product</span><br>
                </li>
              </ul>

            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item class="step__three">
          <v-row class="pb-12"
            color="red"
            >
            <v-col cols="5" >
              <img src="/manage.svg" alt="" height="45%" class="pl-10">
            </v-col>
            <v-col cols="7">
              <h1>3. Manage Store</h1>
              <ul>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-8">arrow_forward</v-icon>
                  View your stores performance at
                  <span class="green--text">Zeend</span> Merchant Account or Mobile App
                </li>
                <li class="pt-5 title">
                  <v-icon class="black--text ml-5 mr-8">arrow_forward</v-icon> Manage your orders and monitor your sales
                </li>
              </ul>

            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item class="step__four">
          <v-row class="pb-12"
            color="red"
            >
            <v-col cols="5" >
              <img src="/conggrats.svg" alt="" height="58%" class="pl-12">
            </v-col>
            <v-col cols="7">
              <h1 class="congrats">4.  <span class="congrats">Congratulations! </span>you are now ready to sell online!</h1>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </section>

    <!--  How to signup on Zeend Process [md and down screens]-->
    <section>
      <v-row wrap class=" how__mobile hidden-md-and-up">
        <v-col cols="12" sm="6" class="px-5">
          <v-card
            class="mx-auto"
            max-width="350"
            flat
          >
            <v-img
              class="white--text mx-auto"
              width="100%"
              src="/forms.svg"
            >
            </v-img>

            <h3 class="pb-1 pt-7 text-center title-1">1. Create a Merchant account</h3>

            <v-card-text class="body-2 text-center ">
              <ul>
                <li class="pt-5 pr-5">
                  <div class="body-2">
                    <v-icon class="black--text mr-5">arrow_forward</v-icon> Signup for free in the <span class="green--text">Zeend</span> <br>Merchant Account
                  </div>
                </li>
                <li class="pt-5 pr-4">
                  <div class="body-2">
                    <v-icon class="black--text mr-5">arrow_forward</v-icon> Input store details (category,  <span class="ml-12"> name, address) Merchant Center</span>
                  </div>
                </li>
                <li class="pt-5 pr-5">
                  <div class="body-2">
                    <v-icon class="black--text mr-5">arrow_forward</v-icon> Upload business permit and governement ID
                  </div>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="px-5">
          <v-card
            class="mx-auto"
            max-width="350"
            flat
          >
            <v-img
              class="white--text mx-auto"
              width="100%"
              src="/addboy.svg"
            >
            </v-img>

            <h3 class="pb-1 pt-7 text-center title-1">2. Set Up your Products</h3>

            <v-card-text class="body-2 text-center ">
              <ul>
                <li class="pt-5 pr-5">
                  <v-icon class="black--text mr-5">arrow_forward</v-icon> Set Up Products on your <span class="green-text">Zeend</span> <span class="ml-5">Merchant Center or Zeend Mobile App</span>
                </li>
                <li class="pt-5 pr-1">
                  <v-icon class="black--text mr-5">arrow_forward</v-icon> Set Up Products on your store, choose from:
                </li>
                <li class="pt-5 title">
                  <div class=" body-2">
                    <v-icon class="black--text pr-3">arrow_right</v-icon><span class="green--text">Zeend</span> catalogue<br>
                  </div>
                </li>
                <li class="pt-5 title">
                  <div class="mr-10 body-2">
                    <v-icon class="black--text mx-4">arrow_right</v-icon>Own Products<br>
                  </div>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="px-5">
          <v-card
            class="mx-auto"
            max-width="350"
            flat
          >
            <v-img
              class="white--text mx-auto"
              width="100%"
              src="/manage.svg"
            >
            </v-img>

            <h3 class="pb-1 pt-7 text-center title-1">3. Manage Store</h3>

            <v-card-text class="body-2">
              <ul>
                <li class="pt-5 pr-4 text-center">
                  <v-icon class="black--text mr-2">arrow_forward</v-icon> View your stores performance at
                  <span class="green--text"> Zeend</span> MerchantCenter Website or Mobile App
                </li>
                <li class="pt-5 pr-4 text-center">
                  <v-icon class="black--text mr-2">arrow_forward</v-icon> Manage your orders and monitor your sales
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="px-5">
          <v-card
            class="mx-auto"
            max-width="350"
            flat
          >
            <v-img
              class="white--text mx-auto"
              width="82%"
              src="/conggrats.svg"
            >
            </v-img>

              <h1 class="congrats__mobile">4. <span>Congratulations! </span>you are now ready to sell online!</h1>

            <v-card-text class="body-2">
              <ul>

              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Big Sign up button -->
    <section>
      <!-- Desktop CTA -->
      <div class="call__to__action hidden-sm-and-down">
        <h3 class="text-center cta">Ready to get Started? <span>It's free</span> </h3>
        <div class="text-center">
          <v-btn
            depressed
            rounded
            x-large
            outlined
            color="#EC614B"
            height="80"
          >
            CLICK HERE TO SIGN UP
          </v-btn>
        </div>
      </div>
      <!-- Mobile CTA -->
      <div class="call__to__action hidden-md-and-up">
        <h3 class="text-center ctam">Ready to get Started? <span>It's free</span> </h3>
        <div class="my-2 text-center">
          <v-btn
            depressed
            large
            outlined
            rounded
            color="#EC614B"
            class="font-weight-bold"
          >
            CLICK HERE TO SIGN UP
          </v-btn>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <section class="mt-12">
      <v-footer
          color="green lighten-1"
          padless
        >
          <v-row
            justify="center"
            no-gutters
          >
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              class="my-2"
            >
              {{ link }}
            </v-btn>
            <v-col
              class="green darken-1 py-4 text-center white--text"
              cols="12"
            >
            © 2018-2020 Zeend. All Rights Reserved.
            </v-col>
          </v-row>
      </v-footer>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data(){
    return {
      links: [
        'Home',
        'Priavacy Policy',
        'Terms and Conditions',
        'About Zeend',
        'Services',
        'Blog',
        'Contact Us',
      ],
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
    };
  },
};
</script>

<style lang="css" scoped>
body{
  width: 100%;
  height: auto;
  overflow: hidden;
}

.initial__row{
  margin-bottom: 10%;
}

.circle__clip{
  margin-top: 20%;
  margin-left: 11%;
}


@media (max-width: 1050px) {
  .circle__clip{
    margin-top: 20%;
  }
}

.clip{
  margin-top: 2%;
}

.hero__header{
  margin-left: 11%;
  font-size: 6vh;
  padding-bottom: 2vh;
}


.hero__text{
  margin-left: 11%;
  font-size: 1vw;
  padding-bottom: 1vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

@media (max-width: 1330px) {
  .hero__text{
    margin-left: 11%;
    padding-bottom: 1vh;
    font-size: 80%;
  }
  .hero__header{
    margin-left: 11%;
    margin-top: 20%;
    font-size: 4vh;
    padding-bottom: 2vh;
  }
}

@media (max-width: 1030px) {
  .hero__text{
    margin-left: 11%;
    padding-bottom: 1vh;
    font-size: 72%;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
  .hero__header{
    margin-left: 11%;
    margin-top: 25%;
    font-size: 2vh;
    padding-bottom: 2vh;
  }
}

.hero__button{
  margin-left: 11%;
}

.image__clipper.mobile{
  filter: brightness(98%);
  width: 100vw;
  margin-left: 10vw;
  height: 30vh;
  margin-bottom: 10vh;
}

.image__clip{
  max-width: 1200;
  max-height: 1000px;
  /*clip-path: ellipse(63% 53% at 64% 44%);  cicle */
  /* clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0 70%); left point */
  /* clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); */

  width: 100%;
  filter: brightness(98%);
}

.hero__header__small__screen{
  width: 100%;
}

.mobile__text__Wrapper{
  width: 100%;
  position: relative;
  margin-top: 10%;
  margin-left: 11%;
  font-size: 2vh;
}
@media (max-width: 998px) {
  .mobile__text__Wrapper{
    margin-top: 10%;
  }
}

.mobile__hero__tile{
  font-size: 4vh;
}

.why__zeend{
  margin-top: 5%;
}

.mobile{
  margin-top: 10vh;
}

.why__first__row{
  margin-top: 3%;
}

.why__second__row{
  margin-top: 2%;
}

.upper__svg__why{
  background: #CDF1CC;
}
.why__zeend__header{
  font-family: 'Poppins';
  font-size: 4vh;
  font-weight: 600;
}

.how__section h2{
  margin-top: 10vh;
  margin-bottom: 2vh;
  font-size: 3vh;
}

.how__section ul{
  list-style: none;
}

.how__section__head{
  text-align: center !important;
  font-size: 4vh;
  text-align: center !important;
}

@media (max-width: 1366px) {
  .step__two img{
    height: 60%;
  }
  .step__two__col__text{
    padding-left: 5vh;
  }
}

@media (max-width: 1024px) {
  .step__one h1{
    font-size: 2vh;
  }
  .step__one img{
    height: 50%;
  }
  .step__two h1{
    font-size: 2vh;
  }
  .step__two img{
    height: 48%;
  }
  .step__two__col__text{
    padding-left: 5vh;
  }
  .step__three h1{
    font-size: 2vh;
  }
  .step__three img{
    height: 35%;
  }
  .step__four h1{
    font-size: 2vh;
  }
  .step__four img{
    height: 50%;
  }
}

.congrats{
  text-align: center;
  vertical-align: middle;
  margin-top: 15%;
  width: 70%;
  font-size: 4vh;
}

.congrats span{
  color: #EC614B;
}

.congrats__mobile{
  text-align: center;
  margin-top: 10%;
  font-size: 3vh;
}

.congrats__mobile span{
  color: #EC614B;
}

.how__mobile ul{
  list-style: none;
}

.call__to__action{
  margin-left: 20px;
  margin-right: 20px;
}
.call__to__action h2{
  font-size: 4vh;
}

.call__to__action .v-btn{
  color:#EC614B!important;
  border: 3px solid #EC614B;
  width: 30%;
  font-weight: 900;
  font-size: 2vh;
}

@media (max-width: 1366px) {
  .call__to__action .v-btn{
    color:#EC614B!important;
    border: 2px solid #EC614B;
    width: 40%;
    font-weight: 900;
    font-size: 100%;
  }
}


.cta{
  font-size: 4vh;
  margin-bottom: 2vh;
}

.cta span{
  color: #EC614B;
}

.ctam{
  font-size: 2vh;
  margin-bottom: 2vh;
}

.ctam span{
  color: #EC614B;
}
</style>
