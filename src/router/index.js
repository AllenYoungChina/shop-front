import { createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import Commodity from '../components/Commodity.vue';
import Detail from '../components/Detail.vue';
import Shopper from '../components/Shopper.vue';
import Login from '../components/Login.vue';
import ShopCart from '../components/ShopCart.vue';
import Error from '../components/Error.vue';

// 定义路由
const routes = [
    {path: '/', component: Home, meta: {title: '首页'}},
    {path: '/commodity', component: Commodity, meta: {title: '商品列表页面'}},
    // :id是设置路由变量
    {path: '/commodity/detail/:id', component: Detail, meta: {title: '商品详细页面'}},
    {path: '/shopper', component: Shopper, meta: {title: '个人中心页面'}},
    {path: '/shopper/login', component: Login, meta: {title: '注册登录页面'}},
    {path: '/shopper/shopcart', component: ShopCart, meta: {title: '我的购物车'}},
    // 路由匹配
    {path: '/:pathMatch(.*)*', component: Error, meta: {title: '页面丢失'}},
]

// 创建路由对象
const router = createRouter({
    // 设置历史记录模式
    history: createWebHistory(),
    // routes: routes的缩写
    routes,
})
export default router