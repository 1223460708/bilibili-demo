<template>
    <div class="search-container">
        <div class="search">
            <form action="/">
                <van-search
                    v-model="value"
                    placeholder="这些伪科普究竟有多沙雕"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
                    shape="round"
                />
            </form>
        </div>
        <div class="main-one">
            <div class="one-title">
                <span class="title1">大家都在搜</span>
                <div @click="oneOnAndinClcik"><span class="title2">{{oneShow?"隐藏":"展开"}}</span></div>
            </div>
            <div class="main-one-content" v-if="oneShow">
                <ul>
                    <li v-for="(item,index) in allSearch" :key="index" class="main-one-li">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-one">
            <div class="one-title">
                <span class="title1">搜索历史</span>
                <div><span class="title2" @click="twoOnAndinClcik">{{twoShow?"隐藏":"展开"}}</span></div>
            </div>
            <div class="main-one-content" v-if="twoShow">
                <ul>
                    <li v-for="(item,index) in historySearch" :key="index" class="main-one-li">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="clearHistorySearch">
                    <span v-if="historySearch.length != 0">清空搜索历史</span>
                </div>
            </div>
        </div>
        <div class="main-one">
            <div class="one-title">
                <span class="title1">搜索发现</span>
                <div @click="threeOnAndinClcik"><span class="title2">{{threeShow?"隐藏":"展开"}}</span></div>
            </div>
            <div class="main-one-content" v-if="threeShow">
                <ul>
                    <li v-for="(item,index) in allSearch" :key="index" class="main-one-li">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations,mapState} from 'vuex'
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
    data() {
        return {
            oneShow: true,
            twoShow: true,
            threeShow: true,
            value: "",
            allSearch: [{
                name:"死亡搁浅",
                id: 0
            },{
                name:"FPX夺冠",
                id: 1
            },{
                name:"恋爱循环",
                id: 2
            },{
                name:"RUNNINGMAN",
                id: 3
            },{
                name:"刺客五六七",
                id: 4
            },{
                name:"康辉",
                id: 5
            }]
        }
    },
    methods: {
        ...mapMutations(["addHistorySearch"]),
        onSearch(val) {
            console.log(val)
            this.addHistorySearch({
                name:val,
                id:0
            })
        },
        onCancel() {
            this.$router.go(-1)
        },
        oneOnAndinClcik() {
            this.oneShow = !this.oneShow
        },
        twoOnAndinClcik() {
            this.twoShow = !this.twoShow
        },
        threeOnAndinClcik() {
            this.threeShow = !this.threeShow
            
        }
    },
    computed: {
        ...mapGetters(["getHistorySearch"]),
        ...mapState(["historySearch"])
    },
}
</script>

<style lang="scss" scoped>
    .search-container {
        position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
        z-index: 10;
    }
    .search {
        padding-top: 10px;
        background-color: #fff;
    }
    .main-one {
        background-color: #fff;
        
        .one-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem;
        }
    }
    .title1 {
        font-size: .6rem;
        color: #333;
    }
    .title2 {
        font-size: .5rem;
        color: #666;
    }
    .main-one-content {
        padding: 0 .4rem .7rem .4rem; 
    }
    .main-one-li {
        display: inline-block;
        background-color: #f4f4f4;
        margin: .3rem;
        height: 30px;
        line-height: 25px;
        border-radius: 3px;
        span {
            font-size: .5rem;
            font-weight: 200px;
            color: #333;
            padding: .2rem .4rem;
        }
    }
    .clearHistorySearch {
        text-align: center;
        height: 28px;
        line-height: 28px;
        span {
            font-size: 12px;
            color: #999
        }
    }
</style>