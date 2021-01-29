<template>
    <div id="user">
        <!-- 用户信息 -->
        <div class="user_info flex">
            <img class="avatar" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="">
            <div class="meta">
                <h4 class="name thide">1536698087@qq.com</h4>
                <span class="tag">文明驾驶分 <strong>0</strong></span>
            </div>
        </div>
        <!-- 列表 -->
        <ul class="list">
            <router-link tag="li" to="">
                <i class="iconfont icon-qian"></i>
                <span>我的账户</span>
            </router-link>
            <router-link tag="li" to="">
                <i class="iconfont icon-fangxiangpan"></i>
                <span>租车订单</span>
            </router-link>
            <router-link tag="li" to="">
                <i class="iconfont icon-renzheng"></i>
                <span>实名认证</span>
            </router-link>
            <router-link tag="li" to="/security">
                <i class="iconfont icon-renzheng6"></i>
                <span>安全设置</span>
            </router-link>
            <router-link tag="li" to="">
                <i class="iconfont icon-bangzhuzhongxin"></i>
                <span>帮助中心</span>
            </router-link>
        </ul>
        <!-- 退出按钮 -->
        <button class="logout">退出</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #user{
        position: relative;
        height: 100%;
    }
    /* 用户信息 */
    .user_info{
        box-sizing: border-box;
        padding: 80px 0 80px 10px;
    }
    .user_info .avatar{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 6px solid #2f343e;
    }
    .user_info .meta{
        flex: 1;
        width: 0;
        padding-left: 16px;
    }
    .meta .name{
        color: #909090;
        line-height: 44px;
        font-size: 18px;
        font-weight: 400;
    }
    .meta .tag{
        display: inline-block;
        padding: 6px 10px;
        color: #ffffff;
        border-radius: 22px;
        font-size: 14px;
        background-color: var(--themeHoverColor);
    }
    /* 列表 */
    .list li{
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 15px;
        cursor: pointer;
        color: rgba(255,255,255,0.4);
        border-bottom: 1px solid rgba(255,255,255,0.03);
    }
    .list li:after{
        content: "";
        position: absolute;
        right: 2px;
        width: 10px;
        height: 10px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.1);
        border-bottom: 1px solid  rgba(255,255,255,0.1);
        transform: rotate(-45deg);
    }
    .list li .iconfont{
        font-size: 24px;
        color: var(--themeHoverColor);
    }
    .list li span{
        margin-left: 16px;
    }
    .logout{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 30px;
        border-radius: 18px;
        font-size: 16px;
        cursor: pointer;
        color: #fff;
        border: none;
        background-color: #2d3339;
    }
</style>