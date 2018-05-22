<template>
    <div class="left-container" id="app">
        <ul class="pk-flex">
            <li :key="index" v-for="(item,index) in titles" class="pk-fs-12">{{item.title}}</li> 
        </ul>
    </div>
</template>
<script>
export default{
    name:'left',
    data(){
        return{
            titles:[
                {title:'排版字体大小'},
                {title:'媒体查询'},
                {title:'网格系统'},
                {title:'网格列偏移'},
            ]
        }
    }
}
</script>

<style type="sass" lang="scss" scoped>
.left-container{
    position: fixed;
    left:0;
    top:35px;
    width: calc(260px);
    height: 100%;
    overflow-y: auto;
    z-index: 100;
    color: #364149;
    background: #fafafa;
    border-right: 1px solid rgba(0,0,0,.07);
    ul li{
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
    }
}

</style>