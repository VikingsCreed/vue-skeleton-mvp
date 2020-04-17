<template>
  <div id="app">
    <v-container class="grey--text text--darken-4" red lighten-1 fluid>
      <p class="display-1 cardText">{{ landing.STARTINGINFO }}</p>
      <v-img src="./../../../public/ghost-2.png" class="ghost-img"></v-img>
      <v-img src="./../../../public/globe.png" class="globe-img"></v-img>
      <v-container grid-list-md text-xs-center fluid class="margin">
        <v-layout row wrap>
          <v-flex v-for="n in 3" :key="n">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card
                class="mx-auto cards grey--text text--darken-4"
                max-width="29em"
                min-width="25em"
                :elevation="hover ? 16 : 2"
              >
                <v-icon
                  class="material-icons margin"
                  size="80"
                  color="grey darken-4"
                >
                  {{ icons[n - 1] }}
                </v-icon>
                <h1 class="display-1 margin font-weight-bold">
                  {{ landing.infoCards[n - 1] }}
                </h1>
                <p class="cardInfoText">{{ landing.infoCardsDesc[n - 1] }}</p>
              </v-card>
            </v-hover>
          </v-flex></v-layout
        ></v-container
      >
    </v-container>
    <v-container class="infoCards" blue lighten-2 fluid> </v-container>
  </div>
</template>

<script>
export default {
  name: 'InfoCards',
  props: {
    landing: String
  },
  data() {
    return {
      icons: ['group', 'portrait', 'group_add']
    }
  }
}
</script>

<style scoped>
.margin {
  margin-top: 5%;
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
.ghost-img {
  height: 12%;
  width: 7%;
  min-width: 170px;
  position: absolute;
  margin-top: -10%;
  transform: rotate(15deg);
}
.globe-img {
  height: 5%;
  width: 7%;
  min-width: 150px;
  min-height: 150px;
  position: absolute;
  margin-top: -1%;
  margin-left: 85%;
}
</style>
