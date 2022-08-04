<template>
  <!-- 回路-测试结果 -->
  <view>
    <view class="uni-flex uni-column">

      <view class="resItem">
        <view class="myImage res1">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('data')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText color1">0.102</text>
            <text class="numDesc">{{$t('company')}}：UΩ</text>
          </view>
        </view>
      </view>

      <view class="resItem">
        <view class="myImage res2">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('serialnumber')}}</text>
        </view>
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText color2">2</text>
          </view>
        </view>
      </view>

      <view class="resItem">
        <view class="myImage res3">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('electriccurrent')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText color3">32.47</text>
            <text class="numDesc">{{$t('company')}}：A</text>
          </view>
        </view>
      </view>


      <view class="resItem">
        <view class="myImage res4">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('resTime')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText color4">10</text>
            <text class="numDesc">{{$t('company')}}：S</text>
          </view>
        </view>
      </view>

      <!-- 底部按钮 -->
      <view class="fixedBox">
        <view class="btmBtnBox">
          <view class="bottomBtn left">{{$t('retest')}}</view>
          <view class="bottomBtn center">{{$t('datalocking')}}</view>
          <view class="bottomBtn right">{{$t('resultstorage')}}</view>
        </view>
      </view>


    </view>
    <view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].looptestres
       });
     },
    methods: {}
  }
</script>

<style scoped>
  .color1{
    color: #529bda;
  }
  .color2{
    color: #4dbfab;
  }
  .color3{
    color: #F5C125;
  }
  .color4{
    color: #3e50b4;
  }
  .fixedBox{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .btmLeftText {
    color: #333333;
  }

  .btmRightText {
    color: #ccc;
  }

  .btmResItem {
    padding: 20rpx 60rpx;
    margin-bottom: 1px solid #ccc;
    background-color: #FFFFFF;
  }

  .btmResItem {
    display: flex;
    justify-content: space-between;
  }

  .numDesc {
    color: #CCCCCC;
  }

  .numText {
    font-size: 50rpx;
  }

  .rightTextItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline
  }

  .resRightBox {
    flex: 1;
    padding-right: 30rpx;
  }

  .resTextLeft {
    color: #FFFFFF;
    font-size: 35rpx;
    line-height: 45rpx;
  }

  .res1 {
    background: url(../../static/images/res-blue.png) no-repeat;
    background-size: 100% auto;
  }

  .res2 {
    background: url(../../static/images/res-green.png) no-repeat;
    background-size: 100% auto;
  }

  .res3 {
    background: url(../../static/images/res-yellow.png) no-repeat;
    background-size: 100% auto;
  }

  .res4 {
    background: url(../../static/images/res-4.png) no-repeat;
    background-size: 100% auto;
  }

  .resItem {
    height: 119rpx;
    background-color: #FFFFFF;
    padding: 33rpx 33rpx 33rpx 55rpx;
    display: flex;
    align-items: center;
    margin-top: 15rpx;
  }

  .myImage {
    width: 119rpx;
    height: 119rpx;
    margin-right: 33rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btmBtnBox {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;

  }

  .left {
    background: url(../../static/images/btn-small-blue.png) no-repeat;
  }

  .center {
    background: url(../../static/images/btn-small-yellow.png) no-repeat;
  }

  .right {
    background: url(../../static/images/btn-small-green.png) no-repeat;
  }

  .bottomBtn {
    height: 100rpx;
    width: 300rpx;
    background-size: 100% auto;
    text-align: center;
    line-height: 80rpx;
    color: #FFF;
    margin: 0 15rpx;
  }
</style>
