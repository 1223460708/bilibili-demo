<template>
  <div class="home-container">
    <div class="search-top">
      <img src="../assets/logo.png" class="search-head">
      <div class="search">
        <i class="iconfont iconsousuo"></i>
        <input type="text" name="" v-model="value">
      </div>
      <div class="search-top-right-icon">
        <i class="iconfont iconyouxi"></i>
        <i class="iconfont iconyoujian"></i>
      </div>
    </div>
    <van-tabs v-model="topActive" animated swipeable fixed class="vanTabs" sticky>
      <van-tab v-for="(item,index) in topTabs" 
      :key="index" 
      :title="item.title" 
      :to="item.path" 
      class="">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
    <van-popup
      v-model="isShow"
      position="bottom"
      :style="{ height: '450px' }"
      @close="closePop"
      class="vamPop">
        <div class="pop-top">
          <span>添加至稍后在看</span>
        </div>
        <div class="fankui">
          <div class="biaoti">
              <span>反馈</span>
              <span>(选择后将优化首页此类内容)</span>
            </div>
          <ul>
            <li>
              <span>恐怖血腥</span>
            </li>
            <li>
              <span>色情</span>
            </li>
            <li>
              <span>封面恶心</span>
            </li>
            <li>
              <span>标题党/封面党</span>
            </li>
          </ul>
        </div>
        <div class="fankui">
          <div class="biaoti">
              <span>不感兴趣</span>
              <span>(选择后将优化首页此类内容)</span>
            </div>
          <ul>
            <li>
              <span>UPzhuangbility</span>
            </li>
            <li>
              <span>色情</span>
            </li>
            <li>
              <span>封面恶心</span>
            </li>
            <li>
              <span>标题党/封面党</span>
            </li>
          </ul>
        </div>
        <div @click="cancelClick" class="pop-cancel">取消</div>
      </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs,Popup } from 'vant';
import bus from '@/config/event.js'
Vue.use(Tab).use(Tabs);
Vue.use(Popup);

export default {
  name: "home",
  components: {
    
  },
  data() {
    return {
      isShow:false,
      value: '',
      topActive: '',
      topTabs: [{
        title:"直播",
        path: '/home/live'
      },{
        title:"推荐",
        path: '/home/recommended'
      },{
        title:"热门",
        path: '/home/hot'
      },{
        title:"追番",
        path: '/home/zhuifan'
      },{
        title:"影视",
        path: '/home/movies'
      },{
        title:"70周年",
        path: '/home/sevenYear'
      }]
    }
  },
  methods: {
    tabChangeViewClick() {

    },
    closePop() {
      bus.$emit("popmoreClose",false)
    },
    cancelClick(){
      this.isShow = false
      bus.$emit("popmoreClose",false)
    }
  },
  watch: {
    //监听属性 滑动事件
    topActive(val) {
      this.topTabs.forEach((item,index)=>{
        if(index === val) {
          this.$router.push(item.path)
        }
      })
    }
  },
  mounted() {
    bus.$on("popmore",(val)=>{
      this.isShow = val;
    })
  }
};
</script>

<style lang="scss" scoped>

  .home-container {
    padding-bottom: 60px;
    position: relative;
  }
  .search-top {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #fff;
    padding-left: 10px;
    .search-head {
      width: 40px;
      height: 40px;
    }
    .search {
      height: 34px;
      background-color: rgba(245, 245, 245, 1);
      border-top-left-radius: 17px;
      border-top-right-radius: 17px;
      border-bottom-left-radius: 17px;
      border-bottom-right-radius: 17px;
      line-height: 34px;
      margin-left: 10px;
      input {
        background-color: rgba(245, 245, 245, 0);
        border: none;
        margin-left: 10px;
      }
      i {
        margin-left: 10px;
        font-size: 18px;
        color: rgba(205, 205, 205, 1);
      }
    }
    .search-top-right-icon {
      position: absolute;
      right: 0;
      top: 50%;
      width: 100px;
      height: 70px;;
      transform: translateY(-50%);
      line-height: 70px;
      text-align: center;
      i {
        font-size: 28px;
      }
      i:nth-of-type(2) {
        margin-left: 18px;
      }
    }
  }
  .vamPop {
    padding: 0 20px;
    .pop-top {
      height: 60px;
      border-bottom: 1px solid #f4f4f4;
      line-height: 60px;
    }
  }
  .fankui {
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 15px;
    .biaoti {
        padding: 15px 0;
        span:nth-of-type(1) {
          font-size: 16px;
          color: #333;
        }
        span:nth-of-type(2) {
          font-size: 12px;
          color: #999;
        }
      }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      li {
        border-radius: 5px;
        text-align: center;
        border: 1px solid #f4f4f4;
        width: 49%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 5px;
        span {
          color: #333;
        }
      }
    }
    
  }
  .pop-cancel {
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
  
</style>
