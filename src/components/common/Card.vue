<template>
  <div>
    {{ steam }}
    <div>
      {{ name }}
    </div>
    <ul>
      <li v-for="char in chars" :key="char">
        {{ char }}
      </li>
    </ul>
    <ul>
      <li v-for="light in lights" :key="light">
        {{ light }}
      </li>
    </ul>
    <ul>
      <li v-for="type in classes" :key="type">
        {{ type }}
      </li>
    </ul>
    <ul>
      <li v-for="race in races" :key="race">
        {{ race }}
      </li>
    </ul>
    <ul>
      <li v-for="emblem in emblems" :key="emblem">
        <img v-bind:src="bungie + emblem" />
      </li>
    </ul>

    <div v-for="icon in kinetic" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in energy" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in heavy" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in helm" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in arms" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in chest" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in legs" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in classItem" :key="icon">
      <img v-bind:src="bungie + icon" />
    </div>
    <div v-for="icon in itemIcons" :key="icon">
      <img v-bind:src="bungie + icon" />
      {{ icon }}
    </div>
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
          this.chars.push(character)
          this.getCharacter(character)
        }
      })
    },
    getWeaponList(character, jsonChar, jsonRace, jsonClass, charRace, charClass) {
      this.character = character
      this.charClass = charClass
      this.charRace = charRace
      this.jsonChar = jsonChar
      this.jsonRace = jsonRace
      $.ajax({
        url: `${bungieLink}/3/Profile/${this.steam}/Character/${character}/?components=205`,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(jsonWeapon => {
         this.getPaste(jsonChar, jsonRace, jsonClass, jsonWeapon, charRace, charClass)
      })
    },
    getWeapon(itemHash) {
      this.itemHash = itemHash

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
        } else if (weaponType === 3) {
          this.energy.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (weaponType === 4) {
          this.heavy.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (armourType === 45) {
          this.helmet.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (armourType === 46) {
          this.arms.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (armourType === 47) {
          this.chest.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (armourType === 48) {
          this.legs.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
        } else if (armourType === 49) {
          this.classItem.push(itemIcon)
          this.itemNames.push(jsonItems.Response.displayProperties.name)
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
        this.getRace(character, raceDefinition, charRace, classDefinition, charClass, jsonChar)
      })
    },
    getRace(character, raceDefinition, charRace, classDefinition, charClass, jsonChar) {
      this.character = character
      this.raceDefinition = raceDefinition
      this.charRace = charRace
      this.classDefinition = classDefinition
      this.charClass = charClass
      this.jsonChar = jsonChar
      $.ajax({
        url: bungie + raceDefinition
      }).done(jsonRace => {
        this.getClass(character, classDefinition, charClass, charRace, jsonChar, jsonRace)
      })
    },
    getClass(character, classDefinition, charClass, charRace, jsonChar, jsonRace) {
      this.character = character
      this.classDefinition = classDefinition
      this.charClass = charClass
      this.charRace = charRace
      this.jsonChar = jsonChar
      this.jsonRace = jsonRace

      $.ajax({
        url: bungie + classDefinition
      }).done(jsonClass => {
        this.getWeaponList(character, jsonChar, jsonRace, jsonClass, charRace, charClass)
        // this.getPaste(jsonChar, jsonRace, jsonClass, charRace, charClass)
      })
  },
  getPaste(jsonChar, jsonRace, jsonClass, jsonWeapon, charRace, charClass) {
    this.jsonChar = jsonChar
    this.jsonRace = jsonRace
    this.jsonClass = jsonClass
    this.jsonWeapon = jsonWeapon
    this.charClass = charClass
    this.charRace = charRace
    this.lights.push(jsonChar.Response.character.data.light)
    this.emblems.push(jsonChar.Response.character.data.emblemBackgroundPath)
    this.races.push(jsonRace[charRace].displayProperties.name)
    this.classes.push(jsonClass[charClass].displayProperties.name)
    for (let i = 0; i < 17; i++) {
          const itemHash = jsonWeapon.Response.equipment.data.items[i].itemHash
          this.getWeapon(itemHash)
    }
  }
  }
}
</script>
<style></style>
