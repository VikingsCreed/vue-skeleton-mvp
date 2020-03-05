<template>
  <v-container fluid>
    <D2Profile :test="$t('myProfile.TITLE')" />
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('about.TITLE')} - %s`
    }
  }
}
</script>
