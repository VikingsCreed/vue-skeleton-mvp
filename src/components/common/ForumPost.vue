<!-- Skrevet av Robin Ellingsen -->
<template>
  <div>
    <v-row justify="center">
      <v-btn text color="transparent" class="ma-1" dark @click="dialog = true">
        <img src="./../../../public/Forumpost2.jpg" />
      </v-btn>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Garden of Salvation - Raid</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-btn
              color="primary"
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
              Press "Join Fireteam and select you character to join the
              fireteam!"
            </v-tooltip>
            <v-list three-line subheader>
              <v-subheader class="header-style font-weight-bold"
                >FIRETEAM OVERSKRIFT!</v-subheader
              >
              <v-list-item>
                <v-list-item-content>
                  <v-subheader class="header-style font-weight-bold"
                    >Fireteam Leader</v-subheader
                  >
                  <img src="./../../../public/Forumpost2.jpg" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-subheader class="header-style font-weight-bold"
                  >The team</v-subheader
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <img src="./../../../public/Forumpost2.jpg" />
              </v-list-item-content>
              <v-list-item-content>
                <img src="./../../../public/Forumpost2.jpg" />
              </v-list-item-content>
              <v-list-item-content>
                <img src="./../../../public/Forumpost2.jpg" />
              </v-list-item-content>
              <v-list-item-content>
                <img src="./../../../public/Forumpost2.jpg" />
              </v-list-item-content>
              <v-list-item-content>
                <img src="./../../../public/Forumpost2.jpg" />
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
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
            <v-btn color="primary" text @click="dialog2 = false">
              Close
            </v-btn>
            <v-btn color="primary" text @click="dialog2 = false">
              Join Fireteam
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
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

      select: [{ text: 'Char1' }, { text: 'Char2' }, { text: 'Char3' }]
    }
  }
}
</script>
