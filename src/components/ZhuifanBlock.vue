<template>
    <div class="container">
        <div class="top">
            <span class="left-title">{{title}}</span>
            <div class="look-more" @click="lookMoreClick">
                <span class="right-title">查看更多 ></span>
            </div>
        </div>
        <div class="content-main">
            <ul>
                <router-link to="/" tag="li" v-for="(item,index) in contentList" :key="index" class="content-li">
                    <div class="img-container">
                        <img v-lazy="item.cover" />
                        <i class="iconfont iconicon-test"></i>
                        <span class="member">{{item.badge}}</span>
                        <span class="memberNums">{{item.stat.follow_view}}</span>
                    </div>
                    <p>{{item.title}}</p>
                    <p>{{item.desc}}</p>
                </router-link>
            </ul>
        </div>
        <div class="bottom-container">
            <i class="iconfont iconhuanyihuan"></i>
            <span>换一换</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentList: [],
            title: ""
        }
    },
    methods: {
        lookMoreClick() {

        }
    },
    mounted() {
        console.log(this.$attrs.mainParams)
        this.contentList = this.$attrs.mainParams.items
        this.title = this.$attrs.mainParams.title
    }
}
</script>

<style lang="scss" scoped>
    .container {
        background: #fff;
        border-bottom: 1px solid #f4f4f4;
        .top {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-title {
                color: #333;
                font-size: 14px;
            }
            .right-title {
                color: #999;
                font-size: 12px;
            }
        }
    }
    .content-main {
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .content-li {
                width: 45%;
                margin: 5px;
                height: 150px;
                .img-container {
                    position: relative;
                    img {
                        width: 100%;
                        height: 110px;
                        background-color: darkkhaki;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    i {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        font-size: 16px;
                        background-color: rgba(1, 1, 1, .2);
                        color: #fff;
                        border-top-left-radius: 8px;
                        padding: 2px;
                    }
                    .member {
                        position: absolute;
                        right: 3px;
                        top: 3px;
                        background-color: palevioletred;
                        color: #fff;
                        font-size: 10px;
                        padding: 2px 3px;
                        border-radius: 3px;

                    }
                    .memberNums {
                        position: absolute;
                        left: 5px;
                        bottom: 6px;
                        color: #fff;
                        font-size: 12px;
                    }
                }
                p:nth-of-type(1){
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    font-size: 14px;
                    color: #333;
                }
                p:nth-of-type(2){
                    font-size: 10px;
                    color: #999;
                    margin-top: 3px;
                }
                
            }
        }
    }
    .bottom-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        i {
            color: palevioletred;
            font-size: 26px;
        }
        span {
            color: palevioletred;
            font-size: 14px;
            margin-left: 10px;
        }
    }
</style>