<template>
    <div class="mainhead-container">
        <span>css规范</span>
    </div>
</template>
<script>
export default{
    name:'mainhead',
    data(){
        return{
            
        }
    }
}
</script>

<style type="sass" lang="scss">
.mainhead-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    z-index: 100;
    background: #398dee;
    text-align: center;
    span{
        font-size:16px;
        color:#fff;
    }
}
</style>