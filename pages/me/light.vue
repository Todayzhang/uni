<template>
  <view class="container">
    <view class="uni-flex uni-row">
    	<view class="" style="width: 30px;">
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-light.png" />
      </view>
    	<view class="text" style="-webkit-flex: 1;flex: 1;text-align: center;">{{sliderValue}}%</view>
    	<view class="" style="width: 20px;">
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-light2.png" />
      </view>
    </view>
    <slider :value="sliderValue" @change="sliderChange" min="0" max="100" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        sliderValue: 10
      }
    },
    computed: {},
    onLoad() {},
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].brightnessadjustment
       });
     },
    methods: {
      sliderChange(e) {
        this.sliderValue = e.detail.value
      }
    }
  }
</script>

<style lang="less">
  .container {
    background-color: #fff;
    height: 100px;
    padding: 50px 10px 10px 10px;
  }

  .myImage {
    width: 20px;
    height: 20px;
  }
  /* 更改滑动条样式 */
  /deep/uni-slider .uni-slider-handle-wrapper{
    height: 6px;
  }
</style>
