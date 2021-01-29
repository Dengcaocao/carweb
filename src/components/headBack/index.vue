<template>
    <div class="head_back">
        <div class="flex f_align">{{title}}</div>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style scoped>
    .head_back{
        position: relative;
        height: 146px;
        box-sizing: border-box;
    }
    .head_back div{
        margin-left: 30px;
        color: #fff;
        font-size: 16px;
        height: 40px;
        margin-top: 20px;
    }
    .head_back div:before{
        content: "";
        position: absolute;
        left: 0;
        width: 12px;
        height: 12px;
        box-sizing: border-box;
        border-left: 2px solid var(--themeHoverColor);
        border-bottom: 2px solid var(--themeHoverColor);
        transform: rotate(45deg);
        cursor: pointer;
    }
</style>