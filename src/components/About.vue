<template>
  <v-container fluid>
    <Title :title="$t('myProfile.TITLE')" class="mx-auto" />
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
