<template>
    <div class="AR-background"
    @mousedown="clickAll($event)">
        <b-alert
        :show="dismissCountDown"
        dismissible
        variant="info"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">No post entered</b-alert>

        <search-bar 
        v-show="searchActive"
        @noText="showAlert"
        @haveText="submitSearch"></search-bar>

        <search-list 
        v-show="!searchActive"
        @back="searchActive = true"
        :response="response"></search-list>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import SearchList from './SearchList.vue'
import { eventBus } from '../utils/eventbus'

export default {
    data() {
        return {
            dismissSecs: 5,
            dismissCountDown: 0,
            searchActive: true,
            response: undefined
        }
    },
    methods: {
        clickAll(e){
            eventBus.$emit('clickAll', e.target)
            
        },
        showAlert(){
            this.dismissCountDown = this.dismissSecs
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        submitSearch(txt){
            this.dismissCountDown = 0
            let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    loader: 'dots',
                //   onCancel: this.onCancel,
                })
                // console.log(txt)
                // AJAX
                setTimeout(() => {
                    this.$http.post("/articles", 
                    { data: txt }).then(response => {
                        this.response = response.data
                        this.searchActive = false
                        loader.hide()
                    })
                    .catch(err=>{
                        this.searchActive = false
                        this.response = [
                            {topic: 'aaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaa aaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbvaaaaaaaaaaaaabbbbbbb'}, 
                            {topic: 'aaaaaaaaa'}, 
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'}, 
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'},
                            {topic: 'aaaaaaaaa'}, ]
                        loader.hide()
                        console.log(err)
                    })
                }, 3000)  
        }
    },
    components: {
        SearchBar,
        SearchList
    }
}
</script>

<style lang="stylus" scoped>
.AR-background
    background linear-gradient(90deg, rgba(195,123,255,1) 0%, rgba(131,180,237,1) 100%)
    width 100%
    height 100%
</style>
