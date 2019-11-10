<template>
    <div class="b-container">
        <div class="top">
            <span>{{mainInfo.title}}</span>
            <span>查看更多 ></span>
        </div>
        <div class="content-main">
            <ul>
                <router-link class="con-li" to="/" tag="li" v-for="(item,index) in content" :key="index">
                    <div class="big-con">
                        <img v-lazy="item.cover" />
                        <span>{{item.uname}}</span>
                        <span>{{item.online}}</span>
                    </div>
                    <p class="big-title">{{item.title}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: [],
            mainInfo: {}
        }
       
    },
    props: {
        // mainTitle: {
        //     type: String,
        //     default: ""
        // }
    },
    mounted() {
        this.content = this.$attrs.mainParam
        this.mainInfo = this.$attrs.mainInfo
        console.log(this.$attrs)
    }
}
</script>

<style lang="scss" scoped>
    .b-container {
        background: #fff;
        border-bottom: 1px solid #f4f4f4;
        .top {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            span:nth-of-type(1) {
                color: #333;
                font-size: 16px;
            }
            span:nth-of-type(2) {
                color: #999;
                font-size: 16px;
            }
        }
    }
    .content-main {
        background: #fff;
        padding-bottom: 20px;
        
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .con-li {
                margin: 5px;
                width: 45%;
                .big-con {
                    position: relative;
                    img{
                        width: 100%;
                        height: 100px;
                        border-radius: 10px;
                    }
                    span:nth-of-type(1) {
                        position: absolute;
                        bottom: 10px;
                        left: 10px;
                        color: #fff;
                        font-size: 10px;
                    }
                    span:nth-of-type(2) {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        color: #fff;
                        font-size: 10px;
                    }
                }
                .big-title {
                    font-size: 14px;
                    color: #333;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
            }
        }
    }
</style>