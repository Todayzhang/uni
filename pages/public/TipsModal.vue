<template>
  <uni-popup ref="popup" :is-mask-click="false">
    <view class="popup-content popContent">
      <text class="title">{{$t('tips')}}</text>
      <view class="popc">
        <text>{{$t('tipsdesc1')}}</text>
        <text class="popBtn" @click="determine()">{{$t('determine')}}</text>
      </view>
      <view class="modalCloseBox">
        <image class="modalCloseImage" src="../../static/images/modal-close.png" mode="" @click="close()"></image>
      </view>
    </view>
  </uni-popup>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      open() {
        this.$refs.popup.open()
      },
      close() {
        this.$refs.popup.close()
      },
      // 确定点击事件
      determine(){
        this.$emit("determine")
      }
    }
  }
</script>

<style scoped>
  .popContent {
    width: 664rpx;
    height: 374rpx;
    border-radius: 8rpx;
    background: url(../../static/images/modal-bg.png) no-repeat 2rpx -18rpx;
    background-size: 100% auto;
    color: #fff;
    font-size: 32rpx;
    text-align: center;
    padding: 20rpx;
    line-height: 74rpx;
  }
  .popc {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80rpx;
    color: #000000;
  }
  .popBtn {
    border: 1px solid #007AFF;
    border-radius: 30rpx;
    display: inline-block;
    height: 60rpx;
    width: 160rpx;
    color: #007AFF;
    margin-top: 50rpx;
  }
  .modalCloseBox {
    width: 100%;
    margin-top: 80rpx;
  }
  
  .modalCloseImage {
    height: 100rpx;
    width: 100rpx;
    margin: 0 auto;
  }
</style>
