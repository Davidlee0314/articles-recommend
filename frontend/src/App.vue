<template>
    <div id="app">
        <background></background>
    </div>
</template>

<script>
import Background from './components/Background.vue'
export default {
    name: 'app',
    metaInfo: {
        title: 'Articles Recommendation'
    },
    components: {
        Background
    },
    // created: function() {  
    //     document.title = 'Articles Recommendation'
    // }
  
}
</script>

<style lang="stylus">
body, html, #app
    margin 0px
    height 100%
</style>
