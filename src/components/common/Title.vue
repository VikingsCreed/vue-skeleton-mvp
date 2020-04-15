<template>
  <v-flex xs12 text-xs-center mt-5 mb-3>
    <h1 class="display-2 font-weight-light">{{ title.TITLE }}</h1>
  </v-flex>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String
  }
}
</script>

<style></style>
