<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 3" :key="n">
            <v-card class="mx-auto" max-width="29.625em">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card
                  :elevation="hover ? 16 : 2"
                  class="d-flex pa-5 blue lighten-2 mx-auto"
                  width="400"
                  height="170"
                  max-width="29.625em"
                >
                  <v-card-text>
                    <p class="display-1 text--primary">
                      Create a Fireteam
                    </p>
                  </v-card-text>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      $14.99
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-card></v-flex
          ></v-layout
        ></v-container
      ></v-app
    >
  </div>
</template>

<script></script>
