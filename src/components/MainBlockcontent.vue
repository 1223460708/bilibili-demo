<template>
    <div class="container">
        <div class="con-img">
            <img :src="mainParams.cover" class="backImg">
            <div class="playnums">
                <i class="iconfont iconbofang"></i>
                <span>{{mainParams.cover_left_text_1}}</span>
            </div>
            <div class="commentsnums">
                <i class="iconfont iconpinglun"></i>
                <span>{{mainParams.cover_left_text_2}}</span>
            </div>
            <span class="longtime">{{mainParams.cover_right_text}}</span>
        </div>
        <div class="tt-cont">
            <div class="con-title">
                <span>{{mainParams.title}}</span>
            </div>
            <div class="con-bottom">
                <span :class="[desType===1?'backgroundcs':'']">{{des}}</span>
                <div @click="tapMoreClick"><i class="iconfont iconmore"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            mainParams: {},
            desType: -1
        }
    },
    computed: {
        typeCs() {
            return this.type === 1 ? "backgroundcs" : ""
        },
        des() {
            let des = ""
            if (this.mainParams.rcmd_reason != undefined || this.mainParams.rcmd_reason != null) {
                this.desType = 1
                des = this.mainParams.rcmd_reason
            } else if (this.mainParams.desc_button != undefined || this.mainParams.desc_button != null) {
                des = this.mainParams.desc_button.text
            } else if (this.mainParams.desc != undefined || this.mainParams.desc != null) {
                des = this.mainParams.desc
            }
            return des
        }
    },
    methods: {
        tapMoreClick() {
            this.$emit('tapMoreClick', this.playNums);
        }
    },
    mounted() {
        this.mainParams = this.$attrs.mainParams
    }
}  
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        .con-img {
            height: 110px;
            position: relative;
            .backImg {
                width: 100%;
                height: 110px;
            }
            .playnums {
                position: absolute;
                left: 5px;
                bottom: 5px;
                height: 20px;
                width: 48px;
                line-height: 20px;
                i {
                    font-size: 10px;
                    color: #fff;
                }
                span {
                    font-size: 10px;
                    color: #fff;
                }
            }
            .commentsnums {
                position: absolute;
                left: 60px;
                bottom: 5px;
                height: 20px;
                width: 48px;
                line-height: 20px;
                i {
                    font-size: 10px;
                    color: #fff;
                }
                span {
                    font-size: 10px;
                    color: #fff;
                }
            }
            .longtime {
                position: absolute;
                right: 5px;
                bottom: 5px;
                height: 20px;
                font-size: 10px;
                color: #fff;
                line-height: 20px;

            }
        }
        .tt-cont {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 70px;
            
            .con-title {
                width: 100%;
                padding: 5px;
                height: 32px;
                span {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 14px;
                }
            }
            .con-bottom {
                display: flex;
                justify-content: space-between;
                padding-left: 5px;
                span {
                    font-size: 10px;
                    color: #444;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    padding: 1px 2px;
                }
                i {
                    font-size: 16px;
                }
                .backgroundcs {
                    border-radius: 3px;
                    background-color: orange;
                    color: #fff;
                }
            }
        }
    }
    
    
</style>