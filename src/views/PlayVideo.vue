<template>
    <transition name="video">
        <div class="playvideo-container">
            <van-nav-bar
            title="播放"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            <video src="../assets/shipin.mp4" x5-playsinline="" playsinline="" webkit-playsinline="" muted width="100%" height="300" autoplay controls class="playvideo-video"></video>
        </div>
    </transition>
</template>


<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
    components: {

    },
    data() {
        return {
            
        }
    },
    created() {
        
    },
    mounted() {
        console.log(this.$route.query)
        this.videoUrl = this.$route.query.videourl
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {

        }
        
    }
    
}
</script>

<style lang="scss" scoped>
    .video-enter-active,.video-leave-active {
        transition: all 0.3s;
    }
    .video-enter,.video-leave-to {
        transform: translateX(100%);
    }
    .playvideo-container {
        position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
        z-index: 10;
    }
    .playvideo-video {
        
    }

</style>
        