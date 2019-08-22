<template>
    <div class="AR-search-list">
        <div class="row">
            <div class="list-group">
                <a
                v-for="(r, i) in response" 
                :key="'list' + i"
                :href="r.url"
                target="_blank"
                class="list-group-item list-group-item-action">
                {{ r.topic }}</a>
            </div>
        </div>
        <button 
            class="AR-search-btn"
            :class="{ 'AR-search-btn-big': iconBig }"
            @mouseleave="iconBig = false"
            @mouseenter="iconBig = true"
            @click="back">
        <span>Back</span></button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            iconBig: false
        }
    },
    methods:{
        back(){
            this.$emit('back')
        }
    },
    props: {
        response: Array
    }
}
</script>
<style lang="stylus" scoped>
.AR-search-list
    position absolute
    top 50%
    left 50%
    transform translateX(-50%) translateY(-50%)
    a 
        width 800px

.AR-search-btn  
    top 620px
    left 90%
    position absolute
    background none 
    border none
    color white
    font-family sans-serif
    font-weight 900
    font-size 25px
    &:focus
        outline none

.AR-search-btn-big
    span
        font-size 27px
        &:active
            font-size 25px

.list-group-item.list-group-item-action
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
    width 800px
    display inline-block
</style>>