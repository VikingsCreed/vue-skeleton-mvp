<template>
  <v-footer height="60" class="mt-5 justify-center text-xs-center d-block">
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    appVersion() {
      return this.$store.getters.appVersion
    }
  }
}
</script>
