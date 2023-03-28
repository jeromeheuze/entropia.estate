import Vue from 'vue';
Vue.filter('ped', function (value) {
    // tanks @li-x for his simple formating function
    return new Intl
        .NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .formatToParts(value).filter(p => p.type !== 'currency')
        .reduce((s, p) => s + p.value, '')
        .trim()
})