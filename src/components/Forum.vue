<template>
  <v-container fluid>
    <Title :title="$t('forum')" class="mx-auto" />
    <forumPages :title="$t('forum')" />
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('forum.TITLE')} - %s`
    }
  }
}
</script>
