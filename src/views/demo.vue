<template>
    <div class="demo">
        <div v-if="isTrue">istrue</div>
        <div v-else>v-else</div>
        <div>
           <button @click="isShowFun()">点击显示</button>
           <div v-show="isShow">v-show</div>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in studentsDatas">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'Header',
    data(){
        return {
            isTrue:true,
            studentsDatas:[
                {name:'张三',age:32},
                {name:'李四',age:24},
                {name:'王五',age:58},            
            ],
        }
    },
    mounted(){
        
    },
    computed:{
        
    },
    methods:{
        

    },
    
}
</script>
<style lang="scss" type="sass" scoped>
.demo{
    margin:50px;
    text-align: left;
    .ul-number{
        display: flex;
        li {
            margin-right:10px;
        }
    }
    .bindRedClass{
        color: red;
    }
    .bindBlueClass{
        color: blue;
    }
}
</style>