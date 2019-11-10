<template>
    <div>
        <van-tabbar v-model="active"
        active-color="#07c160"
        inactive-color="#000"
        route
        safe-area-inset-bottom>
            <van-tabbar-item icon="wap-home-o" name="home" to="/home/live" replace>首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" name="channel" to="/channel" replace>频道</van-tabbar-item>
            <van-tabbar-item icon="aim" name="dynamic" to="/dynamic" replace>动态</van-tabbar-item>
            <van-tabbar-item icon="bag-o" name="membersBuy" to="/membersBuy" replace>会员购</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o" name="my" to="/my" replace>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
    data() {
        return {
            active: "home"
        }
    }
}
</script>

<style lang="">
    
</style>