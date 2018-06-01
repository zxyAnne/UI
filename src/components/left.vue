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
                {title:'Background 色彩'},
                {title:'Text 文本工具'},
                {title:'Border 设置'},
                {title:'shadow 设置'},
                {title:'内外边距'},
                {title:'button 按钮'},
                {title:'icon 命名'},
                {title:'布局容器'},
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
    >ul li{
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        padding-left: 35px;
        
    }
    >ul li:hover{
        color: #398dee;
        background: #f2f2f2;
    }
    >ul li.active{
        background:#f2f2f2;
    }
    .ul-child{
        position: absolute;
        left: 23px;
    }
}

</style>