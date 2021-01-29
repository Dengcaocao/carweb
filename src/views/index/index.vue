<template>
    <div class="home">
        <!-- 地图 -->
        <Amap ref="mapbox" id="mapbox" />
        <!-- 汽车列表 -->
        <Cars />
        <!-- 会员 -->
        <div class="children-view" id="children-view" :class="{'active': isActive}">
            <router-view></router-view>
        </div>
        <!-- 底部导航 -->
        <NavBar id="navBarC" />
        <!-- 登录弹窗 -->
        <el-dialog
            title="登录"
            :visible.sync="dialogVisible_login"
            width="600">
            <el-form class="form-ui">
                <el-form-item>
                    <el-input placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import Amap from "@/components/amap/amap.vue";
import Cars from "@/views/cars/index.vue";
import NavBar from "@/components/navBar/index.vue";
export default {
    data(){
        return {
            dialogVisible_login: true
        }
    },
    created(){
        
    },
    mounted() {
        let mapbox = document.getElementById('mapbox')
        mapbox.addEventListener('click',() => {
             if(this.$route.path == '/') return
            this.$router.push('/')
        })
        // document.addEventListener('click', e => {
        //     let userCon = document.getElementById('children-view')
        //     let navBarC = document.getElementById('navBarC')
        //     if(userCon && !userCon.contains(e.target)) {
        //         if(navBarC && !navBarC.contains(e.target)) {
        //             if(this.$route.path == '/') return
        //             this.$router.push('/')
        //         }
        //     }
        // })
    },
    components: {
        Amap,
        Cars,
        NavBar
    },
    computed: {
        // 用于显示或隐藏会员列表
        isActive(){
            return this.$route.path !== '/'
        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
    .children-view{
        position: fixed;
        top: 0;
        bottom: 0;
        right: -410px;
        z-index: 999;
        width: 380px;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #34393f;
        box-shadow: -5px 0 38px rgba(0,0,0,.4);
        transition: 0.3s;
        /* 做浏览器兼容 */
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }
    .active{
        right: 0;
    }
</style>