<template>
  <!-- 直阻测试-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomBox">
        <view class="bottomItem">
          <text class="leftText">{{$t('equipmentnumber')}}</text>
          <text class="rightText">000041</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('sampletype')}}</text>
          <text class="rightText">{{$t('oilimmersedtransformer')}}</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('testwinding')}}</text>
          <text class="rightText">{{$t('highvoltagewinding')}}</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('testphase')}}</text>
          <text class="rightText">{{$t('threephaseY/D')}}</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('windingmaterial')}}</text>
          <text class="rightText">{{$t('copper')}}</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('tappingposition')}}</text>
          <text class="rightText">1</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('testtemperature')}}</text>
          <text class="rightText">+20.0℃</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('conversiontemperature')}}</text>
          <text class="rightText">0.75℃</text>
        </view>

        <view class="bottomItem">
          <text class="leftText">{{$t('testcurrent')}}</text>
          <text class="rightText">0.1A</text>
        </view>

        <view class="bottomItem lastOne">
          <text class="leftText">{{$t('testscope')}}</text>
          <text class="rightText">5~200</text>
        </view>
      </view>

      <!-- 底部按钮 -->
      <view class="btnFix">
        <view class="btmBtnBox">
          <view class="bottomBtn left">{{$t('wiringdiagram')}}</view>
          <view class="bottomBtn right" @click="open()">{{$t('starttesting')}}</view>
        </view>
      </view>
      <!-- 确认弹框 -->
      <tips-modal ref="popup" @determine="showResult"></tips-modal>

    </view>
    <view>
    </view>
  </view>
</template>

<script>
  import EquipInfo from '../public/EquipInfo.vue'
  import TipsModal from '../public/TipsModal.vue'
  export default {
    components: {
      EquipInfo,
      TipsModal
    },
    data() {
      return {}
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].testparametersetting
      });
    },
    methods: {
      // 打开确认弹框
      open() {
        this.$refs.popup.open()
      },
      // 展示测试结果
      showResult() {
        // 关闭确认弹框
        this.$refs.popup.close()
        uni.navigateTo({
          url: '/pages/test/testResult'
        })
      }
    }
  }
</script>

<style scoped>
  .lastOne {
    margin-bottom: 120rpx;
  }

  .btnFix {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .btmBtnBox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .left {
    background: url(../../static/images/btn-center-blue.png) no-repeat;
  }

  .right {
    background: url(../../static/images/btn-center-green.png) no-repeat;
  }

  .bottomBtn {
    height: 100rpx;
    width: 300rpx;
    background-size: 100% auto;
    text-align: center;
    line-height: 80rpx;
    color: #FFF;
    margin: 0 20rpx;
  }

  .rightText {
    color: #007AFF;
  }

  .bottomBox {
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
  }

  .bottomItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90rpx;
    padding-right: 35rpx;
    margin-left: 20rpx;
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
  }
</style>
