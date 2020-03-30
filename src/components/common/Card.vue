<template>
  <div>
    {{ steam }}
    <div>
      {{ name }}
    </div>
    <div>
      {{ char1 }}
    </div>
    <div>
      {{ char2 }}
    </div>
    <div>
      {{ char3 }}
    </div>
    <div>
      {{ char1Light }}
    </div>
    <div>
      {{ char2Light }}
    </div>
    <div>
      {{ char3Light }}
    </div>
    <div>
      {{ char1Race + char1Class }}
    </div>
    <div>
      {{ char2Race + char2Class }}
    </div>
    <div>
      {{ char3Race + char3Class }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
// ! API KEY
const apiKey = '50f95795086b4612a97afa04a35c9211'
// * Default links for player info, images and definitions
const bungieLink = 'https://www.bungie.net/Platform/Destiny2'
const bungie = 'https://www.bungie.net'
const bungieManifest = `${bungieLink}/Manifest`

export default {
  data() {
    return {
      steam: String,
      name: String,
      char1: String,
      char2: String,
      char3: String,
      char1Light: String,
      char2Light: String,
      char3Light: String,
      char1Class: String,
      char2Class: String,
      char3Class: String,
      char1Race: String,
      char2Race: String,
      char3Race: String
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
        const char1 = json.Response.profile.data.characterIds[0]
        const char2 = json.Response.profile.data.characterIds[1]
        const char3 = json.Response.profile.data.characterIds[2]
        this.name = name
        this.char1 = char1
        this.char2 = char2
        this.char3 = char3
        this.getCharacter(char1, 0)
        this.getCharacter(char2, 1)
        this.getCharacter(char3, 2)
      })
    },
    getCharacter(char, i) {
      this.char = char
      this.i = i
      console.log(i)
      $.ajax({
        url: `${bungieLink}/3/Profile/${this.steam}/Character/${char}/?components=200`,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(json => {
        let charRace
        let charClass
        if (i === 0) {
          charRace = json.Response.character.data.raceHash
          charClass = json.Response.character.data.classHash
          this.char1Light = json.Response.character.data.light
          this.getCharacterDefinition(charRace, charClass, i)
        } else if (i === 1) {
          charRace = json.Response.character.data.raceHash
          charClass = json.Response.character.data.classHash
          this.char2Light = json.Response.character.data.light
          this.getCharacterDefinition(charRace, charClass, i)
        } else {
          charRace = json.Response.character.data.raceHash
          charClass = json.Response.character.data.classHash
          this.char3Light = json.Response.character.data.light
          this.getCharacterDefinition(charRace, charClass, i)
        }
      })
    },
    getCharacterDefinition(charRace, charClass, i) {
      this.charRace = charRace
      this.charClass = charClass
      this.i = i
      $.ajax({
        url: bungieManifest,
        headers: {
          'X-API-Key': apiKey
        }
      }).done(json => {
        const raceDefinition =
          json.Response.jsonWorldComponentContentPaths.en.DestinyRaceDefinition
        const classDefinition =
          json.Response.jsonWorldComponentContentPaths.en.DestinyClassDefinition
        this.getRace(raceDefinition, charRace, i)
        this.getClass(classDefinition, charClass, i)
      })
    },
    getRace(raceDefinition, charRace, i) {
      this.raceDefinition = raceDefinition
      this.charRace = charRace
      this.i = i
      $.ajax({
        url: bungie + raceDefinition
      }).done(json => {
        if (i === 0) {
          this.char1Race = json[charRace].displayProperties.name
        } else if (i === 1) {
          this.char2Race = json[charRace].displayProperties.name
        } else {
          this.char3Race = json[charRace].displayProperties.name
        }
      })
    },
    getClass(classDefinition, charClass, i) {
      this.classDefinition = classDefinition
      this.charClass = charClass
      this.i = i
      $.ajax({
        url: bungie + classDefinition
      }).done(json => {
        if (i === 0) {
          this.char1Class = json[charClass].displayProperties.name
        } else if (i === 1) {
          this.char2Class = json[charClass].displayProperties.name
        } else {
          this.char3Class = json[charClass].displayProperties.name
        }
      })
    }
  }
}
</script>
<style></style>
