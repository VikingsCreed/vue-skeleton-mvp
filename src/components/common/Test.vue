<template>
  <div class="hello">
    <h1>JOKE</h1>
    <button @click="showJoke()">Show Joke Dude</button>
    <div>
      <p>{{ joke }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Test',
  props: {
    msg: String
  },
  data() {
    return {
      joke: ''
    }
  },
  methods: {
    async showJoke() {
      const config = {
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json'
        }
      }
      const joke = await axios.get('https://icanhazdadjoke.com', config)
      this.joke = joke.data.joke
    }
  }
}
</script>
