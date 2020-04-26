<!-- Skrevet av Robin Ellingsen -->
<template>
  <div>
    <v-row justify="center">
      <v-btn text color="transparent" class="ma-1" dark @click="dialog = true">
        <img class="shrink" src="./../../../public/Forumpost2.jpg" />
      </v-btn>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card dark>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title class="black--text headline green lighten-1"
              >Garden of Salvation - Raid</v-toolbar-title
            >
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-text>
            <div class="margin">
              <div class="text-xs-center">
                <v-btn
                  color="blue lighten-1"
                  dark
                  class="ma-2"
                  @click="dialog2 = !dialog2"
                >
                  Join fireteam!
                </v-btn>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" v-on="on">What to do?</v-btn>
                  </template>
                  Press "Join Fireteam" and select you character to join the
                  fireteam!
                </v-tooltip>
              </div>
            </div>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <div class="adjustH">
                    <h1 class="text-xs-center">
                      Fireteam Leader
                    </h1>
                  </div>
                  <div class="text-xs-center">
                    <v-list-item-content class="margin">
                      <img
                        class="shrinkBanner"
                        src="./../../../public/emblem1.jpg"
                      />
                    </v-list-item-content>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <div class="adjustH">
                  <div class="text-xs-center">
                    <h2 class="header-style font-weight-bold">The team</h2>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
            <div class="text-xs-center">
              <v-list-item>
                <v-list-item-content class="margin">
                  <img
                    class="shrinkBanner"
                    src="./../../../public/emblem2.jpg"
                  />
                </v-list-item-content>
                <v-list-item-content class="margin">
                  <img
                    class="shrinkBanner"
                    src="./../../../public/emblem3.jpg"
                  />
                </v-list-item-content>
                <v-list-item-content class="margin">
                  <img
                    class="shrinkBanner"
                    src="./../../../public/emblem4.jpg"
                  />
                </v-list-item-content>
                <v-list-item-content class="margin">
                  <img
                    class="shrinkBanner"
                    src="./../../../public/emblem5.jpg"
                  />
                </v-list-item-content>
                <v-list-item-content class="margin">
                  <img
                    class="shrinkBanner"
                    src="./../../../public/emblem6.jpg"
                  />
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card dark>
          <v-card-title class="black--text headline green lighten-1">
            Join Fireteam
          </v-card-title>
          <v-card-text>
            <v-select
              :items="select"
              label="Chose your character"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red lighten-1" text @click="dialog2 = false">
              Close
            </v-btn>
            <v-btn color="blue lighten-1" text @click="dialog2 = false">
              Join Fireteam
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      notifications: false,
      sound: true,
      widgets: false,

      select: [
        { text: 'Character Name1' },
        { text: 'Character Name2' },
        { text: 'Character Name3' }
      ]
    }
  }
}
</script>
<style scoped>
.margin {
  margin-right: 50vh;
  margin-left: 50vh;
}
@media only screen and (max-width: 768px) {
  .margin {
    margin-left: 3vh;
  }
  .shrink {
    width: 35%;
  }
  .shrinkBanner {
    width: 50%;
  }
  .adjustH {
    margin-right: 40vh;
  }
}
@media only screen and (max-width: 360px) {
  .shrink {
    width: 28%;
  }
  .margin {
    margin-left: -8vh;
  }
  .shrinkBanner {
    width: 40%;
  }
  .adjustH {
    margin-right: 58vh;
  }
}
</style>
