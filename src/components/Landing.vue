<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading :title="$t('landing.TITLE')" />
      <Description :description="$t('landing.DESCRIPTION')" />
    </v-layout>
    <ProjectDescription :test="$t('test.TEST')" />
  </v-container>
</template>
