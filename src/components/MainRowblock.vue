<template>
    <div class="block-container">
        <div class="block-img">
            <img v-lazy="imgurl" />
            <span>{{videotime}}</span>
        </div>
        <div class="block-right">
            <p>{{title}}</p>
            <p>{{des}}</p>
            <p>{{blockname}}</p>
            <p>{{playAndTime}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            des: "",
            blockname: "",
            playAndTime: "",
            videotime: "",
            imgurl: ""
        }
    },
    mounted() {
        console.log(this.$attrs.mainPrams)
        this.title = this.$attrs.mainPrams.title
        // this.des = this.$attrs.mainPrams.rcmd_reason_style.text ? this.$attrs.mainPrams.rcmd_reason_style.text : ""
        this.playAndTime = this.$attrs.mainPrams.right_desc_2
        this.blockname = this.$attrs.mainPrams.right_desc_1
        this.videotime = this.$attrs.mainPrams.cover_right_text_1
        this.imgurl = this.$attrs.mainPrams.cover
    }
}
</script>

<style lang="scss" scoped>
    .block-container {
        display: flex;
        background: #fff;
        padding: 10px;
        height: 100%;
        .block-img {
            position: relative;
            img {
                border-radius: 14px;
                width: 160px;
                height: 100%;
                background: teal;
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
            margin-left: 10px;
            p:nth-of-type(1) {
                flex: 2;
                font-size: 16px;
                color: #333;
            }
            p:nth-of-type(2) {
                flex: 1;
                font-size: 10px;
                color: orange;
                border: 1px solid orange;
                padding: 1px 4px;
                border-radius: 4px;
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
</style>