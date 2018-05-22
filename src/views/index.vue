<template>
    <div>
        <MainHead></MainHead>
        <div class="main">
            <Left></Left>
            <Center></Center>
        </div>
    </div>
</template>

<script>
import MainHead from '../components/mainhead'
import Left from '../components/left'
import Center from '../components/center'
export default{
    name:'Header',
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
