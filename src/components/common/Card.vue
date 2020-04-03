<template>
  <div id="app">
    <v-app id="inspire">
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
      <v-container grid-list-md text-xs-center fluid>
        <v-layout row warp id="cards">
          <v-flex v-for="n in 3" :key="n">
            <v-card class="mx-auto" max-width="29.625em">
              <v-img v-bind:src="bungie + emblem[n - 1]" class="profile-card">
                <br />
                <v-col class="d-flex emblem-text">
                  <v-card-title
                    class="justify-end display-1 font-weight-thin race-text"
                    >{{ race[n - 1] }} {{ cls[n - 1] }}</v-card-title
                  >
                  <v-card-title class="justify-end display-1">{{
                    light[n - 1]
                  }}</v-card-title>
                </v-col>
              </v-img>
              <v-container>
                <v-layout>
                  <v-flex>
                    <v-tooltip right max-width="80px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          src="https://www.bungie.net/common/destiny2_content/icons/ce681395733e3b2cfe86d538e74416b5.png"
                          class="class-img mx-auto"
                        ></v-img> </template
                      ><span>Dawnblade</span></v-tooltip
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
                    <v-flex class="gear-info"
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
    </v-app>
  </div>
</template>
<script>
/* eslint-disable no-undef */
// ! API KEY
const apiKey = '50f95795086b4612a97afa04a35c9211'
// * Default links for player info, images and definitions
const bungieLink = 'https://www.bungie.net/Platform/Destiny2'
const bungieSteamID =
  'https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/SteamId/'
const bungie = 'https://www.bungie.net'
const bungieManifest = `${bungieLink}/Manifest`
const bungieItem = `${bungieManifest}/DestinyInventoryItemDefinition/`
let width = 0
export default {
  name: 'Card',
  data() {
    return {
      membership: String,
      bungie: 'https://www.bungie.net',
      test: [1, 2, 3],
      characters: [],
      race: [],
      raceManifest: String,
      raceHash: [],
      cls: [],
      clsManifest: String,
      clsHash: [],
      light: [],
      emblem: [],
      weapons: {
        kineticIcon: [],
        kineticLight: [],
        kineticSinge: [],
        energyIcon: [],
        energyLight: [],
        energySinge: [],
        heavyIcon: [],
        heavyLight: [],
        heavySinge: []
      },
      armour: {
        headIcon: [],
        headLight: [],
        headSinge: [],
        armsIcon: [],
        armsLight: [],
        armsSinge: [],
        chestIcon: [],
        chestLight: [],
        chestSinge: [],
        legsIcon: [],
        legsLight: [],
        legsSinge: [],
        classIcon: [],
        classLight: [],
        classSinge: []
      },
      trash: []
    }
  },
  mounted() {
    let membershipId
    let chars
    let charInfo1
    let charInfo2
    let charInfo3
    let manifest
    let clsManifest
    let raceManifest
    const timer = $.Deferred()
    setTimeout(timer.resolve, 5000)
    // eslint-disable-next-line prefer-const
    membershipId = this.getMembershipId().done(this.handleMembershipId)
    $.when(membershipId).done(() => {
      this.progress(10)
      chars = this.getCharacters().done(this.handleChars)
      $.when(chars).done(() => {
        this.progress(5)
        charInfo1 = this.getCharacter1Info().done(this.handleCharInfo)
        $.when(charInfo1).done(() => {
          this.progress(5)
          charInfo2 = this.getCharacter2Info().done(this.handleCharInfo)
          $.when(charInfo2).done(() => {
            this.progress(5)
            charInfo3 = this.getCharacter3Info().done(this.handleCharInfo)
            $.when(charInfo3).done(() => {
              this.progress(5)
              manifest = this.getManifest().done(this.handleManifest)
              $.when(manifest).done(() => {
                this.progress(5)

                clsManifest = this.getClsManifest().done(this.handleClsManifest)
                this.progress(5)
                raceManifest = this.getRaceManifest().done(
                  this.handleRaceManifest
                )
                this.progress(5)
                $.when(timer, clsManifest, raceManifest).done(() => {
                  console.log(this.characters)
                  console.log(this.emblem)
                  console.log(this.light)
                  console.log(this.cls)
                  console.log(this.race)
                  console.log('Finished')
                  $('#myProgress').animate({ width: '0.0001%' }, 600)
                  document.getElementById('cards').style.visibility = 'visible'
                  $('#cards').animate({ width: '100%' }, 600)
                })
              })
            })
          })
        })
      })
    })
  },
  methods: {
    progress(x) {
      width += x
      $('#myBar').animate({ width: `${width}%` }, 300)
    },
    getMembershipId() {
      return $.ajax({
        url: `${bungieSteamID}76561198117522343/`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleMembershipId(data) {
      this.membership = data.Response.membershipId
    },
    getCharacters() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/?components=100`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleChars(data) {
      this.characters.push(data.Response.profile.data.characterIds[0])
      this.characters.push(data.Response.profile.data.characterIds[1])
      this.characters.push(data.Response.profile.data.characterIds[2])
    },
    getCharacter1Info() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[0]}/?components=200`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    getCharacter2Info() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[1]}/?components=200`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    getCharacter3Info() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[2]}/?components=200`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleCharInfo(data) {
      this.clsHash.push(data.Response.character.data.classHash)
      this.raceHash.push(data.Response.character.data.raceHash)
      this.emblem.push(data.Response.character.data.emblemBackgroundPath)
      this.light.push(data.Response.character.data.light)
    },

    getManifest() {
      return $.ajax({
        url: bungieManifest,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleManifest(data) {
      this.clsManifest =
        data.Response.jsonWorldComponentContentPaths.en.DestinyClassDefinition
      this.raceManifest =
        data.Response.jsonWorldComponentContentPaths.en.DestinyRaceDefinition
    },
    getClsManifest() {
      return $.ajax({
        url: bungie + this.clsManifest,
        type: 'get'
      })
    },
    handleClsManifest(data) {
      const classHash1 = this.clsHash[0]
      this.cls.push(data[classHash1].displayProperties.name)
      const classHash2 = this.clsHash[1]
      this.cls.push(data[classHash2].displayProperties.name)
      const classHash3 = this.clsHash[2]
      this.cls.push(data[classHash3].displayProperties.name)
    },
    getRaceManifest() {
      return $.ajax({
        url: bungie + this.raceManifest,
        type: 'get'
      })
    },
    handleRaceManifest(data) {
      const raceHash1 = this.raceHash[0]
      this.race.push(data[raceHash1].displayProperties.name)
      const raceHash2 = this.raceHash[1]
      this.race.push(data[raceHash2].displayProperties.name)
      const raceHash3 = this.raceHash[2]
      this.race.push(data[raceHash3].displayProperties.name)
    }
  }
}
</script>
<style scoped>
#myProgress {
  width: 80%;
  background-color: grey;
  margin-left: 10%;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: white;
}
#cards {
  visibility: hidden;
  width: 0%;
}
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
  margin-left: 30px;
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
.class-img {
  margin-bottom: 30px;
}
.profile-card {
  width: 29.625em;
  height: 6em;
}
.emblem-text {
  margin-top: -12px;
}
.race-text {
  margin-right: -70px;
}
</style>
