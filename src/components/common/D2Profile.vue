<!-- Kode skrevet av Erlend Ellefsen -->
<template>
  <div id="app">
    <!-- Lager progress bar -->
    <v-app id="inspire">
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
      <v-container grid-list-md text-xs-center fluid>
        <v-layout row wrap id="cards">
          <!-- Lager 3 cards, en til hver karakter -->
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
                          v-bind:src="bungie + subClassIcon[n - 1]"
                          class="class-img mx-auto"
                        ></v-img> </template
                      ><span>{{ subClassName[n - 1] }}</span></v-tooltip
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + weapons.kineticIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ weapons.kineticName[n - 1] }}</span></v-tooltip
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + weapons.energyIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ weapons.energyName[n - 1] }}</span></v-tooltip
                    >

                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + weapons.heavyIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ weapons.heavyName[n - 1] }}</span></v-tooltip
                    >
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + armour.headIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.headName[n - 1] }}</span></v-tooltip
                    >

                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + armour.armsIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.armsName[n - 1] }}</span></v-tooltip
                    >

                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + armour.chestIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.chestName[n - 1] }}</span></v-tooltip
                    >

                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + armour.legsIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.legsName[n - 1] }}</span></v-tooltip
                    >

                    <v-tooltip left max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + armour.classIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.className[n - 1] }}</span></v-tooltip
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
/* eslint-disable max-statements */
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
  // Henter steamid verdien fra parent component
  props: {
    steamid: String
  },
  data() {
    return {
      // Alle verdiene som returneres til nettsiden
      // Verdiene blir fylt ut av scriptet som kommer under
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
      char1ItemHashes: [],
      char1ItemInstanceId: [],
      char2ItemHashes: [],
      char2ItemInstanceId: [],
      char3ItemHashes: [],
      char3ItemInstanceId: [],
      lightChar1: [],
      lightChar2: [],
      lightChar3: [],
      name: [],
      subClassIcon: [],
      subClassName: [],
      weapons: {
        kineticIcon: [],
        kineticName: [],
        energyIcon: [],
        energyName: [],
        heavyIcon: [],
        heavyName: []
      },
      armour: {
        headIcon: [],
        headName: [],
        armsIcon: [],
        armsName: [],
        chestIcon: [],
        chestName: [],
        legsIcon: [],
        legsName: [],
        classIcon: [],
        className: []
      },
      trash: []
    }
  },
  // mounted gjør at scriptet starter etter <template> er lastet
  mounted() {
    let membershipId
    let chars
    let charInfo1
    let charInfo2
    let charInfo3
    let manifest
    let clsManifest
    let raceManifest
    let itemHashes1
    let itemHashes2
    let itemHashes3
    let itemIconsChar1
    let itemIconsChar2
    let itemIconsChar3
    // Bruker en jquery timer for å vise all informasjon på likt.
    const timer = $.Deferred()
    setTimeout(timer.resolve, 15000)
    // konstanten kaller på getMembershipId, når api requesten er ferdig(.done) sender den json filen til
    // handleMembershipId som henter ut informasjonen som trengs
    // eslint-disable-next-line prefer-const
    membershipId = this.getMembershipId().done(this.handleMembershipId)
    $.when(membershipId).done(() => {
      // Kaller på denne en gang til, ettsom noen ganger er query til databasen tregere enn mounted og trenger litt ekstra tid
      membershipId = this.getMembershipId().done(this.handleMembershipId)
      width = 0
      // Sender progress til progressbar
      this.progress(10)
      chars = this.getCharacters().done(this.handleChars)
      /*
       * Når konstanten chars er utført gjør den neste funskjon
       * Dette er fordi API requestene kan ta alt fra noen millisekunder til ett helt sekund.
       * Så om man ikke "venter" på at en funskjon skal bli ferdig vil informasjon som trengs ved neste
       * funksjon ikke bli ferdig før neste API request sendes.
       * Derfor har jeg valgt å bruke $.when
       */
      $.when(chars).done(() => {
        // Kaller på denne en gang til, ettsom noen ganger er query til databasen tregere enn mounted og trenger litt ekstra tid
        membershipId = this.getMembershipId().done(this.handleMembershipId)
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
                this.progress(10)
                clsManifest = this.getClsManifest().done(this.handleClsManifest)
                this.progress(5)
                raceManifest = this.getRaceManifest().done(
                  this.handleRaceManifest
                )
                this.progress(5)
                $.when(clsManifest, raceManifest).done(() => {
                  itemHashes1 = this.getItemHashes1().done(
                    this.handleItemHashes1
                  )
                  this.progress(5)
                  $.when(itemHashes1).done(() => {
                    itemHashes2 = this.getItemHashes2().done(
                      this.handleItemHashes2
                    )
                    this.progress(5)
                    $.when(itemHashes2).done(() => {
                      itemHashes3 = this.getItemHashes3().done(
                        this.handleItemHashes3
                      )
                      this.progress(5)
                      $.when(itemHashes3).done(() => {
                        this.progress(10)
                        let item = 0
                        for (item in this.char1ItemHashes) {
                          itemIconsChar1 = this.getItemIconsChar1(item).done(
                            this.handleItemIcon1
                          )
                        }
                        this.progress(10)
                        let item2 = 0
                        for (item2 in this.char2ItemHashes) {
                          itemIconsChar2 = this.getItemIconsChar2(item2).done(
                            this.handleItemIcon2
                          )
                        }
                        this.progress(10)
                        let item3 = 0
                        for (item3 in this.char3ItemHashes) {
                          itemIconsChar3 = this.getItemIconsChar3(item3).done(
                            this.handleItemIcon3
                          )
                        }
                        this.progress(5)
                        $.when(
                          timer,
                          itemIconsChar3,
                          itemIconsChar2,
                          itemIconsChar1
                        ).done(() => {
                          $('#myProgress').animate({ width: '0.0001%' }, 600)
                          document.getElementById('cards').style.visibility =
                            'visible'

                          $('#cards').animate({ width: '100%' }, 600)
                          this.$forceUpdate()
                        })
                        //  })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },
  methods: {
    // Enkel jQuery animasjon for progress bar
    progress(x) {
      width += x
      $('#myBar').animate({ width: `${width}%` }, 300)
    },
    // Spør Bungie API etter karakteren den innloggede brukeren
    getMembershipId() {
      return $.ajax({
        url: bungieSteamID + this.steamid,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    // Henter ut Bungie membershipId som brukes i de fleste API requests
    handleMembershipId(data) {
      this.membership = data.Response.membershipId
    },
    // Hanter karakterene til den innloggede brukeren.
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
    /*
     * Henter nytting informasjon om hver karakter
     * Hvilken klasse, rase, emblemer og level.
     */

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
    /*
     * Henter Bungie Manifest data
     * Manifest data brukes til å hente generel informasjon som er
     * lik for alle spillere.
     * Som feks rasenavn og klassenavn.
     */
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
    },
    /*
     * Henter alle items fra hver karakter. ItemHashes brukes til å skille mellom alle
     * gjenstander en spiller har
     */
    getItemHashes1() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[0]}/?components=205`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleItemHashes1(data) {
      for (let i = 0; i < 17; i++) {
        this.char1ItemHashes.push(
          data.Response.equipment.data.items[i].itemHash
        )
        this.char1ItemInstanceId.push(
          // Denne lagres for eventuell videreutvikling senere.
          // InstanceId kan brukes til å hente ut spesifikke data til bestemte våpen, ikke bare felles data.
          data.Response.equipment.data.items[i].itemInstanceId
        )
      }
    },
    getItemHashes2() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[1]}/?components=205`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleItemHashes2(data) {
      for (let i = 0; i < 17; i++) {
        this.char2ItemHashes.push(
          data.Response.equipment.data.items[i].itemHash
        )
        this.char2ItemInstanceId.push(
          data.Response.equipment.data.items[i].itemInstanceId
        )
      }
    },
    getItemHashes3() {
      return $.ajax({
        url: `${bungieLink}/3/Profile/${this.membership}/Character/${this.characters[2]}/?components=205`,
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    handleItemHashes3(data) {
      for (let i = 0; i < 17; i++) {
        this.char3ItemHashes.push(
          data.Response.equipment.data.items[i].itemHash
        )
        this.char3ItemInstanceId.push(
          data.Response.equipment.data.items[i].itemInstanceId
        )
      }
    },
    // Henter alle ikonene til alle gjenstandene
    getItemIconsChar1(i) {
      return $.ajax({
        url: bungieItem + this.char1ItemHashes[i],
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    getItemIconsChar2(i) {
      return $.ajax({
        url: bungieItem + this.char2ItemHashes[i],
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },
    getItemIconsChar3(i) {
      return $.ajax({
        url: bungieItem + this.char3ItemHashes[i],
        headers: {
          'X-API-Key': apiKey
        },
        type: 'get'
      })
    },

    /*
     * Ettersom jeg ønsket at API requestene skulle være asyncrone og skje så fort som mulig
     * Måtte alle ikoner hardkodes til bestemte variabler.
     * Uten hardkoding kommer ikke ikoner på riktig plass.
     * Dette gjør at man trenger færre API request og resulterer i at scriptet kjøres fortere
     */
    handleItemIcon1(data) {
      const weaponCategoryHash = data.Response.itemCategoryHashes[0]
      const armourCategoryHash = data.Response.itemCategoryHashes[1]
      if (weaponCategoryHash === 2) {
        this.weapons.kineticIcon[0] = data.Response.displayProperties.icon
        this.weapons.kineticName[0] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 3) {
        this.weapons.energyIcon[0] = data.Response.displayProperties.icon
        this.weapons.energyName[0] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 4) {
        this.weapons.heavyIcon[0] = data.Response.displayProperties.icon
        this.weapons.heavyName[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 45) {
        this.armour.headIcon[0] = data.Response.displayProperties.icon
        this.armour.headName[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 46) {
        this.armour.armsIcon[0] = data.Response.displayProperties.icon
        this.armour.armsName[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 47) {
        this.armour.chestIcon[0] = data.Response.displayProperties.icon
        this.armour.chestName[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 48) {
        this.armour.legsIcon[0] = data.Response.displayProperties.icon
        this.armour.legsName[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 49) {
        this.armour.classIcon[0] = data.Response.displayProperties.icon
        this.armour.className[0] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 50) {
        this.subClassIcon[0] = data.Response.displayProperties.icon
        this.subClassName[0] = data.Response.displayProperties.name
      } else {
        this.trash.push(data.Response)
      }
    },
    handleItemIcon2(data) {
      const weaponCategoryHash = data.Response.itemCategoryHashes[0]
      const armourCategoryHash = data.Response.itemCategoryHashes[1]
      if (weaponCategoryHash === 2) {
        this.weapons.kineticIcon[1] = data.Response.displayProperties.icon
        this.weapons.kineticName[1] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 3) {
        this.weapons.energyIcon[1] = data.Response.displayProperties.icon
        this.weapons.energyName[1] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 4) {
        this.weapons.heavyIcon[1] = data.Response.displayProperties.icon
        this.weapons.heavyName[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 45) {
        this.armour.headIcon[1] = data.Response.displayProperties.icon
        this.armour.headName[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 46) {
        this.armour.armsIcon[1] = data.Response.displayProperties.icon
        this.armour.armsName[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 47) {
        this.armour.chestIcon[1] = data.Response.displayProperties.icon
        this.armour.chestName[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 48) {
        this.armour.legsIcon[1] = data.Response.displayProperties.icon
        this.armour.legsName[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 49) {
        this.armour.classIcon[1] = data.Response.displayProperties.icon
        this.armour.className[1] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 50) {
        this.subClassIcon[1] = data.Response.displayProperties.icon
        this.subClassName[1] = data.Response.displayProperties.name
      } else {
        this.trash.push(data.Response)
      }
    },
    handleItemIcon3(data) {
      const weaponCategoryHash = data.Response.itemCategoryHashes[0]
      const armourCategoryHash = data.Response.itemCategoryHashes[1]
      if (weaponCategoryHash === 2) {
        this.weapons.kineticIcon[2] = data.Response.displayProperties.icon
        this.weapons.kineticName[2] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 3) {
        this.weapons.energyIcon[2] = data.Response.displayProperties.icon
        this.weapons.energyName[2] = data.Response.displayProperties.name
      }
      if (weaponCategoryHash === 4) {
        this.weapons.heavyIcon[2] = data.Response.displayProperties.icon
        this.weapons.heavyName[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 45) {
        this.armour.headIcon[2] = data.Response.displayProperties.icon
        this.armour.headName[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 46) {
        this.armour.armsIcon[2] = data.Response.displayProperties.icon
        this.armour.armsName[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 47) {
        this.armour.chestIcon[2] = data.Response.displayProperties.icon
        this.armour.chestName[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 48) {
        this.armour.legsIcon[2] = data.Response.displayProperties.icon
        this.armour.legsName[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 49) {
        this.armour.classIcon[2] = data.Response.displayProperties.icon
        this.armour.className[2] = data.Response.displayProperties.name
      }
      if (armourCategoryHash === 50) {
        this.subClassIcon[2] = data.Response.displayProperties.icon
        this.subClassName[2] = data.Response.displayProperties.name
      } else {
        this.trash.push(data.Response)
      }
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
@media only screen and (max-width: 450px) {
  .profile-card {
    width: 100%;
  }
  .race-text {
    margin-right: -60px;
    font-size: 2em !important;
    margin-left: -40px;
  }
  .class-img {
    width: 100%;
    height: 25%;
  }
  .emblem-text {
    margin-right: -10px;
  }
  #cards {
    margin-bottom: 10%;
  }
}
</style>
