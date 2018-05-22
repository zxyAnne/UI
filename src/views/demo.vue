<template>
    <div class="demo">
        <div v-if="isTrue">istrue</div>
        <div v-else>v-else</div>
        <div>
           <button @click="isShowFun()">点击显示</button>
           <div v-show="isShow">v-show</div>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in nameDatas">
                {{item.name}}
            </li>
        </ul>
        <ul class="ul-number">
            <li :key="index" v-for="(item,index) in sortNumberItems">{{item}}</li>
        </ul>
        <!-- 问题一 没有按照age进项排序-->
        <ul>
            <li :key="index" v-for="(item,index) in sortStudentsItems">
                {{index}}{{item.name}}{{item.age}}
            </li>
        </ul>
        <div v-text="message">
            {{message}}
        </div>
        <span v-html="vHtml"></span>
        <div>
            <button @click="onClickFun">v-on</button>
            <input type="text"  v-on:keyup.enter = "onEnterFun" v-model="dataCount2">
            <span>{{dataCount2}}</span>
            <!-- <span v-text="dataCount">{{dataCount}}</span> -->
        </div>
        <textarea v-model="dataTextarea"></textarea>
        <div>
            <input type="checkbox" id="isTrue" v-model="isTrue">
            <label for="isTrue">{{isTrue}}</label>
        </div>
        <p>
            <input type="radio" id="one" value="男" v-model="sex">
            <label for="one">男</label><br/>

            <input type="radio" id="two" value="女" v-model="sex">
            <label for="two">女</label><br/>
            <span>{{sex}}</span>
        </p>
        <div>
            <!-- <img src="../assets/images/icon-type-wenda.jpg" width="50"> -->
            <img :src="imgSrcDatas.src" width="50">
        </div>
        <div :class="isTrue?'bindRedClass':'bindBlueClass'">绑定class</div>
        <div :style="isTrue?'color:yellow':'color:blue'">绑定style</div>
        <div v-cloak>{{message}}</div>

    </div>
</template>

<script>
export default{
    name:'Header',
    data(){
        return {
            isTrue:true,
            isShow:false,
            nameDatas:[
                {name:'张三'},
                {name:'李四'},
                {name:'王五'},
            ],
            studentsDatas:[
                {name:'张三',age:32},
                {name:'李四',age:24},
                {name:'王五',age:58},            
            ],
            numDates:[15,52,5,58,64,35,44],
            message:'v-text',
            vHtml:'v-html',
            dataCount:1,
            dataCount2:'',
            dataTextarea:'',
            sex:'男',
            imgSrcDatas:{
                src:require('../assets/images/icon-type-wenda.jpg')
            }
        }
    },
    mounted(){
        // this.sortStudents;
        // this.students.push({name:'张三',age:22});
        // this.sortStudents;
    },
    computed:{
        sortNumberItems:function(){
            return this.numDates.sort(this.sortNumberFun);
        },
        sortStudentsItems:function(){
            return this.sortStudentsFun(this.studentsDatas,'age');
        }
    },
    methods:{
        isShowFun(){
            isShow:true;
        },
        sortNumberFun(a,b){
            return a-b
        },
        sortStudentsFun(array,key){
            console.log(array,key);
            return array.sort(function(a,b){
                var x = a[key];
                var y = b[key];
                return (x-y)?-1:((x-y)?1:0);
            })
        },
        onClickFun:function(){
            this.dataCount++;
        },
        onEnterFun:function(){
            this.dataCount2 = parseInt(this.dataCount2); 
        },

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