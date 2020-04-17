<template class="adjust-y">
  <v-parallax
    class="fix"
    dark
    src="./../../../public/landing.jpg"
    id="parallax-id"
  >
    <v-row>
      <v-col class="grey--text text--darken-4 adjust-y">
        <h1 class="header-style font-weight-bold adjust-y">
          {{ head.HEAD }}<br />
          {{ head.HEAD2 }}
        </h1>
        <div class="my-2">
          <v-btn x-large color="red lighten-1" dark>{{ head.LEARN }}</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    head: String
  },
  mounted() {
    document.getElementById('parallax-id').style.height = '100vh'
  }
}
</script>
<style scoped>
.adjust-y {
  margin-top: -300px;
}
.header-style {
  font-size: 6em;
}
</style>
