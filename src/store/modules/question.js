/*
 * @Author: lixiaohua@puoke.com 
 * @Date: 2018-06-01 17:55:18 
 * @Last Modified by: li.xiaohua
 * @Last Modified time: 2018-06-04 16:29:59
 */

import {question} from '../../api'
//state
const state = ()=>{
    return {
        //列表数据
        datas:[],
        //页数
        page:1,
        //加载状态
        loading:false,
        //是否全部加载完毕
        over:false,
        //数据类型
        type:'all',
        //分类筛选
        classify_ids:'',
    }
}

const mutations = {
    switchType(state,type){
        state.type = type;
    },
    switchClassify(state,classify_ids){
        state.classify_ids = classify_ids;
    },
    resetDatas(state){
        state.datas = [];
        state.page = 1;
        state.loading = false;
        state.over = false;
    },
    loadingStart(state){
        state.loading = true;
    }, 
    loadingEnd(state,data=[]){
        //页数累加
        state.page++;
        if(data) {
            //数据替换本地数组
            state.datas = [...data,...state.datas];
        } else {
            state.over = true;
        }
        state.loading = false;
    },
}

const actions = {
    switchData ({state,commit,dispatch},type) {
        commit('resetDatas');
        commit('switchType',type);
        dispatch('loadMore')
    },
    filterClassify({state,commit,dispatch},classify_ids){
        commit('resetDatas');
        commit('switchClassify',classify_ids);
        dispatch('loadMore')
    },
    //请求数据
    async loadMore({state,commit,getters,rootState}) {
        //判断是否正在加载
        let {page,rows,classify_ids} = state,res;
        if(!getters.canLoad){
            return;
        }
        commit('loadingStart');
        if(state.type=='all'){
            res = await question.getQuestionAllListData({page,classify_ids});
        }else{
            res = await question.getQuestionRecommendListData({page,classify_ids});
        }
        commit('loadingEnd',res?res.rows:[]);//加载结束
    }
}

const getters = {
    //是否能加载更多
    canLoad:state=>{
        return !state.loading && !state.over
    },
    //显示加载中
    showLoad:state=>{
        return !state.over;
    },
    //显示加载完成
    showOver:state=>{
        return state.over && state.datas.length > 0;
    },
    //显示无内容
    showEmpty:state=>{
        return state.over && state.datas.length == 0;
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }