<template>
  <v-layout row wrap>
    <v-flex xs4 class="my-2">
      <v-card class="mx-auto" max-width="474">
        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/b6aaa57716caca89cfcd61105ce40f4a.jpg"
          class="profile-card"
        >
          <br />
          <v-col class="d-flex">
            <v-card-title class="justify-end">Character 1</v-card-title>
            <v-card-title class="justify-end">Light lvl</v-card-title>
          </v-col>
        </v-img>

        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/4689fb76483b6d2679a0bd70b48b7d7f.jpg"
          class="item-img"
        ></v-img>
      </v-card>
    </v-flex>
    <v-flex xs4 class="my-2">
      <v-card class="mx-auto" max-width="474">
        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/b6aaa57716caca89cfcd61105ce40f4a.jpg"
          class="profile-card"
        >
          <br />
          <v-col class="d-flex">
            <v-card-title class="justify-end">Character 1</v-card-title>
            <v-card-title class="justify-end">Light lvl</v-card-title>
          </v-col>
        </v-img>

        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/4689fb76483b6d2679a0bd70b48b7d7f.jpg"
          class="item-img"
        ></v-img>
      </v-card>
    </v-flex>
    <v-flex xs4 class="my-2">
      <v-card class="mx-auto" max-width="474">
        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/b6aaa57716caca89cfcd61105ce40f4a.jpg"
          class="profile-card"
        >
          <br />
          <v-col class="d-flex">
            <v-card-title class="justify-end">Character 1</v-card-title>
            <v-card-title class="justify-end">Light lvl</v-card-title>
          </v-col>
        </v-img>

        <v-img
          src="https://www.bungie.net/common/destiny2_content/icons/4689fb76483b6d2679a0bd70b48b7d7f.jpg"
          class="item-img"
        ></v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'D2Profile',
  props: { myProfile: String }
}
</script>

<style scoped>
.item-img {
  height: 90px;
  width: 90px;
}
.profile-card {
  max-width: 474px;
  max-height: 96px;
}
</style>
