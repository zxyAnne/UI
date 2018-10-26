const state=()=>{
    return {
        images:[],
        activeIndex:0
    }
}

const mutations = {
    setImages(state,{images,activeIndex}){
        state.images = images;
        state.activeIndex = activeIndex;
    },
    setIndex(state,activeIndex){
        state.activeIndex = activeIndex;
    }
}

export default {
    namespaced: true,
    state,
    mutations
  }