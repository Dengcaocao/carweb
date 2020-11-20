<template>
    <div class="navbar">
        <ul>
            <li><i class="iconfont icon-qm"></i></li>
            <li><i class="iconfont icon-search"></i></li>
            <li>
                <a href="javascript: void(0)">选择车辆</a>
            </li>
            <li><i class="iconfont icon-dingwei"></i></li>
            <li><i class="iconfont icon-user-s"></i></li>
        </ul>
    </div>
</template>
<style scoped>
    .navbar{
        position: fixed;
        left: 0;
        right: 410px;
        bottom: 86px;
        z-index: 99;
        text-align: center;
    }
    .navbar li{
        display: inline-block;
        vertical-align: middle;
    }
    .navbar a{
        display: block;
        width: 180px;
        height: 64px;
        line-height: 64px;
        margin: 0 17px;
        text-align: center;
        border-radius: 84px;
        user-select: none;
        font-size: 22px;
        text-decoration: none;
        color: #fff;
        background-color: #34393f;
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
</style>