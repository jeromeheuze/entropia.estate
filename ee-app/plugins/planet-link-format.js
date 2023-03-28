import Vue from 'vue';
Vue.filter('planet', function (value) {
    // format planet link
    return '/'+value.trim().toLowerCase().replace(/\s/g, '-')+'/';
})