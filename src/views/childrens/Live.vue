<template>
    <div class="live-container">
        <div class="container">
            <van-swipe :autoplay="3000" indicator-color="white" class="swiper-cb">
                <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                    <img v-lazy="item.pic" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="tags">
            <ul>
                <router-link to="/" tag="li" v-for="(item,index) in tagsList" :key="index" class="tagsli">
                    <img v-lazy="item.pic">
                    <p>{{item.title}}</p>
                </router-link>
            </ul>
        </div>
        <div class="tips">
            <span>我的关注</span>
            <span>10-30</span>
            <span>黑马程序员-</span>
            <span>直播了学习</span>
        </div>
        <div class="main_scroll">
            <div class="scroll_top">
                <span>推荐直播</span>
                <div >
                    <span class="top-right">换一换</span>
                    <i class="iconfont iconhuanyihuan"></i>
                </div>
            </div>
            <div class="scroll_content">
                <ul>
                    <router-link tag="li" :to="{path:'/playvideo',query:{'videourl':item.play_url}}" v-for="(item,index) in recemmendList" :key="index" class="scroll_li">
                        <live-block :imgurl="item.cover" :title="item.title" :tags="item.area_v2_name"></live-block>
                    </router-link>
                </ul>
            </div>
            <div class="morelive">
                <span>更多4993个推荐直播 ></span>
            </div>
        </div>
        <div class="hourPai">
            <div class="hourPai_ti">
                <span>小时榜</span>
                <span>{{hoursTopTitle}}</span>
            </div>
            <div class="pai_container">
                <div class="one">
                    <img class="one_center" v-lazy="hoursTop[0].face" />
                    <span>{{hoursTop[0].uname}}</span>
                    <span>{{hoursTop[0].area_v2_name}}</span>
                </div>
                <div class="one">
                    <img v-lazy="hoursTop[1].face" class="two_center"/>
                    <span>{{hoursTop[1].uname}}</span>
                    <span>{{hoursTop[1].area_v2_name}}</span>
                </div>
                <div class="one">
                    <img v-lazy="hoursTop[2].face" class="three_center" />
                    <span>{{hoursTop[2].uname}}</span>
                    <span>{{hoursTop[2].area_v2_name}}</span>
                </div>
            </div>
        </div>
        <div v-for="(item,index) in otherList" :key="index">
            <live-hot :mainParam="item.list" :mainInfo="item.module_info"></live-hot>
        </div>
    </div>
</template>

<script>
import LiveBlock from '../../components/LiveBlock'
import LiveHot from '../../components/LiveHot'
import livedata from '@/assets/json/livejson.json'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    components: {
        LiveBlock,
        LiveHot
    },
    data() {
        return {
            recemmendList: [],
            tagsList: [],
            bannerList: [],
            hoursTop: [],
            hoursTopTitle: "",
            otherList: []
        }
    },
    created() {
        this._getListData()
    },
    methods: {
        _getListData() {
            this.bannerList = livedata.data.banner[0].list
            this.recemmendList = livedata.data.room_list[0].list
            this.tagsList = livedata.data.area_entrance_v2[0].list
            this.hoursTop = livedata.data.hour_rank[0].list
            this.hoursTopTitle = livedata.data.hour_rank[0].extra_info.sub_title
            this.otherList = livedata.data.room_list.filter(res=>{
                return res.list.length === 4
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .live-container {
        background: #fff;
    }
    .container {
        background: #fff;
        padding: 10px;
        height: 120px;
        .swiper-cb {
            height: 100%;
            width: 100%;
            // background: orchid;
            border-radius: 10px;
            img {
                height: 100%;
            width: 100%;
            }
        }
    }
    .tags {
        width: 100%;
        .tagsli {
            text-align: center;
            float: left;
            width: 20%;
            background-color: #fff;
            padding: 10px 0;
            img {
                width: 38px;
                height: 38px;
            }
            p {
                font-size: 12px;
            }
        }
    }
    .tips {
        display: flex;
        align-items: center;
        width: 100%;
        background: #fff;
        height: 50px;
        border-bottom: 1px solid #f4f4f4;
        border-top: 1px solid #f4f4f4;
        line-height: 50px;
        span:nth-of-type(1) {
            font-size: 16px;
            color: #333;
            margin-left: 10px;
        }
        span:nth-of-type(2) {
            font-size: 12px;
            color: #999;
            margin: 0px 10px;
        }
        span:nth-of-type(3) {
            font-size: 12px;
            color: #333;
        }
        span:nth-of-type(4) {
            font-size: 12px;
            color: #999;
            margin: 0px 10px;
        }
    }
    .scroll_top {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        span {
            font-size: 14px;
            font-weight: bold;
            color: #333;
        }
        .top-right {
            font-size: 14px;
            font-weight: 500;
            color: #999;
        }
        i {
            font-size: 14px;
            margin-left: 5px;
        }
    }
    .scroll_content {
        background: #fff;
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .scroll_li {
            background: #fff;
            width: 45%;
            height: 150px;
            margin: 5px;
        }
    }
    .morelive {
        background: #fff;
        width: 100%;
        height: 40px;
        text-align: center;
        border-bottom: 1px solid #f4f4f4;
        span {
            font-size: 14px;
            color: rgba(251, 107, 199, 1);
            height: 40px;
            line-height: 40px;
        }
        
    }
    .hourPai {
        border-bottom: 1px solid #f4f4f4;
    }
    .hourPai_ti {
        padding: 10px;
        span:nth-of-type(1) {
            font-weight: bold;
        }
        span:nth-of-type(2) {
            font-weight: 300;
            font-size: 14px;
            color: #999;
            margin-left: 10px;
        }
    }
    .pai_container {
        display: flex;
        align-items: flex-end;
        .one {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 15px 0 20px 0;
            span:nth-of-type(1) {
                font-size: 14px;
                color: #333;
                margin-top: 10px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;

            }
            span:nth-of-type(2) {
                font-size: 10px;
                color: #999;
            }
            img {
                width: 60px;
                height: 60px;
                background: aqua;
                border-radius: 50%;
            }
            .two_center {
                width: 80px;
                height: 80px;
                background: aqua;
                border-radius: 50%;
                border: 2px solid rgba(253, 172, 73, 1);
            }
            .one_center {
                border: 2px solid rgba(141, 165, 193, 1);
            }
            .three_center {
                border: 2px solid rgba(180, 130, 116, 1);
            }
        }
    }
    
</style>