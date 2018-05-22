<template>
    <div class="center-container">
        <h1 class="">排版</h1>
            
    </div>
</template>
<script>
export default{
    name:'center',
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" type="sass" scoped>
@import '../assets/css/frame.scss';
.center-container{
    position: fixed;
    top:35px;
    left: 260px;
    width: calc(100%);
    height: 100%;
    overflow-y: auto;
    z-index: 100;
    background: white;
    box-shadow: 0px 0px 8px #999;
    text-align: left;
    padding:20px;
}
</style>