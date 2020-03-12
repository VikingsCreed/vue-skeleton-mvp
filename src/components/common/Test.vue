<template lang="pug">
  div#app
    div(
      v-for="user in users"
      :key="users.id"
    )
      h1 {{ user.name }}
      p {{ user.email }}
    button(@click="fetchUsers") Click me!
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI).then(result => {
        this.users = result.data
      })
    }
  }
}
</script>
