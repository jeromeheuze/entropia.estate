<template>
  <div class="col-xs-12 col-lg-12">

    <CoolLightBox :items="items" :index="index" :effect="'fade'" @close="index = null"/>

    <div class="images-wrapper">
      <div
          class="image"
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>

  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
//import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  props: ['items', 'index'],
  components: { CoolLightBox }
}
</script>