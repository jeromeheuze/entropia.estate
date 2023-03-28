<template>
  <div class="breadcrumbs">
    <nuxt-link to="/">Home</nuxt-link> <em class="bc-next"></em> <span>{{ pageTitle }}</span>
  </div>
</template>

<script>
export default {
  props: ['pageTitle']
}
</script>