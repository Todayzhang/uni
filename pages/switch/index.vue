<template>
  <view>

    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="row">
        <view class="rowItem rowLeft" @click="goTo('/pages/switch/parameterSetting')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-zd.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('automatictesting')}}</text>
          </view>
        </view>

        <view class="rowItem">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-fh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('openingandclosingtest')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-fz.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('openingtest')}}</text>
          </view>
        </view>

        <view class="rowItem">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hz.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingandopeningtest')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingtest')}}</text>
          </view>
        </view>

        <view class="rowItem">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingopeningandclosing')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-sd.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('manualopeningandclosing')}}</text>
          </view>
        </view>

        <view class="rowItem">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-dy.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('lowvoltagetest')}}</text>
          </view>
        </view>
      </view>

    </view>
    <view>
    </view>
  </view>
</template>

<script>
  import EquipInfo from '../public/EquipInfo.vue'
  export default {
    components: {
      EquipInfo
    },
    data() {
      return {}
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].switch
      });
    },
    methods: {
      goTo(url) {
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btmImage {
    height: 100rpx;
    width: 100rpx;
    margin-right: 20rpx;
  }

  .rowItem {
    background-color: #fff;
    -webkit-flex: 1;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20rpx;
    margin-bottom: 20rpx;
  }

  .rowLeft {
    margin-right: 20rpx;
  }
</style>
