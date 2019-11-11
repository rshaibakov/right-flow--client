<template>
  <VApp>
    <VAppBar app>
      <VToolbarTitle class="headline text-uppercase">
        <span>Vuetify</span>

        <span class="font-weight-light">MATERIAL DESIGN</span>
      </VToolbarTitle>

      <VSpacer />

      <VBtn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>

        <VIcon>mdi-open-in-new</VIcon>
      </VBtn>

      <VAvatar
        color="blue"
        tile>
        <VIcon dark>
          mdi-alarm
        </VIcon>
      </VAvatar>
    </VAppBar>

    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>
export default {
  name: 'App'
}
</script>
