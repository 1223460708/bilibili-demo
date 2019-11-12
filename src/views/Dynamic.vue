<template>
    <div class="dynamic-container">
        <div class="nav">
            <div class="nav-center">
                <div @click="tapTopClicl(1)" class="wcc" :class="[selectTop===1?'changeCs':'nochange']"><span>视频</span></div>
                <div @click="tapTopClicl(2)" class="wcc" :class="[selectTop===2?'changeCs':'nochange']"><span>综合</span></div>
                <div @click="tapTopClicl(3)" class="wcc" :class="[selectTop===3?'changeCs':'nochange']"><span>热门</span></div>
            </div>
            <div class="nav-search">
                <van-search placeholder="查找精彩动态内容" v-model="value" shape="round"/>
            </div>
        </div>
        <div class="dynamic-main">
            <div v-for="(item,index) in topList" 
            :key="index" 
            class="main" 
            v-show="index===(selectTop-1)"
            @touchstart="gtouchstart"
            @touchmove="gtouchmove"
            @touchend="gtouchend"
            ref="chitem">
                <ul>
                    <li v-for="index in 10" :key="index" class="main-li">
                        <div class="li-top">
                            <div class="head-name">
                                <img src="" />
                                <div class="name">
                                    <p>黑马程序员</p>
                                    <p>20小时前 投稿了视频</p>
                                </div>
                            </div>
                        </div>
                        <div class="tags-li">
                            <span>#延时摄影##影视制作##线上课堂#</span>
                        </div>
                        <div class="bigImg">
                            <img src="" />
                        </div>
                        <span class="main-title">23节轻松掌握大范围延时摄影，抖音上最流行的特殊拍摄技巧</span>
                        <div class="main-bottom">
                            <div class="item">
                                <i class="iconfont iconzhuanfa"></i>
                                <span>{{forwarding}}</span>
                            </div>
                            <div class="item">
                                <i class="iconfont iconpinglun1"></i>
                                <span>{{chatNums}}</span>
                            </div>
                            <div class="item">
                                <i class="iconfont icondianzan"></i>
                                <span>{{praise}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
    data() {
        return {
            topList:["视频","综合","热门"],
            selectTop: 2,
            value:"",
            startTouchX: 0.0,
            endTouchX: 0.0,
            forwarding: 4,
            chatNums: 18,
            praise: 87
        }
    },
    methods: {
        tapTopClicl(val) {
            this.selectTop = val;
        },
        gtouchstart(e) {
            this.startTouchX = e.touches[0].clientX
        },
        gtouchmove(e) {
            this.endTouchX = e.touches[0].clientX
        },
        gtouchend() {
             var cha = this.startTouchX - this.endTouchX
             console.log("移动结束",cha)
             if (cha > 120) {
                 if (this.selectTop >= this.topList.length) {
                    return
                } else {
                    this.selectTop = this.selectTop + 1
                } 
                this.endTouchX = this.startTouchX
             } else if (cha < -120) {
                if (this.selectTop == 1) {
                    return
                } else {
                    this.selectTop = this.selectTop - 1
                }
                this.endTouchX = this.startTouchX
             }
        }
    }
}
</script>

<style lang="scss" scoped>
    .dynamic-container {
        background: #fff;
        .nav {
            position: fixed;
            z-index: 10;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            height: 100px;
            .nav-center {
                display: flex;
                align-items: center;
                width: 60%;
                height: 100%;
                text-align: center;
                .wcc {
                    flex: 1;
                    height: 44px;
                    line-height: 44px;
                    span {
                        padding: 10px;
                        font-size: 14px;
                    }
                }
            }
        }
        .nav-search {
            width: 100%;
        }
    }
    .changeCs {
        span {
            color: rgba(215, 87, 138, 1);
            border-bottom: 2px solid rgba(215, 87, 138, 1);
        }
    }
    .nochange {
        span {
            color: #666;
            border-bottom:none;
        }
    }
    .dynamic-main {
        position: absolute;
        top: 100px;
        left: 0;
        background: #fff;
        .main {
            width: 100%;
            height: 100%;
            background-color: #f3f3f3;
            .main-li {
                margin-bottom: 10px;
                background-color: #fff;
                .li-top {
                    background-color: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    .head-name{
                        display: flex;
                        img {
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            background-color: gold;
                        }
                        .name {
                            margin-left: 6px;
                            p:nth-of-type(1) {
                                font-size: 16px;
                                color: #333;
                                margin-bottom: 6px;
                            }
                            p:nth-of-type(2) {
                                font-size: 12px;
                                color: #999;
                            }
                        }
                        
                        
                    }
                }
                .tags-li {
                    span {
                        margin-left: 10px;
                        color: skyblue;
                        font-size: 14px;
                    }
                }
                .bigImg {
                    margin: 10px;
                    height: 160px;
                    background-color: lavender;
                    border-radius: 6px;
                }
                .main-title {
                    font-size: 16px;
                    padding: 0 10px 10px 10px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .main-bottom {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    .item {
                        text-align: center;
                        flex: 1;
                        i {
                            font-size: 16px;
                            color: #999;
                            margin-right: 5px;
                        }
                        span {
                            font-size: 16px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
</style>