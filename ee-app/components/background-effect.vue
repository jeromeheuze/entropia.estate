<template>
  <div>
    <div class="lv-lines"></div>
    <div class="rv-lines"></div>
    <div class="scrollNav" style="display: flex; flex-direction: column;position: fixed;right: 50px;bottom: 50px;z-index: 1000;">
      <button class="btn-em primary" v-scroll-to="'#top'" style="width:50px;height: 50px;text-align: center;padding: 0;font-size: 130%;cursor: pointer;">&uarr;</button>
      <button class="btn-em primary" v-scroll-to="'#bottom'" style="width:50px;height: 50px;text-align: center;padding: 0;font-size: 130%;cursor: pointer;">&darr;</button>
    </div>
  </div>
</template>