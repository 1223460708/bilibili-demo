<template>
    <div class="hot-container">
        <div class="top-type">
            <div class="pro" v-for="(item,index) in topList" :key="index">
                <img v-lazy="item.icon" />
                <p>{{item.title}}</p>
            </div>
        </div>
        <div class="top-theme" v-show="isLiveing">
            <span>直播中</span>
        </div>
        <div class="main">
            <ul>
                <li v-for="(item,index) in contents" :key="index" class="main-li">
                    <div class="block-img">
                        <img :src="item.cover" />
                        <span>{{item.cover_right_text_1}}</span>
                    </div>
                    <div class="block-right">
                        <p>{{item.title}}</p>
                        <p :class="[item.rcmd_reason_style?'change':'']">{{item.rcmd_reason_style?item.rcmd_reason_style.text:""}}</p>
                        <p>{{item.right_desc_1}}</p>
                        <p>{{item.right_desc_2}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import hotdata from '@/assets/json/hot.json'
export default {
    components: {
    },
    data() {
        return {
            contents: [1,2,3,4,5,6],
            isLiveing: false,
            topList: []
        }
    },
    mounted() {
        this.topList = hotdata.config.top_items
        this.contents = hotdata.data.filter(item=>{
            console.log(item.cover)
            return item.card_type == "small_cover_v5"
        })
    },
    computed: {

    },
}
</script>

<style lang="scss" scoped>
    .hot-container {
        background-color: #fff;
    }
    .top-type {
        display: flex;
        flex-direction: row;
        padding: 20px 0;
        .pro {
            background-color: #fff;
            text-align: center;
            flex: 1;
            img {
                border-radius: 50%;
                width: 50px;
                height: 50px;
                background: rgba(248, 115, 153, 1);
            }
            p {
                margin-top: 6px;
                font-size: 12px;
                color: #333;
            }
        }
    }
    .top-theme {
        position: relative;
        margin: 0 10px;
        height: 120px;
        background-color: antiquewhite;
        border-radius: 10px;
        span {
            position: absolute;
            top: 0;
            right: 0;
            background: rebeccapurple;
            color: #fff;
            padding: 3px 10px 3px 10px;
            margin: 10px;
            font-size: 14px;
            border-radius: 3px;
        }
    }
    .main {
        background: #f1f1f1;
        .main-li {
            margin-top: 1px;
            width: 100%;
            height: 120px;
            display: flex;
            background: #fff;
            padding: 10px;
            // height: 100%;
        .block-img {
            position: relative;
            img {
                border-radius: 14px;
                width: 160px;
                height: 100%;
            }
            span {
                position: absolute;
                bottom: 0;
                right: 0;
                margin: 10px;
                background-color: rgba(0, 0, 0, .2);
                color: #fff;
                font-size: 10px;
                padding: 3px 8px;
                border-radius: 5px;
            }
            
        }
        .block-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 10px;
            p:nth-of-type(1) {
                flex: 2;
                font-size: 14px;
                color: #333;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                height: 40px;
                line-height: 40px;
            }
            .change {
                flex: 1;
                font-size: 10px;
                color: orange;
                border: 1px solid orange;
                padding: 1px 4px;
                border-radius: 4px;
                margin-top: 10px;
            }
            
            p:nth-of-type(3) {
                flex: 1;
                font-size: 12px;
                color: #999;
                margin-top: 3px;
            }
            p:nth-of-type(4) {
                flex: 1;
                font-size: 12px;
                color: #999;
            }
        }
        }
    }
    
</style>