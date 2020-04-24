<!-- Kode skrevet av Erlend Ellefsen -->
<template>
  <v-app>
    <div id="app">
      <v-container grey darken-2 class="container">
        <v-row>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <div class="add-button">
                <v-btn icon color="blue lighten-2" v-on="on"
                  ><span class="material-icons">
                    add
                  </span></v-btn
                >
              </div>
            </template>
            <v-card dark>
              <v-card-title class="black--text headline green lighten-1">
                Create a new FireTeam
              </v-card-title>
              <v-text-field
                v-model="title"
                :counter="30"
                label="Title"
                required
                class="input"
              ></v-text-field>
              <v-combobox
                :items="playerItems"
                label="How many players do you need?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>
              <v-combobox
                v-model="selected"
                :items="activityItems"
                label="What activity?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>
              <v-combobox
                v-if="selected === 'Raid'"
                :items="raidItems"
                label="What raid?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>
              <v-combobox
                v-if="selected === 'Strike'"
                :items="strikeItems"
                label="What Strike playlist?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>
              <v-combobox
                v-if="selected === 'Crucible'"
                :items="crucibleItems"
                label="What Crucible playlist?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>
              <v-combobox
                v-if="selected === 'Gambit'"
                :items="gambitItems"
                label="What Gambit playlist?"
                outlined
                dense
                clearable
                class="input"
              ></v-combobox>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue lighten-2" text @click="dialog = false">
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <template>
            <v-expansion-panel>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div>Filters</div>
                </template>
                <v-card>
                  <v-radio-group v-model="row" row>
                    <v-checkbox
                      class="margin"
                      v-model="raidCheckbox"
                      label="Raid"
                      value="Raid"
                    ></v-checkbox>
                    <v-checkbox
                      class="margin"
                      v-model="strikeCheckbox"
                      label="Strike"
                      value="Strike"
                    ></v-checkbox>
                    <v-checkbox
                      class="margin"
                      v-model="crucibleCheckbox"
                      label="Crucible"
                      value="Crucible"
                    ></v-checkbox>
                    <v-checkbox
                      class="margin"
                      v-model="gambitCheckbox"
                      label="Gambit"
                      value="Gambit"
                    ></v-checkbox>
                  </v-radio-group>
                  <v-radio-group v-model="row" row>
                    <v-combobox
                      v-if="raidCheckbox"
                      v-model="select"
                      :items="raidItems"
                      label="What raid?"
                      multiple
                      outlined
                      dense
                      clearable
                      class="combo margin"
                    ></v-combobox>
                    <v-combobox
                      v-if="strikeCheckbox"
                      v-model="select2"
                      :items="strikeItems"
                      label="What strike playlist?"
                      multiple
                      outlined
                      dense
                      clearable
                      class="combo margin"
                    ></v-combobox>
                    <v-combobox
                      v-if="crucibleCheckbox"
                      v-model="select3"
                      :items="crucibleItems"
                      label="What crucible playlist?"
                      multiple
                      outlined
                      dense
                      clearable
                      class="combo margin"
                    ></v-combobox>
                    <v-combobox
                      v-if="gambitCheckbox"
                      v-model="select4"
                      :items="gambitItems"
                      label="What gambit playlist?"
                      multiple
                      outlined
                      dense
                      clearable
                      class="combo margin"
                    ></v-combobox>
                  </v-radio-group>

                  <v-btn class="apply-btn red lighten-1" text>Apply</v-btn>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'forumPages',
  props: {
    forum: String
  },
  data() {
    return {
      selected: [],
      dialog: false,
      panel: [0, 1],
      disabled: false,
      readonly: false,
      raidCheckbox: false,
      strikeCheckbox: false,
      crucibleCheckbox: false,
      gambitCheckbox: false,
      select: [],
      raidItems: [
        'Garden of Salvation',
        'Leviathan',
        'Last Wish',
        'Crown of Sorrow'
      ],
      strikeItems: ['Normal playlist', 'Nightfalls', 'Ordeal'],
      crucibleItems: ['Competitive', 'Classic Mix', 'Trails', 'Private Match'],
      gambitItems: ['Gambit', 'Gambit Prime', 'Reckoning'],
      activityItems: ['Raid', 'Strike', 'Crucible', 'Gambit'],
      playerItems: ['1', '2', '3', '4', '5']
    }
  }
}
</script>
<style scoped>
.container {
  height: 100vh;
}
.add-button {
  float: right;
}
.apply-btn {
  float: right;
}
.forum-post {
  height: 20%;
}
.margin {
  margin-left: 15px;
}
.combo {
  width: 20%;
}
.input {
  width: 80%;
  margin-left: 10%;
}
</style>
