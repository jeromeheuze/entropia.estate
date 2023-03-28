<template>
  <div class="breadcrumbs">
    <nuxt-link to="/">Home</nuxt-link> <em class="bc-next"></em> <nuxt-link to="/calypso/">Calypso</nuxt-link> <em class="bc-next"></em> <span>{{ estateName }}</span>
  </div>
</template>

<script>
export default {
  props: ['estateName']
}
</script>