import Vue from "vue/dist/vue.common.js";
import VueRouter from "vue-router";
import routes  from "./routes";
import store from '../store';
Vue.use(VueRouter);

const router= new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((routeTo,routeFrom,next)=>{
   if (routeTo.meta.guest || routeTo.matched.some(parent => parent.meta.guest)){
       if (store.state.isLoggedIn){
          return next({name: 'home'});
       }
   }
   next();
});

router.beforeEach((routeTo,routeFrom,next)=>{
    if (routeTo.meta.auth || routeTo.matched.some(parent => parent.meta.auth)){
        if (! store.state.isLoggedIn){
           return next({name: 'login'});
        }
    }
    next();
});

router.beforeEach((routeTo,routeFrom,next)=>{
    if (routeTo.meta.verified || routeTo.matched.some(parent => parent.meta.verified)){
        if (store.state.user.isVerified!=2){
            return next({name: 'home'});
        }
    }
    next();
});


export default router;
