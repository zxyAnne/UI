<template>
    <div class="left-container">
        <ul class="pk-flex">
            <li v-for="(item,index) in titles" 
            :key="index"
             :title="item.title"
             @click="scrollTo(index)"
            class="pk-fs-12"
            :class="{'active':scrollIndex==index+1}"
            >{{item.title}}</li> 
        </ul>
    </div>
</template>
<script>
import pageUtil from '../utils/page';
export default{
    name:'left',
    data(){
        return{
            titles:[
                {title:'1、Background 色彩'},
                {title:'2、Text 文本工具'},
                {title:'3、Border 设置'},
                {title:'4、shadow 设置'},
                {title:'5、内外边距'},
                {title:'6、button 按钮'},
                {title:'7、icon 命名'},
                {title:'8、布局容器'},
                {title:'9、弹框容器'},
            ]
        }
    },
    props:{
        scrollIndex:Number,
    },
    methods:{
        scrollTo(index){
            pageUtil.scrollTo(index);
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
        background:#e0e0e1;
    }
    .ul-child{
        position: absolute;
        left: 23px;
    }
}

</style>