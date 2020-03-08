<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="display-1 font-weight-thin">{{
        title
      }}</v-card-title>
      <v-card-text class="ml-1">{{ text }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    text: String
  }
}
</script>
<style></style>
