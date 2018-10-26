/*
 * @Author: lbw@puoke.com
 * @Date: 2018-03-07 15:35:35
 * @Last Modified by: li.xiaohua
 * @Last Modified time: 2018-06-03 19:20:26
 */
import {news} from '../../api'
// initial state
const state = ()=>{
    return {
        datas: [],
        startAt:0,
        rows:30,
        loading:false,
        over:false,
        refreshing:false,
        refreshAmount:0,
      }
  }

  // getters
  const getters = {
    newsDatas: state => {
        let fomartTag = function(time_at) {
            let newDate = time_at.split(' ')[0];
            let day = new Date(newDate).getDay();
            let weekDays = ['日','一','二','三','四','五','六'];
            return `${newDate} 星期${weekDays[day]}`;
        }

        return state.datas.map(function(item,index){
            item.cur_tag = fomartTag(item.time_line_at);
            item.prev_tag = index>0?fomartTag(state.datas[index-1].time_line_at):'';
            item.next_tag = index<state.datas.length-1?fomartTag(state.datas[index+1].time_line_at):'';
            return item;
        })
    },
    getDataById: (state) => (id) => {
        return state.datas.find(item => item.id === id)
      }
  }

  // actions
  const actions = {
    async loadMore ({ commit,state }) {
        if(state.loading||state.over){
            return;
        }
        commit('loadingStart');
        let res = await news.pullUpMoreLists(state.startAt,state.rows);
        commit('loadingEnd',res);
    },
    async pullRefresh({ commit,state,dispatch }){
        if(state.datas.length==0 || state.refreshing){
            return Promise.resolve();
        }
        commit('pullRefreshStart');
        let res = await news.pullDownRefreshLists(state.datas[0].time_line,state.rows);
        dispatch('autoInitRefreshAmount');
        commit('pullRefreshEnd',res);
    },
    autoRefresh({dispatch},time){
        let run = ()=>{
            setTimeout(()=>dispatch('pullRefresh').then(run),time*1000);
        }
        run();
    },
    autoInitRefreshAmount({commit},time){
        setTimeout(()=>{commit('setRefreshAmount',0)},5000)
    },
    async getContent({ commit,state,getters },id){
        let data = getters.getDataById(id);
        return data || await news.getContent(id);
    }
  }

  // mutations
  const mutations = {
    setRefreshAmount(state,amount=0){
        state.refreshAmount = 0;
    },
    setPageRows(state,rows=30){
        state.rows = rows;
    },
    pullRefreshStart(state){
        state.refreshing = true;
    },
    pullRefreshEnd(state,res){
        if(res){
            state.datas = [...res.rows,...state.datas];
            state.refreshAmount = res.rows.length;
        }
        state.refreshing = false;
    },
    loadingStart(state){
        state.loading = true
    },
    loadingEnd(state,res){
        state.page++;
        if(res){
            state.datas = [...state.datas,...res.rows];
            state.startAt = res.rows[res.rows.length-1].time_line;
            state.over = res.rows.length < state.rows;
        }else{
            state.over = true
        }
        state.loading = false
    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
