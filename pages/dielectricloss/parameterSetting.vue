<template>
  <!-- 直阻测试页面-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info @click="openPopup()"></equip-info>
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{ $t("testvoltage") }}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker
                range-key="label"
                @change="bindPickerChangeUe"
                :value="indexUe"
                :range="arrayUe"
              >
                <view class="uni-input showFont">{{ arrayUe[indexUe].label }}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{ $t("connectionmode") }}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker
                range-key="label"
                @change="bindPickerChangeCtype"
                :value="indexCtype"
                :range="arrayCtype"
              >
                <view class="uni-input showFont">{{
                  arrayCtype[indexCtype].label
                }}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{ $t("testfrequency") }}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker
                range-key="label"
                @change="bindPickerChangeFQ"
                :value="indexFQ"
                :range="arrayFQ"
              >
                <view class="uni-input showFont">{{ arrayFQ[indexFQ].label }}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{ $t("standardcapacitance") }}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker
                range-key="label"
                @change="bindPickerChangeCap"
                :value="indexCap"
                :range="arrayCap"
              >
                <view class="uni-input showFont">{{ arrayCap[indexCap].label }}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{ $t("highvoltagepowersupply") }}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker
                range-key="label"
                @change="bindPickerChangeIe"
                :value="indexIe"
                :range="arrayIe"
              >
                <view class="uni-input showFont">{{ arrayIe[indexIe].label }}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>
      </view>

      <!-- 底部按钮 -->
      <view class="btmBtnBox">
        <view class="bottomBtn" @click="open()">{{ $t("starttesting") }}</view>
      </view>

      <!-- 确认弹框 -->
      <tips-modal ref="popup" @determine="showResult"></tips-modal>
    </view>
    <uni-popup ref="listPopup" type="center">
      <view>asdfasdf</view>
    </uni-popup>
  </view>
</template>

<script>
import EquipInfo from "../public/EquipInfo.vue";
import TipsModal from "../public/TipsModal.vue";
import { arrayUe, arrayCtype, arrayFQ, arrayCap, arrayIe } from './config.js'
export default {
  components: {
    EquipInfo,
    TipsModal,
  },
  data() {
    return {
      arrayUe: arrayUe,
      indexUe: 0,
      arrayCtype: arrayCtype,
      indexCtype: 0,
      arrayFQ: arrayFQ,
      indexFQ: 0,
      arrayCap: arrayCap,
      indexCap: 0,
      arrayIe: arrayIe,
      indexIe: 0,
    };
  },
  onShow() {
    uni.setNavigationBarTitle({
      // 修改头部标题
      title:
        this.$i18n.messages[this.$i18n.locale].dielectriclossparametersetting,
    });
  },
  methods: {
    showResult() {
      // 关闭确认弹框
      this.$refs.popup.close();
      // this.goTo('/pages/loop/testResult')
    },
    open() {
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    // 展示测试结果
    goTo(url) {
      uni.navigateTo({
        url: url,
      });
    },
    openPopup() {
      console.log('listPopup')
      this.$refs.listPopup.open()
    }
  },
};
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
  color: #fff;
  margin: 0 20rpx;
  background: url(../../static/images/btn-big-green.png) no-repeat;
  background-size: 100% auto;
  margin: 0 auto;
}

.rightText {
  color: #007aff;
  margin-right: 20rpx;
}

.bottomBox {
  display: flex;
  flex-direction: column;
  padding-left: 25rpx;
  background-color: #ffffff;
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
  background-color: #ffffff;
}

.lineHang {
  .showFont {
    text-align: right;
    padding-right: 10px;
    color: #007aff;
  }
}

.myIconEnd {
  color: #ccc;
  margin-right: 20px;
}
</style>
