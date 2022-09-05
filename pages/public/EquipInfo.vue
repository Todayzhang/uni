<template>
  <!-- 公共组件-设备头部 -->
  <view class="topBox" @click="$emit('click')">
    <image class="image topImg" mode="widthFix" src="../../static/images/equ-leg1.png" />
    <view class="topRightBox">
      <text>HXZC-R3(20A)/变压器三相直流电阻测试仪</text>
      <view class="bottomText">
        <text class="connected">{{$t('connected')}}</text>
        <view class="topRight">
     <!--     <image class="image smallIcon" mode="widthFix" src="../../static/images/jc-small.png" />
          <text class="topRightText" :class="switchingmode==1?'actived':''" @click="switchingMode(1)">{{$t('monitoringmode')}}</text>
          <image class="image smallIcon" mode="widthFix" src="../../static/images/kz-small.png" />
          <text :class="switchingmode==2?'actived':''" @click="switchingMode(2)">{{$t('controlmodel')}}</text> -->
        </view>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        // 模式 1；监测模式 2；控制模式
        switchingmode: 1
      }
    },
    methods: {
      switchingMode(code) {
        this.switchingmode = code
        // this.$emit('switchingmode',code)
      }
    }
  }
</script>

<style scoped>
  .connected {
    color: #007AFF;
  }

  .actived {
    color: #007AFF;
  }

  .topRight {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .smallIcon {
    height: 30rpx;
    width: 30rpx;
    margin-right: 10rpx;
    color: #ccc;
  }

  .topRightText {
    margin-right: 20rpx;
  }

  .topBox {
    padding: 20rpx;
    margin: 15rpx 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .topImg {
    height: 140rpx;
    width: 140rpx;
    margin-right: 20rpx;
  }

  .topRightBox {
    flex: 1;
  }

  .bottomText {
    display: flex;
    justify-content: space-between;
    color: #ccc;
  }
</style>
