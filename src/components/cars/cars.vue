<template>
  <div class="car-warp" style="display:none;">
    <section class="car-item">
      <header>
        <h4>
          <img src="../../assets/img/logo.jpg" alt="" />
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="car-attr">新能源汽车 5座</p>
      </header>
      <div class="car-content">
        <img src="../../assets/img/car.jpg" alt="" />
        <div class="car-info">
          <div>
            <h4 class="car-number">粤 B745N8</h4>
            <div>
              <ul class="car-energy">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance"><b>约</b><span>600</span>KM</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a href="javascript:void(0)" class="parking">某某停车场</a>
      </footer>
    </section>
    <!-- 详细信息 -->
    <section class="car-item car-detail" style="display:none;">
        <div class="column">
            <span>某某停车场</span>
            <div class="close"></div>
        </div>
        <!-- 标题 -->
        <header>
        <h4>
          <img src="../../assets/img/logo.jpg" alt="" />
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="car-attr">新能源汽车 5座</p>
      </header>
      <img class="detail-img" src="../../assets/img/car.jpg" alt="" />
      <!-- 车牌号和距离 -->
      <div class="cars-detail-info flex f_between f_align">
          <div class="car-num">粤 B745N8</div>
          <p class="distance"><b>约</b><span>600</span>KM</p>
      </div>
      <!-- 进度 -->
      <div class="pregress-warp">
          <div class="pregress">
              <div class="pregress-active"></div>
          </div>
      </div>
      <p class="tips">取车约支付12.0元停车费，实际补贴12.0元</p>
      <!-- 租车方式 -->
      <ul class="car-type">
          <li class="flex f_between f_align active" v-for="(item,index) in 4" :key="item" @click="checkType(index)">
              <p class="type-name">日租车</p>
              <p class="type-price">￥300/天</p>
          </li>
      </ul>
      <!-- 条款 -->
      <div class="protocol-warp flex f_between f_align">
          <p class="protocol">参保《全面保障服务》用车更放心</p>
          <div class="icon flex f_center">
            <div class="iconfont icon-gou"></div>
          </div>
      </div>
      <!-- 按钮 -->
      <button class="order-car">预约用车</button>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    
  },
};
</script>
<style scoped>
.car-warp{
    padding-bottom: 46px;
}
.car-item {
  max-width: 400px;
  min-width: 360px;
  background-color: #fff;
  border-radius: 24px;
  margin: auto;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  /* 兼容浏览器 */
  -webkit-box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
}
/* 公共样式 */
/* 头部标题 */
.car-item > header {
  display: flex;
}
header > h4{
  flex: 2;
}
header > p {
  flex: 1;
}
header > h4 > img {
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
header > h4 .name {
  font-size: 16px;
  font-weight: lighter;
}
header .car-attr {
  text-align: right;
  line-height: 20px;
  opacity: 0.5;
}
/* 里程 */
.distance {
  display: inline-block;
  padding-left: 2px;
}
.distance b {
  opacity: 0.8;
  font-weight: lighter;
}
.distance span {
  margin: 0 3px;
  font-size: 22px;
}
/* 公共样式end */
.car-content {
  position: relative;
  margin: 5px 0 5px;
  text-align: right;
}
.car-content img {
  height: 80px;
}
.car-content .car-info {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: left;
}
.car-info .car-number {
  font-size: 18px;
}
.car-info .car-energy {
  padding-top: 10px;
  display: inline-block;
}
.car-info li {
  display: inline-block;
  width: 7px;
  height: 24px;
  border-radius: 100px;
  margin-right: 3px;
  background-color: #e1e1e1;
}
.car-info li.active {
  background: -webkit-linear-gradient(#17a8fa, #108dd9); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#17a8fa, #108dd9); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#17a8fa, #108dd9); /* Firefox 3.6 - 15 */
  background: linear-gradient(#17a8fa, #108dd9); /* 标准的语法 */
}
footer .parking {
  position: relative;
  display: block;
  border-top: 1px solid #e1e1e1;
  opacity: 0.8;
  padding: 10px 0;
  color: #666;
}
.parking:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  margin-top: -10px;
  border-top: 1px solid #d6d7d9;
  border-right: 1px solid #d6d7d9;
  transform: translateY(50%) rotate(45deg);
}
/* cars详细信息 */
.car-detail{
    position: relative;
    padding-top: 0;
    padding-bottom: 40px;
}
.car-detail .column{
    position: relative;
    padding: 15px 0 15px;
    margin-bottom: 15px;
    color: #34393f;
    border-bottom: 1px solid #e1e1e1;
}
/* 关闭按钮 */
.column .close{
    position: absolute;
    top: 50%;
    right: 0;
    width: 26px;
    height: 26px;
    cursor: pointer;
    transform: translateY(-50%);
}
.column .close:after,
.column .close::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    border-left: 1px solid #999999;
}
.column .close:after{
    transform: translate(-50%,-50%) rotate(45deg);
}
.column .close:before{
    transform: translate(-50%,-50%) rotate(-45deg);
}
/* 详情图片 */
.car-detail .detail-img{
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
}
.cars-detail-info .car-num{
    font-size: 18px;
}
/* 进度 */
.car-detail .pregress-warp{
    padding: 15px;
    border-radius: 31px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    background-color: #fff;
}
.pregress-warp .pregress{
    height: 8px;
    background-color: #e1e1e1;
    border-radius: 4px;
}
.pregress .pregress-active{
    height: 100%;
    width: 50%;
    border-radius: 4px;
    background-color: var(--themeHoverColor);
}
.car-detail .tips{
    color: var(--themeColor);
    text-align: center;
    font-size: 14px;
    margin: 24px 0;
    color: var(--themeColor);
}
/* 租车方式 */
.car-detail .car-type li{
    padding: 10px;
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
}
.car-detail .car-type .active{
    border-color: var(--themeHoverColor);
    background-color: #fff;
}
/* 条款 */
.car-detail .protocol-warp{
    color: var(--themeColor);
    font-size: 14px;
}
.protocol-warp .icon{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    background-color: var(--themeColor);
}
.car-detail .order-car{
    position: absolute;
    left: 50%;
    bottom: -18px;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 18px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    border: none;
    background-color: var(--themeColor);
}
</style>