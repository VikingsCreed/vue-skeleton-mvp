<!-- Kode skrevet av Robin Elligsen -->
<template>
  <div id="app">
    <v-container class="grey--text text--darken-4" red lighten-1 fluid>
      <v-img
        src="./../../../public/aboutStyle1.png"
        class="aboutStyle1-img"
      ></v-img>
      <p class="display-1 cardText">{{ about.WELCOME }}</p>
      <v-container grid-list-md text-xs-center fluid class="margin">
        <v-layout row wrap>
          <v-flex v-for="n in 1" :key="n">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card
                class="mx-auto cards grey--text text--darken-4"
                max-width="52em"
                min-width="20em"
                :elevation="hover ? 16 : 2"
              >
                <h1 class="display-1 margin font-weight-bold">
                  {{ about.why[n - 1] }}
                </h1>
                <p class="cardInfoText">{{ about.infowhy[n - 1] }}</p>
              </v-card>
            </v-hover>
          </v-flex></v-layout
        >
      </v-container>
    </v-container>
    <v-container class="grey--text text--darken-4" blue lighten-2 fluid>
      <v-img
        src="./../../../public/aboutStyle2.png"
        class="aboutStyle2-img"
      ></v-img>
      <v-container grid-list-md text-xs-center fluid class="margin">
        <v-layout row wrap>
          <v-flex v-for="n in 1" :key="n">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card
                class="mx-auto cards grey--text text--darken-4"
                max-width="52em"
                min-width="20em"
                :elevation="hover ? 16 : 2"
              >
                <h1 class="display-1 margin font-weight-bold">
                  {{ about.how[n - 1] }}
                </h1>

                <i class="margin"></i>
                <p class="cardInfoText">{{ about.infohow[n - 1] }}</p>
              </v-card>
            </v-hover>
          </v-flex></v-layout
        ></v-container
      >
    </v-container>
    <v-container class="grey--text text--darken-4" red lighten-1 fluid>
      <v-img
        src="./../../../public/aboutStyle3.png"
        class="aboutStyle3-img"
      ></v-img>
      <v-container grid-list-md text-xs-center fluid class="margin">
        <v-layout row wrap>
          <v-flex v-for="n in 1" :key="n">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card
                class="mx-auto cards grey--text text--darken-4"
                max-width="52em"
                min-width="20em"
                :elevation="hover ? 16 : 2"
              >
                <h1 class="display-1 margin font-weight-bold">
                  {{ about.what[n - 1] }}
                </h1>
                <i class="margin"></i>
                <p class="cardInfoText">{{ about.whatisit[n - 1] }}</p>
              </v-card>
            </v-hover>
          </v-flex></v-layout
        ></v-container
      >
    </v-container>
    <v-container class="grey--text text--darken-4" blue lighten-2 fluid>
      <v-img
        src="./../../../public/aboutStyle4.png"
        class="aboutStyle4-img"
      ></v-img>
      <v-container grid-list-md text-xs-center fluid class="margin">
        <v-layout row wrap>
          <v-flex v-for="n in 1" :key="n">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card
                class="mx-auto cards grey--text text--darken-4"
                max-width="52em"
                min-width="20em"
                :elevation="hover ? 16 : 2"
              >
                <h1 class="display-1 margin font-weight-bold">
                  {{ about.hello[n - 1] }}
                </h1>
                <i class="margin"></i>
                <p class="cardInfoText">{{ about.inqury[n - 1] }}</p>
              </v-card>
            </v-hover>
          </v-flex></v-layout
        ></v-container
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutCards',
  props: {
    about: String
  }
}
</script>

<style scoped>
.margin {
  margin-top: 5%;
  margin-bottom: 5%;
}
.cards {
  background-color: transparent;
  height: 450px;
}
.cardText {
  width: 70%;
  margin-left: 15%;
  text-align: center;
  margin-top: 5%;
}
.cardInfoText {
  width: 90%;
  text-align: center;
  margin-left: 5%;
  margin-top: 15%;
  padding-bottom: 10%;
  font-size: 1.5em;
}
.aboutStyle1-img {
  height: 10%;
  width: 33%;
  position: absolute;
  margin-top: 1%;
  margin-left: 0%;
}
.aboutStyle2-img {
  height: 11%;
  width: 33%;
  position: absolute;
  margin-top: 1%;
  margin-left: 65%;
}
.aboutStyle3-img {
  height: 8%;
  width: 33%;
  position: absolute;
  margin-top: 4%;
  margin-left: 0%;
}
.aboutStyle4-img {
  height: 10%;
  width: 27%;
  position: absolute;
  margin-top: 5%;
  margin-left: 69%;
}
@media only screen and (max-width: 800px) {
  .aboutStyle1-img {
    visibility: hidden;
  }
  .aboutStyle2-img {
    visibility: hidden;
  }
  .aboutStyle3-img {
    visibility: hidden;
  }
  .aboutStyle4-img {
    visibility: hidden;
  }
  .mobile {
    font-size: 5em !important;
    margin-left: 25%;
  }
}
@media only screen and (max-width: 450px) {
  .cardText {
    width: 100%;
    margin-left: 0;
  }
  .cards {
    height: 550px;
  }
  .mobile {
    margin-left: 0;
  }
}
</style>
