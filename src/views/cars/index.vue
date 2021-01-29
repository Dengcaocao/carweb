<template>
    <div class="cars">
        <swiper class="swiper" ref="mySwiper" :options="swiperOption">
            <swiper-slide >
                <cars />
            </swiper-slide>
            <swiper-slide >
                <cars/>
            </swiper-slide>
            <swiper-slide >
                <cars/>
            </swiper-slide>
            <swiper-slide >
                <cars/>
            </swiper-slide>
            <!-- 手动添加点击事件解决切换swiper失效问题v-for="item in 8" :key="item" -->
            <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
            <div class="swiper-button-next" slot="button-next" @click="next"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import cars from "../../components/cars/cars"
import 'swiper/swiper-bundle.css'

export default {
    components: {
      Swiper,
      SwiperSlide,
      cars
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: -100
            }
        }
    },
    methods: {
        prev () {
            this.$refs.mySwiper.$swiper.slidePrev()
        },
        next () {
            this.$refs.mySwiper.$swiper.slideNext()
        }
    }
}
</script>
<style scoped>
    .cars{
        position: fixed;
        left: 0;
        bottom: 48px;
        right: 0;
        z-index: 99;
    }
    .swiper>>>.swiper-wrapper{
        display: flex;
        align-items: flex-end;
    }
    /* 按钮 */
    .swiper-button-prev,
    .swiper-button-next{
        width: 40px;
        height: 80px;
        border-radius: 60px;
        background-color: #fff;
        box-shadow: 0 0 10px #666;
        transition: .2s;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after{
        font-size: 24px;
        font-weight: 600;
        color: #000;
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover{
        background-color: var(--themeColor);
    }
    .swiper-button-prev:hover:after,
    .swiper-button-next:hover:after{
        color: var(--themeHoverColor);
    }
</style>