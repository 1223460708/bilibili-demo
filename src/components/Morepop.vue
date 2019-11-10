<template>
    <div class="container">
            <div class="main-container">
                wss
            </div>
        </div>
</template>

<script>
export default {
    mounted() {
        console.log("创建")
    }
}
</script>

<style lang="scss" scoped>
    .container {
        height: 100%;
        // width: 100%;
        background-color: rgba(0, 0, 0, .2);
        position: fixed;
        // top: 0;
        // left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        .main-container {
            position: fixed;
            bottom: 0;
            left: 0;
            // right: 0;
            height: 400px;
            background-color: #fff;
        }
    }
</style>