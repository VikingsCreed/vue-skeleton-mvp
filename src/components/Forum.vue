<!-- Kode skrevet av Erlend Ellefsen og Robin Ellingsen -->
<template>
  <v-container fluid>
    <Title :title="$t('forum')" class="mx-auto" />
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
.marginForumNotice {
  margin-left: 81vh;
}
</style>
