import Vue from 'vue'
import Router from 'vue-router'
import index from "@/components/index";
import hardware from "@/components/HardWare";
import searchHelp from "@/components/searchHelp";
import Wingplan from "@/components/Wingplan";
import jianwang from "@/components/jianwang";
import pc from "@/components/pc";
import phone from "@/components/phone";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: hardware
    }, {
      path: '/searchHelp',
      name: 'searchHelp',
      component: searchHelp
    }, {
      path: '/Wingplan',
      name: 'Wingplan',
      component: Wingplan
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: jianwang
    },
    {
      path: '/pc',
      name: 'pc',
      component: pc
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    }
  ]
})
