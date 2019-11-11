<template>
    <div class="channel-container">
        <div class="channe-top">
            <ul>
                <router-link to="/" tag="li" class="topli" v-for="(item,index) in topList" :key="index">
                    <img v-lazy="item.cover" />
                    <p>{{item.name}}</p>
                </router-link>
            </ul>
        </div>
        <div class="channel-main">
            <div class="main-top">
                <span>全部分区({{count}})</span>
                <div class="fold" @click="foldClick">{{foldtext}}</div>
            </div>
            <div class="partition" v-if="!isFold">
                <ul>
                    <router-link to="/" tag="li" v-for="(item,index) in list" :key="index" class="partition-li">
                        <img v-lazy="item.logo" />
                        <p>{{item.name}}</p>
                    </router-link>
                </ul>
                <div class="bottom-text" @click="foldClick"><span>收起分区</span></div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {getSquare} from '@/request/api'
import channelData from '@/assets/json/channel.json'
export default {
    data() {
        return {
            count: 34,
            isFold: false,
            foldtext: "收起分区",
            list: [],
            topList:[]
        }
    },
    methods: {
        foldClick() {
            this.isFold = !this.isFold
            if (this.isFold) {
                this.foldtext = "展开分区"
            }
        },
        _getData() {
            getSquare().then(res=>{
                console.log(res)
            })
        }
    },
    created() {
        this._getData()
        console.log(channelData.data.region)
        this.list = channelData.data.region
        this.topList = channelData.data.subscribe.items
    }
}
</script>

<style lang="scss" scoped>
    .channel-container {
        padding-bottom: 50px;
    }
    .channe-top {
        background: #fff;
        padding-top: 30px;
        padding-bottom: 10px;
        .topli {
            text-align: center;
            width: 20%;
            display: inline-block;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            p {
                font-size: 12px;
                color: #666;
            }
        }
    }
    .channel-main {
        background: #fff;
        margin-top: 10px;
        .main-top {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            align-items: center;
            span {
                font-size: 18px;
                font-weight: bold;

            }
            .fold {
                font-size: 14px;
                color: #666;
            }
        }
    }
    .partition {
        background: #fff;
        margin-top: 30px;
        .partition-li {
            display: inline-block;
            width: 25%;
            text-align: center;
            margin: 8px 0;
            img {
                width: 42px;
                height: 42px;
                // background: violet;
                border-radius: 50%;
            }
            p {
                font-size: .7rem;
            }
        }
    }
    .bottom-text {
        font-size: 14px;
        text-align: center;
        color: #666;
        padding: 10px;
    }
</style>