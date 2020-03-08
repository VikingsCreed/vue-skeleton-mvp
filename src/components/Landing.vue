<template>
  <v-container fluid class="mx-0 px-0">
    <Heading :head="$t('landing.HEAD')" />
    <ProjectDescription :test="$t('test.TEST')" />
    <Card :title="$t('landing.TITLE')" :text="$t('landing.DESCRIPTION_VUE')" />
  </v-container>
</template>
