import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'



import news from './modules/news'
import question from './modules/question'
import images from './modules/images'
import share from './modules/share'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  modules: {
    news,
    images,
    share,
    question
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})
