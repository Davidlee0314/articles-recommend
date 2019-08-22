<template>
    <div class="AR-searchbar middle">
        <div 
        class="AR-bar-outline" 
        @click="clickBar"
        :class="{ 'AR-bar-open': barOpen }">   
            <div class="AR-search-icon">
                <font-awesome-icon 
                icon="search" 
                size="2x" />
            </div>
            <b-form-textarea
            class="AR-search-input"
            placeholder="Enter a post..."
            rows="10"
            v-model="searchInput"
            no-resize>
            </b-form-textarea>
            <button 
            class="AR-search-btn"
            :class="{ 'AR-search-btn-big': iconBig }"
            @mouseleave="iconBig = false"
            @mouseenter="iconBig = true"
            @click="search">
            <span>Search</span></button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../utils/eventbus'
export default {
    data() {
        return {
            iconBig: false,
            barOpen: false,
            searchInput: ''
        }
    },
    methods:{
        clickBar(){ 
            if(!this.barOpen){
                this.barOpen = true
            }
        },
        search(){
            if(this.searchInput == '' & this.barOpen){
                this.$emit('noText')
            }else if(this.searchInput != '' & this.barOpen){
                var data = this.searchInput
                setTimeout(() => {
                    this.barOpen = false
                    this.$emit('haveText', data)
                    this.searchInput = ''
                }, 100)
            }
        }
    },
    created(){
        eventBus.$on('clickAll', (target)=>{
            if(target.className == 'AR-background'){
                this.barOpen = false
                this.iconBig = false
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.middle
    position absolute
    top 50%
    left 50%
    transform translateX(-50%) translateY(-50%)

.AR-searchbar
    display inline-block
.AR-search-icon
    color white
    height 40px
.AR-bar-outline
    padding 15px 15px
    border 5px white solid 
    width 80px
    height 80px
    border-radius 50px
    cursor pointer
    transition 0.5s
    display flex
    flex-direction row

.AR-search-input
    background none
    border none
    width 700px
    visibility hidden
    color white
    font-size 30px
    &:focus
        background none
        border none
        box-shadow none
        color white
        font-size 30px
    span
        visibility hidden
.AR-search-btn
    background none 
    border none
    visibility hidden
    &:focus
        outline none
.AR-bar-open
    border-radius 50px 50px 50px 50px
    cursor initial
    width 800px
    height 600px
    .AR-search-input
        visibility visible
        transition 0.1s
        transition-delay 0.1s
        label
            visibility visible
    .AR-search-icon
        position relative
        // cursor pointer
    .AR-search-btn
        padding-top 500px
        height 10px
        width 100px
        color white
        font-family sans-serif
        font-weight 900
        font-size 25px
        visibility visible
        transition-delay 0.5s

.AR-search-btn-big
    span
        font-size 27px
        &:active
            font-size 25px
</style>

