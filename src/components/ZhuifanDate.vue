<template>
    <div class="date-container">
        <ul class="select-date">
            <li class="select-date-li" 
            v-for="(item,index) in dateList" 
            :key="index" 
            @click="selectDateClick(index)"
            :class="[selectDateIndex === index ? 'changecss' : '']">
                <span>{{selectDateIndex === index ? '周'+item : item}}</span>
            </li>
        </ul>
        <ul class="main-ul">
            <li v-for="(item,index) in dataList" :key="index" class="main-li">
                <img v-lazy="item.cover" />
                <p>{{item.title}}</p>
                <p>更新至{{item.pub_index}}</p>
            </li>
        </ul>
        <div class="date-bottom">
            <span>查看完整时间表 ></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            dateList: ["二","三","四","五","六","日","一"],
            selectDateIndex: 0,
            dataList: []
        }
    },
    methods: {
        selectDateClick(index) {
            console.log(index)
            this.selectDateIndex = index
            this.dataList = this.itemList[this.selectDateIndex].episodes
        }
    },
    mounted() {
        this.dataList = this.itemList[0].episodes
    }
    
}
</script>

<style lang="scss" scoped>
    .date-container {
        border-bottom: 1px solid #f4f4f4;
    }
    .select-date {
        background: #fff;
        padding: 6px;
        .select-date-li {
            width: 14.285714%;
            height: 32px;
            line-height: 32px;
            border-radius: 16px;
            display: inline-block;
            text-align: center;
            span {
                font-size: 13px;
            }
        }
    }
    .changecss {
        background-color: palevioletred;
        span {
            color: white;
        }
    }
    .main-ul {
        background: #fff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 3px;
        .main-li {
            width: 25%;
            height: 150px;
            padding: 6px;
            img {
                width: 100%;
                height: 80px;
                background: wheat;
                border-radius: 10px;
            }
            p:nth-of-type(1) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 14px;
                color: #333;
            }
            p:nth-of-type(2) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                font-size: 10px;
                color: #999;
            }
        }
    }
    .date-bottom {
        text-align: center;
        padding: 10px;
        span {
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            color: palevioletred;
        }
    }
</style>