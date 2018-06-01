<template>
    <div>
        <MainHead></MainHead>
        <div class="main">
            <Left :scrollIndex="scrollIndex"></Left>
            <Center @currentScrollIndex="loadScrollIndex"></Center>
        </div>
    </div>
</template>

<script>
import MainHead from '../components/mainhead'
import Left from '../components/left'
import Center from '../components/center'
export default{
    name:'Header',
    data(){
        return {
            scrollIndex:1,
        }
    },
    methods:{
        loadScrollIndex(index){
            this.scrollIndex = index;
        }
    },
    components:{
        MainHead,
        Left,
        Center
    },
}
</script>
<style lang="scss" type="sass" scoped>
.main{
    width:100%;
    margin-top: 6px;
    background-color: rgb(245, 245, 245);
    margin-bottom: 0px;
}
</style>
