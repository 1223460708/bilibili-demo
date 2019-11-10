<template>
    <div class="recommended-container">
        <div class="container">
            <van-swipe :autoplay="3000" indicator-color="white" class="swiper-cb">
                <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                    <div class="van-content">
                        <img :src="item.image" class="vanImg"/>
                        <span>{{item.title}}</span>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="recomended-main">
            <ul>
                <router-link class="mainli" v-for="(item,index) in mainList" :key="index" tag="li" to="/playvideo">
                    <main-block :mainParams="item"
                    @tapMoreClick="tapMoreClick"></main-block>
                </router-link>
                
            </ul>
        </div>
    </div>
</template>

<script>
import MainBlock from '../../components/MainBlockcontent'
import recomendData from '@/assets/json/recommend.json'
import Vue from 'vue';
import bus from '@/config/event.js'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    data() {
        return {
            isShow: false,
            mainList: [],
            bannerList: []
        }
    },
    components: {
        MainBlock,
    },
    methods: {
        tapMoreClick() {
            bus.$emit("popmore",true)
        }
    },
    mounted() {
        bus.$on("popmoreClose",(val)=>{
            this.isShow = val
        })
    },
    created() {
        console.log(recomendData.data.items.banner_item)
        this.mainList = recomendData.data.items
        this.bannerList = recomendData.data.items[0].banner_item
    }
}
</script>

<style lang="scss" scoped>
    .recommended-container {
        width: 100%;
        height: 100%;
        .container {
            margin: 10px;
            .swiper-cb {
                height: 180px;
                border-radius: 10px;
            }
        }
    }
    .recomended-main {
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .mainli {
            border-radius: 10px;
            width: 45%;
            margin: 5px;
            height: 200px;
            background: #fff;
        }
    }
    .van-content {
        position: relative;
        .vanImg {
            background-size: cover;
            width: 100%;
            height: 100%;
        }
        span {
            position: absolute;
            bottom: 10px;
            left: 5px;
            color: #fff;
            font-size: 15px;

        }
    }
    
</style>