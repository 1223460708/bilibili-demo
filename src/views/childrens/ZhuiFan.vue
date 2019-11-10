<template>
    <div class="zhuifan-container">
        <div class="header-container">
            <van-swipe :autoplay="3000" indicator-color="white" class="swiper-cb">
                <van-swipe-item v-for="(item,index) in bannerList" :key="index" class="swiper-cb-swiperitem">
                    <img v-lazy="item.cover" />
                </van-swipe-item>
            </van-swipe>
            <div class="type-container">
                <div class="typese" v-for="(item,index) in typesItemList" :key="index">
                    <img v-lazy="item.icon" />
                    <p>{{item.title}}</p>
                </div>
                
            </div>
        </div>
        <div class="zhuifan-recommended">
            <div class="title">
                <div class="left-title">
                    <p>追番推荐</p>
                    <p>你还没有追番，追番后可以收到更新提醒哦</p>
                </div>
                <div class="right-title">查看更多 ></div>
            </div>
            <div class="wheel">
                <ul>
                    <li v-for="(item,index) in zhuifanRecommended" :key="index" class="wheel-li">
                        <div class="img-cont">
                            <img v-lazy="item.cover" />
                            <i class="iconfont"></i>
                            <span class="member-ss">{{item.badge}}</span>
                            <span class="update-ss">更新至第{{item.new_ep.index_show}}话</span>
                        </div>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <zhuifan-block :mainParams="fanblock"></zhuifan-block>
            <zhuifan-block :mainParams="countries"></zhuifan-block>
            <zhuifan-date :itemList="selectDateList"></zhuifan-date>
            <div class="zhuifan-hot">
                <div class="hot-top">
                    <span>热门榜单</span>
                    <span>查看更多 ></span>
                </div>
                <van-swipe :loop="false" :width="300" :height="300" :show-indicators="false">
                    <van-swipe-item class="vanItem" v-for="(item,index) in hotTops" :key="index">
                        <div class="item">
                            <div class="item-title">
                                <span>{{item.title}}</span>
                            </div>
                            <div v-for="(childItem,index) in item.cards" :key="index" class="hot-childitem">
                                <img v-lazy="childItem.cover" />
                                <div class="item-center">
                                    <span>{{childItem.title}}</span>
                                    <span>{{childItem.pts}}</span>
                                </div>
                                <span class="item-ranking">{{index+1}}</span>
                            </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
                <div class="hot-bottom"><span>查看完整榜单 ></span></div>
            </div>
        </div>
    </div>
</template>

<script>
import ZhuifanBlock from '@/components/ZhuifanBlock.vue'
import ZhuifanDate from '@/components/ZhuifanDate.vue'
import zhuifanData from '@/assets/json/zhuifan.json'
import zhuifanRecommend from '@/assets/json/zhuifanRecommend.json'
import Vue from 'vue';
// import bus from '@/config/event.js'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    components: {
        ZhuifanBlock,
        ZhuifanDate
    },
    data() {
        return {
            zhuifanRecommended: [],
            hotTops: [], //热门榜单
            typesItemList: [], //标签分类
            bannerList: [], 
            fanblock: {}, //番剧推荐 
            countries: {}, //国创推荐
            selectDateList: [] //每天选择

            
        }
    },
    created() {
        console.log(zhuifanData.result)
        this.typesItemList = zhuifanData.result.regions
        this.bannerList = zhuifanData.result.modules[0].items
        this.fanblock = {
            title: zhuifanData.result.modules[2].title,
            items: zhuifanData.result.modules[2].items,
        }
        this.countries = {
            title: zhuifanData.result.modules[4].title,
            items: zhuifanData.result.modules[4].items,
        }
        this.hotTops = zhuifanData.result.modules[6].items
        this.selectDateList = zhuifanData.result.modules[5].items
        this.zhuifanRecommended = zhuifanRecommend.result.follows
    }

}
</script>

<style lang="scss" scoped>
    .zhuifan-container {
        background-color: #fff;
    }
    .header-container {
        border: 1px solid #f4f4f4;
        .swiper-cb {
            margin: 10px;
            border-radius: 10px;
            height: 180px;
            .swiper-cb-swiperitem {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .type-container {
            display: flex;
            align-items: center;
            .typese {
                flex: 1;
                text-align: center;
                padding-bottom: 20px;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    p {
                        font-size: 12px;
                        color: #444;
                        margin-top: 6px;
                        font-weight: 300;
                    }
                }
            }
        }
    }
    .zhuifan-recommended {
        background: #fff;
        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            .left-title {
                p:nth-of-type(1) {
                    font-size: 16px;
                    color: #333;
                }
                p:nth-of-type(2) {
                    font-size: 12px;
                    color: #666;
                    font-weight: 300;
                }
            }
            .right-title {
                color: #999;
            }
        }
    }
    .wheel {
        border-bottom: 1px solid #f4f4f4;
        ul {
            display: -webkit-box;
            overflow-x: scroll;
            box-sizing: border-box;
            width: 100%;
            height: 120px;
            list-style: none;
            .wheel-li {
                margin: 6px;
                width: 100px;
                height: 70px;
                .img-cont {
                    position: relative;
                    
                    img{
                        width: 100%;
                        height: 70px;
                        border-radius: 6px;
                    }
                    .member-ss {
                        position: absolute;
                        top: 3px;
                        right: 3px;
                        color: #fff;
                        background-color: palevioletred;
                        font-size: 8px;
                        border-radius: 2px;
                        padding: 3px;
                    }
                    .update-ss {
                        position: absolute;
                        bottom: 6px;
                        left: 3px;
                        color: #fff;
                        font-size: 8px;
                    }
                }
                p {
                    font-size: 14px;
                }
                
            }
        }
    }
    .zhuifan-hot {
        background-color: #fff;
        padding-bottom: 10px;
        .hot-top {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            span:nth-of-type(1) {
                font-size: 14px;
                color: #333;
            }
            span:nth-of-type(2) {
                font-size: 12px;
                color: #999;
            }
        }
        .vanItem {
            background-color: #fff;
            padding-left: 10px;
            .item {
                border-radius: 10px;
                height: 100%;
                width: 100%;
                background-color:rgba(245, 245, 245, 1);
                .item-title {
                    position: relative;
                    top: 0px;
                    left: 10px;
                    height: 40px;
                    line-height: 40px;
                }
                .hot-childitem {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 85px;
                    padding-left: 10px;
                    img {
                        width: 100px;
                        height: 70px;
                        border-radius: 10px;
                    }
                    .item-center {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding-left: 10px;
                        height: 70px;
                        width: 120px;
                        span:nth-of-type(1) {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            font-size: 12px;
                            color: #333;
                        }
                        span:nth-of-type(2) {
                            font-size: 9px;
                            color: #999;
                        }
                    }
                    .item-ranking {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 30px;
                        height: 20px;
                        text-align: center;
                        background-color: gold;
                        line-height: 20px;
                        border-radius: 5px;
                        color: #fff;
                        font-size: 10px;

                    }
                }
            }
            
        }
        .hot-bottom {
            text-align: center;
            padding: 10px;
            span {
                font-size: 14px;
                height: 20px;
                line-height: 20px;
                color: palevioletred;
            }
        }
    }
</style>