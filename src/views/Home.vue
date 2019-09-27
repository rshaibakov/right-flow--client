<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { auth } from '@/db'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',

  components: {
    HelloWorld
  },

  async created () {
    await auth() // TODO: Убрать временную аутентификация
    await this.$store.dispatch('getSprints')
  }
}
</script>
