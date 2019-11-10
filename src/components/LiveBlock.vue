<template>
    <div class="block-container">
        <img v-lazy="imgurl" />
        <span>{{title}}</span>
        <span>{{tags}}</span>
    </div>
</template>

<script>
export default {
    props: {
        imgurl: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "白金局重拳出击 宗师局------"
        },
        tags: {
            type: String,
            default: "英雄联盟"
        }
    }
}
</script>

<style lang="scss" scoped>
    .block-container {
        display: flex;
        flex-direction: column;
        img {
            width: 100%;
            height: 100px;
            background-color: indianred;
            border-radius: 10px;
        }
        span:nth-of-type(1) {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-size: 14px;
            margin-top: 6px;
        }
        span:nth-of-type(2) {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
        }
    }
</style>