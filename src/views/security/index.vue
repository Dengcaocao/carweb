<template>
    <div class="security">
        <!-- 头部返回 -->
        <back title="安全设置"></back>
        <!-- 连接列表 -->
        <ul class="list">
            <router-link tag="li" to="/security/password">修改登录密码</router-link>
            <router-link tag="li" to="/security/setpassword">设置资金密码</router-link>
            <router-link tag="li" to="/security/bindtel">绑定手机号</router-link>
            <router-link tag="li" to="/security/bindbank">绑定银行卡</router-link>
        </ul>
    </div>
</template>
<style scoped>
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
    /* .list li:after{
        content: "";
        position: absolute;
        right: 2px;
        width: 10px;
        height: 10px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.1);
        border-bottom: 1px solid  rgba(255,255,255,0.1);
        transform: rotate(-45deg);
    } */
    .list li span{
        margin-left: 16px;
    }
</style>