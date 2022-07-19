<template>
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomItem" @click="goTo('/pages/test/directResistanceTest')">
        <image class="image myImage" mode="widthFix" src="../../static/images/test-zz.png" />
        <view style="flex: 1;">
          <text class="centerText">{{$t('directresistancetest')}}</text>
          <view class="descText">
            <text>{{$t('testDesc1')}}</text>
          </view>
        </view>
      </view>

      <view class="bottomItem">
        <image class="image myImage" mode="widthFix" src="../../static/images/test-sw.png" />
        <view style="flex: 1;">
          <text class="centerText">{{$t('temperaturerisetest')}}</text>
          <view class="descText">
            <text>{{$t('testDesc1')}}</text>
          </view>
        </view>
      </view>


      <view class="bottomItem">
        <image class="image myImage" mode="widthFix" src="../../static/images/test-gyxc.png" />
        <view style="flex: 1;">
          <text class="centerText">{{$t('highvoltagedegaussing')}}</text>
          <view class="descText">
            <text>{{$t('testDesc1')}}</text>
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
        title: this.$i18n.messages[this.$i18n.locale].experiment
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
  .descText {
    word-break: break-all;
    font-size: 28rpx;
    color: #ccc;
  }

  .myImage {
    height: 112rpx;
    width: 112rpx;
    margin-right: 40rpx;
  }


  .bottomItem {
    background-color: #fff;
    -webkit-flex: 1;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30rpx;
    margin-bottom: 15rpx;
  }
</style>
