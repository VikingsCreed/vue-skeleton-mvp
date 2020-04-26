<!-- Skrevet av Robin Ellingsen -->
<template>
  <v-flex xs12 text-xs-center mt-5 mb-3>
    <v-row class="mx-auto">
      <v-dialog v-model="dialog" persistent max-width="390">
        <template v-slot:activator="{ on }">
          <v-btn color="red lighten-1" v-on="on">{{
            $t('forumNotice.NOTICE')
          }}</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">{{
            $t('forumNotice.NOTICE')
          }}</v-card-title>
          <v-card-text>{{ $t('forumNotice.DIALOG') }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red lighten-1"
              text
              @click="dialog = false"
              :to="{ name: 'landing' }"
              >{{ $t('forumNotice.NO') }}</v-btn
            >
            <v-btn color="blue lighten-1" text @click="dialog = false">{{
              $t('forumNotice.YES')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped></style>
