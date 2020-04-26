<!-- Kode skrevet av Erlend Ellefsen og Robin Ellingsen -->
<template>
  <v-container>
    <Title :title="$t('forum')" />
    <ForumNotice :class="['marginForumNotice']" />
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
<style>
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 360px) {
}
</style>
