<template>
  <v-app id="app">
    <main>
      <v-container fgrid-list-md text-xs-center fluid>
        <v-layout row warp>
          <v-flex v-for="n in 3" :key="n" class="text-xs-center">
            <v-card class="mx-auto" max-width="29.625em">
              <v-img src="./../../../public/emblem.jpg" class="profile-card">
                <br />
                <v-col class="d-flex emblem-text">
                  <v-card-title
                    class="justify-end display-1 font-weight-thin race-text"
                    >Human Warlock</v-card-title
                  >
                  <v-card-title class="justify-end display-1">900</v-card-title>
                </v-col>
              </v-img>
              <v-container>
                <v-layout row warp>
                  <v-flex>
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="./../../../public/xenofage.jpg"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>Xenofage Machine Gun</span></v-tooltip
                    >
                    <v-flex class="gear-info mx-auto"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                        />900
                      </p></v-flex
                    >
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      selection: 1,
      steam: String,
      test: [1, 2, 3],
      race: [],
      cls: [],
      light: [],
      emblem: [],
      weapons: {
        icon: [],
        lightlvl: [],
        singe: []
      },
      armour: {
        icon: [],
        lightlvl: [],
        singe: []
      }
    }
  },
  mounted() {
    const steamId = this.getSteamId()
    this.steam = steamId
    for (let i = 0; i > this.card.length; i++) {}
  },
  methods: {
    getSteamId() {
      return '4611686018479295544'
    }
  }
}
</script>
<style scoped>
.afinity {
  width: 13px;
  margin-top: 4px;
  margin-left: -8px;
}
.gear-info {
  position: absolute;
  width: 90px;
  height: 20px;
  margin-top: -20px;
  z-index: 10;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(255, 0, 0, 0)
  );
}
.gear-text {
  margin-top: -5px;
  margin-right: 30px;
  color: white;
}
.item-img {
  height: 90px;
  width: 90px;
  z-index: 1;
}
.profile-card {
  width: 29.625em;
  height: 6em;
}
.emblem-text {
  margin-top: -12px;
}
.race-text {
  margin-right: -30px;
}
</style>
