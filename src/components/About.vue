<template>
  <v-container fluid class="px-0">
    <HeadingAbout :head="$t('about')" />
    <AboutCards :about="$t('about')" />
    <AboutMap />
  </v-container>
</template>
