<template>
  <div class="col-xs-12 col-lg-12">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <div class="sideItemNav">
          <h2>Description</h2>
          <p>{{ this.pageDesc }}</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <div class="sideItemNav">
          <h2>Waypoint</h2>
          <ul class="telep">
            <li class="btn-em primary"><span>/wp [{{ this.pageWaypoint }}]</span><button class="btn em-primary copy-cp" title="Copy to Clipboard!" type="button" v-clipboard="() => '/wp ['+this.pageWaypoint+']'">Copy</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageDesc', 'pageWaypoint']
}
</script>