const state=()=>{
  return {
      isRefresh:false,
  }
}

const mutations = {
  setRefresh(state,value=true){
      state.isRefresh = value;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
