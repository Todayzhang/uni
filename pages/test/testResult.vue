<template>
  <!-- 直阻测试页面-测试结果 -->
  <view>
    <view class="uni-flex uni-column">
      
      <view class="resItem">
        <view class="myImage res1">
          <text class="resTextLeft">AB</text>
        </view>
        
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">0.102</text>
            <text class="numDesc">{{$t('electriccurrent')}}（A）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">32.47</text>
            <text class="numDesc">{{$t('measuredvalue')}}（Ω）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">39.47</text>
            <text class="numDesc">{{$t('electriccurrent')}}（Ω）</text>
          </view>
        </view>
      </view>
      
      <view class="resItem">
        <view class="myImage res2">
          <text class="resTextLeft">BC</text>
        </view>
        
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">0.102</text>
            <text class="numDesc">{{$t('electriccurrent')}}（A）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">32.76</text>
            <text class="numDesc">{{$t('measuredvalue')}}（Ω）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">39.83</text>
            <text class="numDesc">{{$t('electriccurrent')}}（Ω）</text>
          </view>
        </view>
      </view>
      
      <view class="resItem">
        <view class="myImage res3">
          <text class="resTextLeft">CA</text>
        </view>
        
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">0.102</text>
            <text class="numDesc">{{$t('electriccurrent')}}（A）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">32.70</text>
            <text class="numDesc">{{$t('measuredvalue')}}（Ω）</text>
          </view>
          
          <view class="rightTextItem">
            <text class="numText">39.75</text>
            <text class="numDesc">{{$t('electriccurrent')}}（Ω）</text>
          </view>
        </view>
      </view>
      
      <view class="btmBox">
        <view class="btmResItem">
          <text class="btmLeftText">{{$t('unbalancerate')}}</text>
          <text class="btmRightText">0.890%</text>
        </view>
        <view class="btmResItem">
          <text class="btmLeftText">{{$t('testtime')}}</text>
          <text class="btmRightText">00:03:02</text>
        </view>
      </view>
      
      <!-- 底部按钮 -->
      <view class="fixBox">
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
           title: this.$i18n.messages[this.$i18n.locale].testtestres
       });
     },
    methods: {}
  }
</script>

<style scoped>
  .fixBox{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .btmBox{
    margin: 15rpx 0 120rpx 0;
    background-color: #FFFFFF;
    padding-left: 25rpx;
  }
  .btmLeftText{
    color: #333333;
  }
  .btmRightText{
    color: #ccc;
  }
  .btmResItem{
    padding-right: 25rpx;
    height: 95rpx;
    border-bottom: 1px solid #F3F3F3;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
  }
  .btmResItem{
    display: flex;
    justify-content: space-between;
  }
  .numDesc{
    color: #CCCCCC;
  }
  .numText{
    color: #529bda;
    font-size: 50rpx;
  }
  .rightTextItem{
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
    align-items:baseline 
    
  }
  .resRightBox{
    flex: 1;
    padding-right: 25rpx;
  }
  .resTextLeft {
    color: #FFFFFF;
    font-size: 80rpx;
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

  .resItem {
    height: 300rpx;
    background-color: #FFFFFF;
    /* padding: 10rpx; */
    display: flex;
    align-items: center;
    margin-top: 15rpx;
  }

  .myImage {
    width: 187rpx;
    height: 187rpx;
    margin: 55rpx;
    text-align: center;
    display: flex;
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
