<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center fluid>
        <v-layout row wrap>
          <v-flex>
            <v-card class="mx-auto" max-width="29.625em">
              <v-img v-bind:src="bungie + emblems[0]" class="profile-card">
                <br />
                <v-col class="d-flex emblem-text">
                  <v-card-title
                    class="justify-end display-1 font-weight-thin race-text"
                    >{{ races[0] }} {{ classes[0] }}</v-card-title
                  >

                  <v-card-title class="justify-end display-1">{{
                    lights[0]
                  }}</v-card-title>
                </v-col>
              </v-img>
              <v-container>
                <v-layout row warp>
                  <v-flex>
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + kinetic[0]"
                          class="item-img mx-auto mt-5"
                        ></v-img> </template
                      ><span>{{ itemNames[0] }}</span></v-tooltip
                    >
                    <v-flex class="gear-info"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          v-bind:src="bungie + itemSinge[0]"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >

                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + energy[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[1] }}</span></v-tooltip
                    >
                    <v-flex class="gear-info"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          v-bind:src="bungie + itemSinge[1]"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + heavy[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[2] }}</span></v-tooltip
                    >
                    <v-flex class="gear-info"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          v-bind:src="bungie + itemSinge[2]"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + helmet[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[4] }}</span></v-tooltip
                    >
                    <v-flex class="gear-info"
                      ><p class="gear-text">
                        <img
                          class="afinity"
                          v-bind:src="bungie + itemSinge[3]"
                          width="width: calc(var(--item-size) / 6);"
                        />900
                      </p></v-flex
                    >
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + arms[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[5] }}</span></v-tooltip
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
                          v-bind:src="bungie + chest[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[6] }}</span></v-tooltip
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
                          v-bind:src="bungie + legs[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[7] }}</span></v-tooltip
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
                          v-bind:src="bungie + classItem[0]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[8] }}</span></v-tooltip
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
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="mx-auto" max-width="29.625em">
              <v-img v-bind:src="bungie + emblems[1]" class="profile-card">
                <br />
                <v-col class="d-flex emblem-text">
                  <v-card-title
                    class="justify-end display-1 font-weight-thin race-text"
                    >{{ races[1] }} {{ classes[1] }}</v-card-title
                  >
                  <v-card-title class="justify-end display-1">{{
                    lights[1]
                  }}</v-card-title>
                </v-col>
              </v-img>
              <v-container>
                <v-layout row warp>
                  <v-flex>
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + kinetic[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[9] }}</span></v-tooltip
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
                          v-bind:src="bungie + energy[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[10] }}</span></v-tooltip
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
                          v-bind:src="bungie + heavy[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[11] }}</span></v-tooltip
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
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + helmet[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[12] }}</span></v-tooltip
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
                          v-bind:src="bungie + arms[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[13] }}</span></v-tooltip
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
                          v-bind:src="bungie + chest[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[14] }}</span></v-tooltip
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
                          v-bind:src="bungie + legs[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[15] }}</span></v-tooltip
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
                          v-bind:src="bungie + classItem[1]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[16] }}</span></v-tooltip
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
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="mx-auto" max-width="29.625em">
              <v-img v-bind:src="bungie + emblems[2]" class="profile-card">
                <br />
                <v-col class="d-flex emblem-text">
                  <v-card-title
                    class="justify-end display-1 font-weight-thin race-text"
                    >{{ races[2] }} {{ classes[2] }}</v-card-title
                  >
                  <v-card-title class="justify-end display-1">{{
                    lights[2]
                  }}</v-card-title>
                </v-col>
              </v-img>
              <v-container>
                <v-layout row warp>
                  <v-flex>
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + kinetic[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[17] }}</span></v-tooltip
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
                          v-bind:src="bungie + energy[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[18] }}</span></v-tooltip
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
                          v-bind:src="bungie + heavy[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[19] }}</span></v-tooltip
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
                    <v-tooltip right max-width="105px">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          v-bind:src="bungie + helmet[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[20] }}</span></v-tooltip
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
                          v-bind:src="bungie + arms[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[21] }}</span></v-tooltip
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
                          v-bind:src="bungie + chest[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[22] }}</span></v-tooltip
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
                          v-bind:src="bungie + legs[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[23] }}</span></v-tooltip
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
                          v-bind:src="bungie + classItem[2]"
                          class="item-img mx-auto"
                        ></v-img> </template
                      ><span>{{ itemNames[24] }}</span></v-tooltip
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
/* eslint-disable prettier/prettier */
// ! API KEY
const apiKey = '50f95795086b4612a97afa04a35c9211'
// * Default links for player info, images and definitions
const bungieLink = 'https://www.bungie.net/Platform/Destiny2'
const bungie = 'https://www.bungie.net'
const bungieManifest = `${bungieLink}/Manifest`
const bungieItem = `${bungieManifest}/DestinyInventoryItemDefinition/`


export default {
  data() {
    return {
      steam: String,
      name: String,
      bungie: 'https://www.bungie.net',
      chars: [],
      lights: [],
      emblems: [],
      classes: [],
      races: [],
      kinetic: [],
      energy: [],
      heavy: [],
      helmet: [],
      arms: [],
      chest: [],
      legs: [],
      classItem: [],
      itemIcons: [],
      itemNames: [],
      itemLights: [],
      itemSinge: [],
      trash: []
    }
  },
  mounted() {

      const steamId = this.getSteamId()
      this.steam = steamId
      this.getProfile()

  },
  methods: {
    getSteamId() {
      return '4611686018479295544'
    },
    getProfile() {
      $.ajax({
        url: `${bungieLink}/3/Profile/${this.steam}/?components=100`,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(json => {
        const name = json.Response.profile.data.userInfo.displayName
        this.name = name
        for (let i = 0; i < 3; i++) {
          const character = json.Response.profile.data.characterIds[i]
          this.sleep(2000)
          this.chars.push(character)
          this.getCharacter(character)

        }
      })
    },
    getWeaponList(character, jsonChar, jsonRace, jsonClass, charRace, charClass, def) {
      this.character = character
      this.charClass = charClass
      this.charRace = charRace
      this.jsonChar = jsonChar
      this.jsonRace = jsonRace
      this.def = def
      $.ajax({
        url: `${bungieLink}/3/Profile/${this.steam}/Character/${character}/?components=205`,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(jsonWeapon => {
         this.getPaste(jsonChar, jsonRace, jsonClass, jsonWeapon, charRace, charClass, def)
      })
    },
    getWeapon(itemHash, def) {
      this.itemHash = itemHash
      this.def = def

      $.ajax({
        url: bungieItem + itemHash,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(jsonItems => {
        const weaponType = jsonItems.Response.itemCategoryHashes[0]
        const armourType = jsonItems.Response.itemCategoryHashes[1]
        const itemIcon = jsonItems.Response.displayProperties.icon

       if (weaponType === 2) {
          this.kinetic.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (weaponType === 3) {
          this.energy.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (weaponType === 4) {
          this.heavy.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (armourType === 45) {
          this.helmet.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (armourType === 46) {
          this.arms.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (armourType === 47) {
          this.chest.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (armourType === 48) {
          this.legs.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else if (armourType === 49) {
          this.classItem.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
          const singeHash = jsonItems.Response.defaultDamageTypeHash
          this.getSinge(singeHash, def)
        } else{
          this.trash.push(itemIcon)
          this.trash.push(jsonItems.Response.displayProperties.name)
        }
        /* if (weaponType < 5 || (armourType > 44 && armourType < 50)) {
          this.itemIcons.push(jsonItems.Response.displayProperties.icon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } */
      })
    },
    /* ITEM TYPES HASH[0]
      Kinetic : 2
      Energy : 3
      Heavy : 4
      Helm : 45
      Hands : 46
      Chest : 47
      Boots : 48
      ClassItem : 49
    */
    getSinge(singeHash, def){
      this.singeHash = singeHash
      this.def = def
      const damageTypeDef = def.Response.jsonWorldComponentContentPaths.en.DestinyDamageTypeDefinition
       $.ajax({
        url: bungie + damageTypeDef
      }).done(jsonDmg => {
        this.itemSinge.push(jsonDmg[singeHash].displayProperties.icon)
      })
    },
    getCharacter(character) {
      this.character = character
      $.ajax({
        url: `${bungieLink}/3/Profile/${this.steam}/Character/${character}/?components=200`,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(jsonChar => {
        const charRace = jsonChar.Response.character.data.raceHash
        const charClass = jsonChar.Response.character.data.classHash
        this.getCharacterDefinition(character, charRace, charClass, jsonChar)
      })
    },
    getCharacterDefinition(character, charRace, charClass, jsonChar) {
      this.character = character
      this.charRace = charRace
      this.charClass = charClass
      this.jsonChar = jsonChar
      $.ajax({
        url: bungieManifest,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(def => {
        const raceDefinition =
          def.Response.jsonWorldComponentContentPaths.en.DestinyRaceDefinition
        const classDefinition =
          def.Response.jsonWorldComponentContentPaths.en.DestinyClassDefinition
        this.getRace(character, raceDefinition, charRace, classDefinition, charClass, jsonChar, def)
      })
    },
    getRace(character, raceDefinition, charRace, classDefinition, charClass, jsonChar, def) {
      this.character = character
      this.raceDefinition = raceDefinition
      this.charRace = charRace
      this.classDefinition = classDefinition
      this.charClass = charClass
      this.jsonChar = jsonChar
      this.def = def
      $.ajax({
        url: bungie + raceDefinition
      }).done(jsonRace => {
        this.getClass(character, classDefinition, charClass, charRace, jsonChar, jsonRace, def)
      })
    },
    getClass(character, classDefinition, charClass, charRace, jsonChar, jsonRace, def) {
      this.character = character
      this.classDefinition = classDefinition
      this.charClass = charClass
      this.charRace = charRace
      this.jsonChar = jsonChar
      this.jsonRace = jsonRace
      this.def = def
      $.ajax({
        url: bungie + classDefinition
      }).done(jsonClass => {
        this.getWeaponList(character, jsonChar, jsonRace, jsonClass, charRace, charClass, def)
      })
  },
  getPaste(jsonChar, jsonRace, jsonClass, jsonWeapon, charRace, charClass, def) {
    this.jsonChar = jsonChar
    this.jsonRace = jsonRace
    this.jsonClass = jsonClass
    this.jsonWeapon = jsonWeapon
    this.charClass = charClass
    this.charRace = charRace
    this.def = def
    this.lights.push(jsonChar.Response.character.data.light)
    this.emblems.push(jsonChar.Response.character.data.emblemBackgroundPath)
    this.races.push(jsonRace[charRace].displayProperties.name)
    this.classes.push(jsonClass[charClass].displayProperties.name)
    for (let i = 0; i < 17; i++) {
          const itemHash = jsonWeapon.Response.equipment.data.items[i].itemHash
          this.getWeapon(itemHash, def)
    }
  },
  sleep(milliseconds) {
  const start = new Date().getTime()
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break
    }
  }
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
  margin-left: 30px;
  z-index: 10;
  background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(255,0,0,0));
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
