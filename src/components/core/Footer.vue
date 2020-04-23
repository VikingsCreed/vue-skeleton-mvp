<!--Footer for hele nettsiden-->
<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="grey">
        <strong class="subheading">{{ $t('footer.INFO') }}</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-xs-center">
        {{ new Date().getFullYear() }} — <strong>TeamFinder</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    appVersion() {
      return this.$store.getters.appVersion
    }
  },
  data: () => ({
    // Henter ikoner fra Font Awesome
    icons: ['fab fa-github', 'fa-envelope', 'fab fa-google-drive']
  })
}
</script>
