<template>
  <v-container fluid class="mx-0 px-0">
    <Heading />
    <v-layout row wrap>
      <Description :description="$t('landing.DESCRIPTION')" />
    </v-layout>
    <ProjectDescription :test="$t('test.TEST')" />
  </v-container>
</template>
