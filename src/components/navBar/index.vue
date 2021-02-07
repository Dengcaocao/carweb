<template>
    <div class="navbar">
        <ul>
            <router-link tag="li" to="/about"><i class="iconfont icon-qm"></i></router-link>
            <router-link tag="li" to="/search"><i class="iconfont icon-search"></i></router-link>
            <router-link tag="li" to="/checkCar"><a href="javascript: void(0)">选择车辆</a></router-link>
            <li @click="selfLocation"><i class="iconfont icon-dingwei"></i><li></li>
            <router-link tag="li" to="/user"><i class="iconfont icon-user-s"></i></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        selfLocation() {
            this.$store.commit('selfLocation')
        }
    }
}
</script>
<style scoped>
    .navbar{
        position: fixed;
        left: 50%;
        bottom: 50px;
        transform: translateX(-50%);
        z-index: 88;
        text-align: center;
        min-width: 526px;
    }
    .navbar li{
        display: inline-block;
        vertical-align: middle;
    }
    .navbar a{
        display: block;
        padding: 15px 20px;
        border-radius: 23px;
        font-size: 16px;
        margin: 0 17px;
        user-select: none;
        font-size: 20px;
        text-decoration: none;
        color: #fff;
        background-color: var(--themeColor);
    }
    .iconfont{
        display: inline-block;
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 2;
        border-radius: 50%;
        color: #fff;
        font-size: 22px;
        margin: 0 17px;
        cursor: pointer;
        background-color: #34393f;
    }
    .navbar .router-link-active .iconfont{
        color: var(--themeHoverColor);
    }
</style>