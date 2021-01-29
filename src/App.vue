<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
// 主题色
  :root {
    --themeColor: #34393f;
    --themeHoverColor: #00a3ff;
    --themeUiColor: #202409;
  }
  // 盒模型
  .flex{
    display: flex;
  }
  .f_center{
   justify-content: center; 
   align-items: center;
  }
  .f_between{
    justify-content: space-between;
  }
  .f_around{
    justify-content: space-around;
  }
  .f_align{
    align-items: center;
  }
  // 文本超出隐藏
  .thide{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // 重置element ui form 样式
  @import url('./style/formui.css');
</style>
