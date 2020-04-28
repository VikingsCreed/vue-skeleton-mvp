<!-- Kode skrevet av Robin Elligsen -->
<template>
  <v-container blue lighten-2 fluid>
    <v-flex>
      <v-container class="adjustpos">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.4495372085696!2d9.057425416157013!3d59.408895911682364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46474937ae91b7df%3A0xd599b79b8eb4e320!2zVW5pdmVyc2l0ZXRldCBpIFPDuHLDuHN0LU5vcmdlLCBCw7g!5e0!3m2!1sno!2sno!4v1587372955837!5m2!1sno!2sno"
          width="1000"
          height="500"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-container>
    </v-flex>
  </v-container>
</template>

<style scoped>
.adjustpos {
  margin-left: 22%;
  margin-bottom: 10vh;
}
@media only screen and (max-width: 800px) {
  .adjustpos {
    visibility: hidden;
  }
}
</style>
