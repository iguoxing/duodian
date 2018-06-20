import Vue from 'vue'
import Router from 'vue-router'
const device = require('current-device').default

//PC版
const Index = resolve => require(['@/components/pc/Index'], resolve) //首页
const About = resolve => require(['@/components/pc/About'], resolve) //关于我们

//移动版
const Index_mb = resolve => require(['@/components/mobile/Index'], resolve) //首页
const About_mb = resolve => require(['@/components/mobile/About'], resolve) //关于我们

const RouterPC = [
    { path: '/', component: Index, alias: '/index' },
    { path: '/about', component: About, alias: '/aboutUs' },
    { path: '*', component: Index }
];

const RouterMobile = [
    { path: '/', component: Index_mb, alias: '/index' },
    { path: '/about', component: About_mb, alias: '/aboutUs' },
    { path: '*', component: Index_mb }
];

let iRouter = [];

if (device.mobile()) {
    iRouter = RouterMobile;
} else {
    iRouter = RouterPC;
}

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: iRouter
})

Vue.use(Router)