<template>
  <!-- 直阻测试页面-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testvoltage')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeUe" :value="indexUe" :range="arrayUe">
                <view class="uni-input showFont">{{arrayUe[indexUe]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('connectionmode')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeCtype" :value="indexCtype" :range="arrayCtype">
                <view class="uni-input showFont">{{arrayCtype[indexCtype]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testfrequency')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeFQ" :value="indexFQ" :range="arrayFQ">
                <view class="uni-input showFont">{{arrayFQ[indexFQ]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>


        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('standardcapacitance')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeCap" :value="indexCap" :range="arrayCap">
                <view class="uni-input showFont">{{arrayCap[indexCap]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('highvoltagepowersupply')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeIe" :value="indexIe" :range="arrayIe">
                <view class="uni-input showFont">{{arrayIe[indexIe]}}</view>
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
      return {
        arrayUe: ['10.0kV', '20.0kV', '30.0kV'],
        indexUe: 0,
        arrayCtype: ['正接', '反接'],
        indexCtype: 0,
        arrayFQ: ['变频', 'option2'],
        indexFQ: 0,
        arrayCap: ['内Cn', 'option2'],
        indexCap: 0,
        arrayIe: ['内Un', 'option2'],
        indexIe: 0,
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].dielectriclossparametersetting
      });
    },
    methods: {
      showResult() {
        // 关闭确认弹框
        this.$refs.popup.close()
        // this.goTo('/pages/loop/testResult')
      },
      open() {
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        this.$refs.popup.open()
      },
      close() {
        this.$refs.popup.close()
      },
      // 展示测试结果
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

  .rightText {
    color: #007AFF;
    margin-right: 20rpx;
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
