<template>
  <!-- 直阻测试-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('sampletype')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeModel" :value="indexModel" :range="arrayModel">
                <view class="uni-input showFont">{{arrayModel[indexModel]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testcurrent')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeIe" :value="indexIe" :range="arrayIe">
                <view class="uni-input showFont">{{arrayIe[indexIe]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testphase')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeMu" :value="indexMu" :range="arrayMu">
                <view class="uni-input showFont">{{arrayMu[indexMu]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('windingtemperature')}}(-50~200℃)
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeRZ" :value="indexRZ" :range="arrayRZ">
                <view class="uni-input showFont">{{arrayRZ[indexRZ]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('conversiontemperature')}}(0~200℃)
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeZS" :value="indexZS" :range="arrayZS">
                <view class="uni-input showFont">{{arrayZS[indexZS]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>


        <view class="uni-list bottomItem lastOne">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('tappingposition')}}(0~99)
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeFJ" :value="indexFJ" :range="arrayFJ">
                <view class="uni-input showFont">{{arrayFJ[indexFJ]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

      </view>

      <!-- 底部按钮 -->
      <view class="btmBtnBox">
        <view class="bottomBtn" @click="open()">{{$t('starttesting')}}</view>
      </view>
      <!-- 确认弹框 -->
      <tips-modal ref="popup" @determine="sure"></tips-modal>

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
      return {
        arrayModel: [this.$t('directresistancecurrent'), 'value2', 'value3', 'value4', 'value5'],
        indexModel: 0,
        arrayIe: ['3A', '4A', '5A', '6A'],
        indexIe: 0,
        arrayMu: ['AB', 'BC', 'CA'],
        indexMu: 0,
        arrayRZ: ['0.0', '1.1', '2.2'],
        indexRZ: 0,
        arrayZS: ['75℃/' + this.$t('copper'), '85℃/' + this.$t('copper'), '95℃/' + this.$t('copper')],
        indexZS: 0,
        arrayFJ: [1, 2, 3],
        indexFJ: 0,
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].testparametersetting
      });
    },
    methods: {
      // 确定，跳转到结果页面
      sure() {
        this.$refs.popup.close()
        this.goTo('/pages/directresistance/testResult')
      },
      open() {
        this.$refs.popup.open()
      },
      // 页面跳转
      goTo(url) {
        uni.navigateTo({
          url: url
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .btmBtnBox {
    z-index: 99;
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
  }

  .bottomBtn {
    height: 100rpx;
    width: 600rpx;
    background-size: 100% auto;
    text-align: center;
    line-height: 80rpx;
    color: #FFF;
    margin: 0 20rpx;
    background: url(../../static/images/btn-big-green.png) no-repeat;
    background-size: 100% auto;
    margin: 0 auto;
  }

  .bottomBox {
    display: flex;
    flex-direction: column;
    padding-left: 25rpx;
    background-color: #FFFFFF;
    margin-bottom: 120rpx;
  }

  .bottomItem {
    height: 95rpx;
    display: flex;
    justify-content: space-between;
  }

  .uni-list-cell-left {
    padding: 0;
  }

  .uni-list::before {
    background-color: #FFFFFF;
  }

  .lineHang {
    .showFont {
      text-align: right;
      padding-right: 10px;
      color: #007AFF;
    }
  }

  .myIconEnd {
    color: #ccc;
    margin-right: 20px;
  }
</style>
