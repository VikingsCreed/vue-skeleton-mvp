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
            <v-card>
              <v-card-title class="black--text headline blue lighten-2">
                Create a new FireTeam
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red lighten-1" text @click="dialog = false">
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <template>
            <v-expansion-panel inset>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div>Filters</div>
                </template>
                <v-card>
                  <v-btn class="apply-btn red lighten-1" text>Apply</v-btn>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template>
        </v-row>
        <ForumPost />
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      panel: [0, 1],
      disabled: false,
      readonly: false
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
</style>
