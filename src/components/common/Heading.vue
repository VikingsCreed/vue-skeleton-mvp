<template>
  <v-parallax dark src="./../../../public/corridors.jpg">
    <v-row class="mx-auto">
      <v-col class="mx-auto black--text">
        <h1 class="display-2 mb-4 font-weight-thin">{{ head }}</h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    head: String
  }
}
</script>
