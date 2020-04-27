<!-- Skrevet av Robin Ellingsen, inneholder flere lag med dialog vinduer som skal illustrere hvordan
forumet skal se ut og hvordan man lett kan bli med i et Fireteam  -->
<template>
  <div>
    <v-flex xs12 text-xs-center mt-5 mb-3>
      <v-row justify="center">
        <v-btn
          text
          flat
          color="transparent"
          class="mx-auto dialog-button"
          dark
          @click="dialog = true"
        >
          <img class="shrinkPost" src="./../../../public/Forumpost2.jpg" />
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
                    {{ $t('forumPost.JOIN') }}
                  </v-btn>
                  <v-tooltip right>
                    <template v-slot:activator="{ on }">
                      <v-btn class="ma-2" v-on="on">{{
                        $t('forumPost.TIPBTN')
                      }}</v-btn>
                    </template>
                    {{ $t('forumPost.TIP') }}
                  </v-tooltip>
                </div>
              </div>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <div class="adjustH">
                      <h1 class="text-xs-center">
                        {{ $t('forumPost.LDR') }}
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
                      <h2 class="header-style font-weight-bold">
                        {{ $t('forumPost.TEAM') }}
                      </h2>
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
                  <br />
                  <v-list-item-content class="margin">
                    <img
                      class="shrinkBanner"
                      src="./../../../public/emblem3.jpg"
                    />
                  </v-list-item-content>
                  <br />
                  <v-list-item-content class="margin">
                    <img
                      class="shrinkBanner"
                      src="./../../../public/emblem4.jpg"
                    />
                  </v-list-item-content>
                  <br />
                  <v-list-item-content class="margin">
                    <img
                      class="shrinkBanner"
                      src="./../../../public/emblem5.jpg"
                    />
                  </v-list-item-content>
                  <br />
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
              {{ $t('forumPost.JOIN') }}
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
                {{ $t('forumPost.CLOSE') }}
              </v-btn>
              <v-btn color="blue lighten-1" text @click="dialog2 = false">
                {{ $t('forumPost.JOIN') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-flex>
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
.dialog-button {
  margin-top: 5%;
  padding: 0;
}
@media only screen and (max-width: 768px) {
  .dialog-button {
    width: 95%;
  }
  .shrinkBanner {
    width: 80%;
  }
  .margin {
    margin-right: 0%;
  }
  .adjustH {
    margin-right: 0%;
  }
  .shrinkPost {
    width: 100%;
  }
}
@media only screen and (max-width: 361px) {
  .dialog-button {
    margin-top: -10%;
  }
  .shrinkBanner {
    width: 100%;
  }
  .margin {
    margin-right: 0%;
  }
  .adjustH {
    margin-right: 0%;
  }
  .shrinkPost {
    width: 110%;
  }
}
</style>
