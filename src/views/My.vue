<template>
    <div class="my-container">
        <div class="nav">
            <div class="nav-top">
                <div class="icon"><i class="iconfont iconsaoyisao" style="font-size: 20px;"></i></div>
                <div class="icon"><i class="iconfont iconzhuti_tiaosepan_o" style="font-size: 30px;"></i></div>
                <div class="icon"><i class="iconfont iconxianxingtubiao_huabanfuben" style="font-size: 30px;"></i></div>
            </div>
            <div class="top-content">
                <div class="top-contee">
                    <img :src="mineobj.face" />
                    <div class="content-center">
                        <p>{{mineobj.name}}</p>
                        <p>{{mineobj.vip_type}}</p>
                        <p>B币：{{mineobj.bcoin}}  硬币：{{mineobj.coin}}</p>
                    </div>
                    <div class="content-right"><i class="iconfont iconjiantou"></i></div>
                </div>
            </div>
            <div class="top-ti">
                <span>我的大会员</span>
                <span>了解更多权益</span>
                <div class="top-ti-right"><i class="iconfont iconjiantou"></i></div>
            </div>
            <div class="top-ed">
                <div class="item">
                    <p>{{mineobj.dynamic}}</p>
                    <p>动态</p>
                </div>
                <div class="item">
                    <p>{{mineobj.following}}</p>
                    <p>关注</p>
                </div>
                <div class="item">
                    <p>{{mineobj.follower}}</p>
                    <p>粉丝</p>
                </div>
            </div>
        </div>
        <div class="main">
            <!-- <div class="main-one">
                <span>创作中心</span>
                <div class="one-right">
                    <i class="iconfont icontoupiao"></i>
                    <span>投稿</span>
                </div>
            </div> -->
            <ul v-for="(item,index) in mineobj.sections" :key="index">
                <div class="main-one">
                    <span>{{item.title}}</span>
                </div>
                <li v-for="(childItem,indexr) in item.items" :key="indexr" class="main-one-li">
                    <img :src="childItem.icon" />
                    <p>{{childItem.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import mineData from '@/assets/json/mine.json'
export default {
    data(){
        return {
            mineobj: {}
        }
    },
    created() {
        this.mineobj = mineData.data
    }
}
</script>

<style lang="scss" scoped>

    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #f4f4f4;
        z-index: 10;
        background: #f4f4f4;
    }
    .nav-top {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #fff;
        padding: 0.5rem;
        .icon {
            i{
                padding: 0.5rem;
                color: #333;
            }
        }
    }
    .top-content {
        padding: .5rem;
        border-bottom: 1px solid #f4f4f4;
        background-color: #fff;
    }
    .top-contee {
        display: flex;
        align-items: center;
        height: 3.2rem;
        background-color: #fff;
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
        .content-right {
            margin-left: auto;
            color: #999;
        }
        .content-center {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: .5rem;
            height: 100%;
            p:nth-child(1) {
                font-size: .9rem;
                font-weight: 300;
            }
            p:nth-child(2) {
                font-size: .4rem;
                color: palevioletred;
            }
            p:nth-child(3) {
                font-size: .4rem;
                color: #999;
            }
        }
    }
    .top-ti {
        display: flex;
        background-color: #fff;
        padding: .5rem;
        align-items: center;
        span:nth-child(1) {
            color: palevioletred;
            font-weight: bold;
            font-size: .7rem;
            margin-right: .5rem;
        }
        span:nth-child(2) {
            color: #999;
            font-weight: 200;
            font-size: .5rem;
        }
        .top-ti-right {
            color: #999;
            font-weight: 200;
            margin-left: auto;
            font-size: 1rem;
        }
    }
    .top-ed {
        background: #fff;
        display: flex;
        align-items: center;
        margin-top: .5rem;
        .item {
            flex: 1;
            text-align: center;
            padding: .4rem 0;
            p:nth-of-type(1) {
                font-size: .6rem;
                color: #666;
                padding-bottom: .1rem;
            }
            p:nth-of-type(2) {
                font-size: .5rem;
                color: #999;
            }
        }
    }
    .main {
        position: relative;
        top: 8.8rem;
        left: 0;
        padding-bottom: 2.8rem;
        ul {
            background-color: #fff;
            margin-top: .5rem;
            padding-bottom: .5rem;
        }
        .main-one {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .65rem .5rem;
            border-bottom: 1px solid #f4f4f4;
            width: 100%;
            span {
                font-size: .8rem;
            }
            // .one-right {
            //     width: 3.2rem;
            //     border: 1px solid palevioletred;
            //     line-height: 1.2rem;
            //     border-radius: 3px;
            //     text-align: center;
            //     span {
            //         font-size: .6rem;
            //         color: palevioletred;
            //         margin-left: .2rem;
            //         padding-bottom: .2rem;
            //     }
            //     i {
            //         font-size: .7rem;
            //         color: palevioletred;
            //     }
            // }
            
        }
        .main-one-li {
                width: 25%;
                height: 2rem;
                display: inline-block;
                text-align: center;
                padding: .5rem 0;
                img {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                p {
                    font-size: .5rem;
                    color: #333;
                }
            }
    }
</style>