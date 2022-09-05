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
                <view class="uni-input showFont">{{
                  arrayUe[indexUe].label
                }}</view>
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
                <view class="uni-input showFont">{{
                  arrayFQ[indexFQ].label
                }}</view>
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
                <view class="uni-input showFont">{{
                  arrayCap[indexCap].label
                }}</view>
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
                <view class="uni-input showFont">{{
                  arrayIe[indexIe].label
                }}</view>
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
      <BlueListModal
        @bluetoothClick="bluetoothClick"
        ref="blueListModal"
        :blueList="blueList"
      />
    </view>
  </view>
</template>

<script>
import EquipInfo from "../public/EquipInfo.vue";
import TipsModal from "../public/TipsModal.vue";
import BlueListModal from "../public/BlueListModal";
import { arrayUe, arrayCtype, arrayFQ, arrayCap, arrayIe } from "./config.js";
const bt = uni.requireNativePlugin("Common-BT");
const modal = uni.requireNativePlugin("modal");
export default {
  components: {
    EquipInfo,
    TipsModal,
    BlueListModal,
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
      blueList: [],
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
      // 开始测试
      bt.sendMsg({
        cmd: 'qd888888',
      });
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
      console.log("listPopup");
      this.getBluttoothList();
      this.$refs.blueListModal.open();
    },
    bindPickerChangeUe(item) {
      this.indexUe = item.detail.value;
      const msg = this.arrayUe[this.indexUe].value;
      bt.sendMsg({
        cmd: msg,
      });
    },
    bindPickerChangeCtype(item) {
      this.indexCtype = item.detail.value;
      const msg = this.arrayCtype[this.indexCtype].value;
      bt.sendMsg({
        cmd: msg,
      });
    },
    bindPickerChangeFQ(item) {
      this.indexFQ = item.detail.value;
      const msg = this.arrayFQ[this.indexFQ].value;
      bt.sendMsg({
        cmd: msg,
      });
    },
    bindPickerChangeCap(item) {
      this.indexCap = item.detail.value;
      const msg = this.arrayCap[this.indexCap].value;
      bt.sendMsg({
        cmd: msg,
      });
    },
    bindPickerChangeIe(item) {
      this.indexIe = item.detail.value;
      const msg = this.arrayIe[this.indexIe].value;
      bt.sendMsg({
        cmd: msg,
      });
    },
    getBluttoothList() {
      bt.listBT((result) => {
        this.blueList = Array.from(JSON.parse(result.list)).map((item) => {
          return {
            ...item,
            name: item.name || "未命名蓝牙",
            address: item.address,
          };
        });
      });
    },
    bluetoothClick(item) {
      console.log(item);
      if (item.status === "已配对") {
        // 直接连接
        bt.connectBT(
          {
            btAddress: item.address,
          },
          (result) => {
            const msg = JSON.stringify(result);
            console.info(msg);
            modal.toast({
              message: msg,
              duration: 1.5,
            });
          }
        );
      } else {
        // 先配对再连接
        bt.pairBT(
          {
            btAddress: item.address, //  88:10:8F:C9:33:C5
          },
          (result) => {
            if (result.code === 200) {
              modal.toast({
                message: "配对成功",
                duration: 1.5,
              });
              bt.connectBT(
                {
                  btAddress: item.address,
                },
                (result) => {
                  const msg = JSON.stringify(result);
                  console.info(msg);
                  modal.toast({
                    message: msg,
                    duration: 1.5,
                  });
                }
              );
            } else if (result.code === -200) {
              modal.toast({
                message: "配对失败",
                duration: 1.5,
              });
              uni.hideLoading();
            }
          }
        );
      }
    },
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
