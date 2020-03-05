<template>
  <div class="display-2 font-weight-light">
    <v-flex xs12 text-xs-center mb-2>{{ test }}</v-flex>
  </div>
</template>

<script>
export default {
  name: 'D2Profile',
  props: { test: String }
}
</script>

<style scoped></style>
