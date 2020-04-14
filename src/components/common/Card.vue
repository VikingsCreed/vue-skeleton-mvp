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
                          v-bind:src="bungie + weapons.kineticIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ weapons.kineticLight[n - 1] }}</span></v-tooltip
                    >
                    <v-flex class="gear-info"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          src="./../../../public/solar.png"
                          width="width: calc(var(--item-size) / 6);"
                        />{{ lightChar1[n - 1] }}
                      </p></v-flex
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
                          v-bind:src="bungie + weapons.heavyIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ weapons.heavyName[n - 1] }}</span></v-tooltip
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
                          v-bind:src="bungie + armour.headIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.headName[n - 1] }}</span></v-tooltip
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
                          v-bind:src="bungie + armour.armsIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.armsName[n - 1] }}</span></v-tooltip
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
                          v-bind:src="bungie + armour.chestIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.chestName[n - 1] }}</span></v-tooltip
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
                          v-bind:src="bungie + armour.legsIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.legsName[n - 1] }}</span></v-tooltip
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
                          v-bind:src="bungie + armour.classIcon[n - 1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ armour.className[n - 1] }}</span></v-tooltip
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
      weapons: {
        kineticIcon: [],
        kineticName: [],
        kineticLight: [],
        kineticSinge: [],
        energyIcon: [],
        energyName: [],
        energyLight: [],
        energySinge: [],
        heavyIcon: [],
        heavyName: [],
        heavyLight: [],
        heavySinge: []
      },
      armour: {
        headIcon: [],
        headName: [],
        headLight: [],
        headSinge: [],
        armsIcon: [],
        armsName: [],
        armsLight: [],
        armsSinge: [],
        chestIcon: [],
        chestName: [],
        chestLight: [],
        chestSinge: [],
        legsIcon: [],
        legsName: [],
        legsLight: [],
        legsSinge: [],
        classIcon: [],
        className: [],
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
    let itemHashes1
    let itemHashes2
    let itemHashes3
    let itemIconsChar1
    let itemIconsChar2
    let itemIconsChar3
    const timer = $.Deferred()
    setTimeout(timer.resolve, 10000)
    // const timeOut = $.Deferred()
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
                  this.progress(1)
                  $.when(itemHashes1).done(() => {
                    itemHashes2 = this.getItemHashes2().done(
                      this.handleItemHashes2
                    )
                    this.progress(1)
                    $.when(itemHashes2).done(() => {
                      itemHashes3 = this.getItemHashes3().done(
                        this.handleItemHashes3
                      )
                      this.progress(1)
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
                          console.log(item2)
                        }
                        this.progress(10)
                        let item3 = 0
                        for (item3 in this.char3ItemHashes) {
                          itemIconsChar3 = this.getItemIconsChar3(item3).done(
                            this.handleItemIcon3
                          )
                          console.log(item3)
                        }
                        $.when(
                          timer,
                          itemIconsChar3,
                          itemIconsChar2,
                          itemIconsChar1
                        ).done(() => {
                          console.log(this.characters)
                          console.log(this.emblem)
                          console.log(this.light)
                          console.log(this.cls)
                          console.log(this.race)
                          console.log(this.char1ItemHashes)
                          console.log(this.char2ItemHashes)
                          console.log(this.char3ItemHashes)
                          console.log(this.char1ItemInstanceId)
                          console.log(this.char2ItemInstanceId)
                          console.log(this.char3ItemInstanceId)
                          console.log(this.weapons.kineticIcon)
                          console.log(this.weapons.kineticName)
                          console.log(this.weapons.energyName)
                          console.log(this.weapons.heavyName)
                          console.log(this.weapons.kineticLight)

                          console.log('Finished')
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
    },
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
