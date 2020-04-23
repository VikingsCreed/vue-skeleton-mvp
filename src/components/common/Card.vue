<!-- Kode skrevet av Erlend Ellefsen -->
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-1" v-on="on" class="mx-auto">{{
          title.WHERE
        }}</v-btn>
      </template>
      <v-card dark>
        <v-card-title>
          <span class="headline">{{ title.TITLE }}</span>
        </v-card-title>
        <v-card-text
          >{{ title.STEP1
          }}<a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamid.io/"
            >{{ title.LINK }}</a
          ><br />{{ title.STEP2 }}<br />{{ title.STEP3 }}<br />{{ title.STEP4
          }}<br /><br />{{ title.OPTIONAL }}<br
        /></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-1" text @click="dialog = false">{{
            title.OK
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  name: 'Card',
  props: {
    title: String
  }
}
</script>
