<!--Redigert av Robin Ellingsen og Erlend Ellefsen-->
<template>
  <v-container fluid>
    <h1 class="display-3 font-weight-bold text-xs-center mt-5">
      {{ $t('home.GREETING') }} {{ name }}
    </h1>
    <p class="text-xs-center">{{ $t('home.LOGGEDIN') }}</p>

    <v-container>
      <div id="app">
        <v-flex text-xs-center mt-5>
          <v-btn
            x-large
            color="blue lighten-1"
            dark
            :to="{ name: 'profile' }"
            >{{ $t('home.GOTOMYPROFILE') }}</v-btn
          >
          <v-btn x-large color="blue lighten-1" dark :to="{ name: 'forum' }">{{
            $t('home.GOTOFORUM')
          }}</v-btn>
        </v-flex>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('home.TITLE')} - %s`
    }
  },

  data() {
    return {
      name: this.$store.state.auth.user.name
    }
  }
}
</script>
