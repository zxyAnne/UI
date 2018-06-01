import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import Demo from '../views/demo'
Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
      }
]
const scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return {
            selector: to.hash
        }
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        console.log("scrollBehavior");
        return {
                x:0,
                y:0
        }
     }
}
let newRouter = new Router({
    routes,
    scrollBehavior,
})
export default newRouter;