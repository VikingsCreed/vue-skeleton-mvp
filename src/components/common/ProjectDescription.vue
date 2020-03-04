<template>
  <v-flex xs12 text-xs-center mt-5 mb-3>
    <h1 class="display-2 font-weight-bold">{{ test }}</h1>
  </v-flex>
</template>

<script>
export default {
  name: 'ProjectDescription',
  props: {
    test: String
  }
}
</script>

<style></style>
