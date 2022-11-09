<template>
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="centerBox">
        <view class="centerTop">
          <text>{{ $t("fracturenumber") }}</text>
          <view>
            <text>{{ $t("close") }}</text>
            <span class="icon topIcon" style="background-color: #4dbfab"></span>
            <text>{{ $t("branch") }}</text>
            <span class="icon topIcon" style="background-color: red"></span>
          </view>
        </view>

        <view class="centerBtm">
          <view
            class="centerBtmItem"
            :class="arrDuan[15] == 0 ? 'close' : 'open'"
          >
            <text>A1</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[14] == 0 ? 'close' : 'open'"
          >
            <text>B1</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[13] == 0 ? 'close' : 'open'"
          >
            <text>C1</text>
            <span class="icon"></span>
          </view>
          <view
            class="centerBtmItem"
            :class="arrDuan[12] == 0 ? 'close' : 'open'"
          >
            <text>A2</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[11] == 0 ? 'close' : 'open'"
          >
            <text>B2</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[10] == 0 ? 'close' : 'open'"
          >
            <text>C2</text>
            <span class="icon"></span>
          </view>
        </view>

        <view class="centerBtm">
          <view
            class="centerBtmItem"
            :class="arrDuan[9] == 0 ? 'close' : 'open'"
          >
            <text>A3</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[8] == 0 ? 'close' : 'open'"
          >
            <text>B3</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[7] == 0 ? 'close' : 'open'"
          >
            <text>C3</text>
            <span class="icon"></span>
          </view>
          <view
            class="centerBtmItem"
            :class="arrDuan[6] == 0 ? 'close' : 'open'"
          >
            <text>A4</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[5] == 0 ? 'close' : 'open'"
          >
            <text>B4</text>
            <span class="icon"></span>
          </view>

          <view
            class="centerBtmItem"
            :class="arrDuan[4] == 0 ? 'close' : 'open'"
          >
            <text>C4</text>
            <span class="icon"></span>
          </view>
        </view>
      </view>
      <template v-if="isModelSelect">
        <view class="row">
          <view class="rowItem rowLeft" @click="goToTest('1')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-zd.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("automatictesting") }}</text>
            </view>
          </view>

          <view class="rowItem" @click="goToTest('4')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-fh.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("openingandclosingtest") }}</text>
            </view>
          </view>
        </view>

        <view class="row">
          <view class="rowItem rowLeft" @click="goToTest('2')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-fz.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("openingtest") }}</text>
            </view>
          </view>

          <view class="rowItem" @click="goToTest('5')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-hz.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("closingandopeningtest") }}</text>
            </view>
          </view>
        </view>

        <view class="row">
          <view class="rowItem rowLeft" @click="goToTest('3')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-hh.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("closingtest") }}</text>
            </view>
          </view>

          <view class="rowItem" @click="goToTest('6')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-hh.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{
                $t("openingclosingandopening")
              }}</text>
            </view>
          </view>
        </view>

        <view class="row">
          <view class="rowItem rowLeft" @click="goToTest('7')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-sd.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{
                $t("manualopeningandclosing")
              }}</text>
            </view>
          </view>

          <view class="rowItem" @click="goToTest('8')">
            <image
              class="image btmImage"
              mode="widthFix"
              src="../../static/images/switch-dy.png"
            />
            <view style="flex: 1">
              <text class="centerText">{{ $t("lowvoltagetest") }}</text>
            </view>
          </view>
        </view>
      </template>
      <template v-else>
        <manual ref="manual" v-if="currentModel === '7'" />
        <lowPressure ref="lowPressure" v-else-if="currentModel === '8'" />
        <Energy v-else-if="currentModel === '9'" />
        <parameter-setting ref="paramSet" v-else />
      </template>
    </view>
    <!-- 底部按钮 -->
    <view class="btnFix" v-if="isModelSelect">
      <view class="btmBtnBox">
        <view class="bottomBtn left" @click="goToTest()">{{
          $t("parametersetting")
        }}</view>
        <view class="bottomBtn right" @click="goToTest('9')">{{
          $t("energy")
        }}</view>
      </view>
    </view>
    <template v-else>
      <view class="btnFix" v-if="currentModel === '7' || currentModel === '8'">
        <view class="btmBtnBox">
          <view class="bottomBtn" @click="resetModel()">{{
            $t("modelSelect")
          }}</view>
        </view>
      </view>
      <view class="btnFix" v-else-if="currentModel === '9'">
        <view class="btmBtnBox">
          <view class="bottomBtn left" @click="resetModel()">{{
            $t("modelSelect")
          }}</view>
          <view class="bottomBtn right">{{ $t("start") }}</view>
        </view>
      </view>
      <view class="btnFix" v-else>
        <view class="btmBtnBox">
          <view class="bottomBtn left" @click="resetModel()">{{
            $t("modelSelect")
          }}</view>
          <view class="bottomBtn right" @click="startTest()">{{
            $t("starttesting")
          }}</view>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
import { bleBoole } from "../mixins/mixins.js";
import EquipInfo from "../public/EquipInfo.vue";
import Energy from "./components/energy.vue";
import LowPressure from "./components/lowPressure.vue";
import Manual from "./components/manual.vue";
import ParameterSetting from "./components/parameterSetting.vue";
export default {
  mixins: [bleBoole],
  components: {
    EquipInfo,
    Manual,
    ParameterSetting,
    LowPressure,
    Energy,
  },
  data() {
    return {
      sendHead: "6aa6050604",
      getHead: "6aa60682000400",
      currentModel: "1",
      isModelSelect: true,
      arrDuan: ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",],
    };
  },
  onShow() {
    uni.setNavigationBarTitle({
      // 修改头部标题
      title: this.$i18n.messages[this.$i18n.locale].switch,
    });
    this.getDuankou();
  },
  onHide() {
    this.sendMsgToDevice("6aa60506160223");
    this.closeNotify();
  },
  methods: {
    startTest() {
      this.$refs.paramSet.open();
    },
    /**获取当前断口数据*/
    getDuankou() {
      let sendValue = "6aa6070608ffff0089";
      this.sendMsgToDevice(sendValue, "", () => {
        console.log("请求成功，获取断口状态");
      });
      this.openNotify((res) => {
        if (res.startsWith("6aa6070608")) {
          console.log("断口res=>", res);
          const sixtyDuan = res.split("6aa6070608")[1].slice(0, 4);
          let arr = parseInt(sixtyDuan, 16).toString(2).split("");
          if (arr.length < 16) {
            for (let i = arr.length; i < 16; i++) {
              arr.unshift("0");
            }
          }
          console.log(arr);
          this.arrDuan = arr;
        } else if (res.startsWith("6aa607060b07")) {
          // 手动分合
          console.log(res);
          this.$refs.manual.initData(res);
          this.$modal.toast({
            message: res,
            duration: 2,
          });
        } else if (res.startsWith("6aa607060b08")) {
          // 低压测试
          this.$refs.lowPressure.initData(res);
        } else if (res.startsWith("6aa618060b")) {
          this.$modal.toast({
            message: res,
            duration: 2,
          });
          this.$refs.paramSet.initCurr(res);
        } else if (res.startsWith("6aa618060b")) {
          this.$modal.toast({
            message: "测试完成",
            duration: 2,
          });
        }
      });
    },
    goToTest(num) {
      // this.isModelSelect = false
      if (num) {
        this.currentModel = num;
      }
      // this.getMsgResult = '6aa618060b01020b10511041001e120301f400c800c801f40100'
      // 非电机储能，设置当前测试模式
      if (this.currentModel !== "9") {
        let currModule = this.sendHead + this.$changeTosixty(this.currentModel);
        // console.log(currModule);
        let sendValue = currModule + this.$checkEnd(currModule);
        console.log(sendValue);
        //发送消息
        this.sendMsgToDevice(sendValue, "", () => {
          console.log("请求成功，跳转页面");
          this.isModelSelect = false;
        });
      } else {
        // 电机储能
        this.isModelSelect = false;
      }
    },
    resetModel() {
      this.isModelSelect = true;
    },
  },
};
</script>

<style lang="less" scoped>
.centerBox {
  background-color: #ffffff;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.centerBtm {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centerBtmItem {
  display: inline-block;
  height: 80rpx;
  width: 120rpx;
  border-radius: 15rpx;
  margin: 5rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close {
  border: 1px solid #4dbfab;
}

.open {
  border: 1px solid red;
}

.icon {
  display: inline-block;
  height: 20rpx;
  width: 20rpx;
  border-radius: 50%;
  margin-left: 20rpx;
}

.topIcon {
  margin-left: 5rpx;
  margin-right: 20rpx;
}

.close .icon {
  background-color: #4dbfab;
}

.open .icon {
  background-color: red;
}

.centerTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10rpx;
}

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
  z-index: 20;
}

.rowLeft {
  margin-right: 20rpx;
}

.btnFix {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 11;

  .btmBtnBox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .bottomBtn {
      height: 100rpx;
      width: 600rpx;
      background-size: 100% auto;
      text-align: center;
      line-height: 80rpx;
      color: #fff;
      background: url(../../static/images/btn-big-green.png) no-repeat;
      background-size: 100% auto;

      &.left {
        margin: 0 20rpx;
        width: 300rpx;
        background: url(../../static/images/btn-center-blue.png) no-repeat;
        background-size: 100% auto;
      }

      &.right {
        margin: 0 20rpx;
        width: 300rpx;
        background: url(../../static/images/btn-center-green.png) no-repeat;
        background-size: 100% auto;
      }
    }
  }
}
</style>
