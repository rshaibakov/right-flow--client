<template>
  <HelloWorld />
</template>

<script>
import { auth } from '@/db'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  async created () {
    await auth() // TODO: Убрать временную аутентификация
    await this.$store.dispatch('getSprints')
  }
}
</script>
