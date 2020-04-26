<!-- Kode skrevet av Robin Elligsen -->
<template class="adjust-y">
  <v-parallax dark src="./../../../public/about.png" id="imgAbout">
    <v-row>
      <v-col class="grey--text text--darken-4 adjust-y">
        <h1 class="header-style font-weight-bold adjust-y">
          {{ head.HEAD }}<br />
          {{ head.HEAD2 }}
        </h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'HeadingAbout',
  props: {
    head: String
  },
  mounted() {
    document.getElementById('imgAbout').style.height = '100vh'
  }
}
</script>
<style scoped>
.adjust-y {
  margin-top: -400px;
}
.header-style {
  font-size: 6em;
}
@media only screen and (max-width: 768px) {
  h1 {
    margin-right: 10%;
  }
  .header-style {
    font-size: 4.5em;
  }
}

@media only screen and (max-width: 360px) {
  h1 {
    margin-top: 1% !important;
    color: black !important;
  }
  .header-style {
    font-size: 4.5em;
  }
}
</style>
