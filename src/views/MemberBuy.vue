<template>
    <div class="member-container">
        <van-nav-bar title="会员购" class="nav">
            <van-icon name="cart-o" slot="right" color="#666" size="24px"/>
            <van-icon name="user-circle-o" slot="right" color="#666" size="24px"/>
        </van-nav-bar>
        <div>
            <van-search placeholder="手办" v-model="value" shape="round"/>
        </div>
        <div>
            <van-grid square :border="false" icon-size="38px">
                <van-grid-item
                    v-for="(item,index) in typeList"
                    :key="index"
                    :icon="item.imageUrl"
                    :text="item.name" 
                />
            </van-grid>
            
        </div>
        <div class="notice-container">
            <van-notice-bar
            text="双十一订单72小时内发货，14日恢复正常"
            left-icon="volume-o"
            background=""
            />
        </div>
        <div class="vanswipe-container">
            <van-swipe :autoplay="3000" indicator-color="white" class="van-swpier">
                <van-swipe-item v-for="(item,index) in banners" :key="index">
                    <img :src="item.pic" />
                </van-swipe-item>
                
            </van-swipe>
        </div>
        <div class="select-type">
            <ul>
                <li><span>推荐</span></li>
                <li><span>商品</span></li>
                <li><span>美图</span></li>
                <li><span>情报</span></li>
            </ul>
            <div class="ul-content">
                <!-- <div class="v-waterfall-content" id="v-waterfall">
                    <div v-for="(img,index) in waterfallList"
                        :key="index"
                        class="v-waterfall-item"
                        :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">
                        <img :src="img.src" alt="">
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
// import Waterfall from 'vue-waterfall/lib/waterfall'
// import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import memberData from '@/assets/json/memberbuy.json'
import memberList from '@/assets/json/memberbuyList.json'
import Vue from 'vue';
import { NavBar,Icon,Search, Grid, GridItem ,NoticeBar,Swipe, SwipeItem  } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Grid).use(GridItem);
Vue.use(NoticeBar);
Vue.use(Swipe).use(SwipeItem);
export default {
    components: {
        // Waterfall,
        // WaterfallSlot
    },
    data() {
        return {
            value: "",
            items: [],
            typeList: [],
            banners: [],
            waterfallList:[],
            imgArr:[],
            waterfallImgWidth:100,
            waterfallImgCol:2,
            waterfallImgRight:10,
            waterfallImgBottom:10,
            waterfallDeviationHeight:[],
            imgList:[]
        }
    },
    created() {
        this.typeList = memberData.data.vo.tabs
        this.banners = memberData.data.vo.banners
        console.log(memberList.data.vo.list)
        this.items = memberList.data.vo.list
         memberList.data.vo.list.map(item=>{
            this.imgArr.push(item.imageUrls[0])
        })
        for (let i = 0;i < 100;i++){
            this.imgList.push(this.imgArr[Math.round(Math.random() * 8)]);
        }
    },
    mounted(){
        this.calculationWidth();
    },
    methods:{
        //计算每个图片的宽度或者是列数
        calculationWidth(){
            let domWidth = document.getElementById("v-waterfall").offsetWidth;
            console.log("domWidth",domWidth)
            if (this.waterfallImgWidth && this.waterfallImgCol){
                this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                console.log("waterfallImgWidth",this.waterfallImgWidth)
            }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                console.log("waterfallImgCol",waterfallImgCol)
            }
            //初始化偏移高度数组
            this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
            for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                this.waterfallDeviationHeight[i] = 0;
            }
            this.imgPreloading()
        },
        //图片预加载
        imgPreloading(){
            for (let i = 0;i < this.imgList.length;i++){
                let aImg = new Image();
                aImg.src = this.imgList[i];
                aImg.onload = aImg.onerror = (e)=>{
                    let imgData = {};
                    imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                    imgData.src = this.imgList[i];
                    this.waterfallList.push(imgData);
                    this.rankImg(imgData);
                }
            }
        },
        //瀑布流布局
        rankImg(imgData){
            let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
            //for (let i = 0;i < this.waterfallList.length;i++){
            let minIndex = this.filterMin();
            imgData.top = waterfallDeviationHeight[minIndex];
            imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
            waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
            //}
            console.log(imgData);
        },
        /**
         * 找到最短的列并返回下标
         * @returns {number} 下标
         */
        filterMin(){
            const min = Math.min.apply(null, this.waterfallDeviationHeight);
            return this.waterfallDeviationHeight.indexOf(min);
        }
    }
}
</script>

<style lang="scss" scoped>
    .member-container {
        background-color: #fff;
        .nav {
            i:nth-of-type(1) {
                padding-right: 15px;
            }
        }
    }
    .notice-container {
        padding: 0 10px;
        
        .van-notice-bar {
            border-radius: 5px;
        }
    }
    .vanswipe-container {
        width: 100%;
        height: 120px;
        padding: 10px;
        .van-swpier {
            width: 100%;
            height: 100%;
            background-color: aquamarine;
            border-radius: 6px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .select-type {
        padding-left: 10px;
        ul {
            li {
                display: inline-block;
                width: 4rem;
                height: 40px;
                span {
                    font-size: 16px;
                }
            }
        }
    }
    .ul-content {
        background-color: #fff;
    }
    .water_img {
        width: 100%;
        height: 100%;
    }
    .v-waterfall-content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .v-waterfall-item{
        float: left;
        position: absolute;
    }
    .v-waterfall-item img{
        width: auto;
        height: auto;
    }
</style>