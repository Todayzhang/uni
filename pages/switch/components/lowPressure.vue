<template>
  <view class="uni-flex uni-column">
    <view class="bottomBox">
      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">
            <!-- 当前电压 -->
            {{ $t("currentvoltage") }}(V)
          </view>
          <view class="uni-list-cell-db lineHang">
            <input
              class="uni-input inputRight"
              disabled
              v-model.number="currentvoltage"
            />
          </view>
        </view>
      </view>
      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">{{
            $t("adjustingstartvoltage")
          }}</view>
          <view class="uni-list-cell-db lineHang">
            <input
              class="uni-input inputRight"
              disabled
              v-model="adjustingstartvoltage"
            />
          </view>
        </view>
      </view>
    </view>
    <view class="bottomBox">
      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">
            <!-- 初始电压 -->
            {{ $t("initalvolta") }}(V)
          </view>
          <view class="uni-list-cell-db lineHang">
            <input
              class="uni-input inputRight"
              type="number"
              @input="replaceRange('initalvolta', 2, 270)"
              v-model.number="initalvolta"
              @blur="setInitalvolta"
              placeholder="输出电压(V)"
            />
          </view>
        </view>
      </view>
      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">
            <!-- 步进电压 -->
            {{ $t("stepvolta") }}(V)
          </view>
          <view class="uni-list-cell-db lineHang">
            <input
              class="uni-input inputRight"
              type="number"
              @input="replaceRange('stepvolta', 1, 10)"
              v-model.number="stepvolta"
              @blur="setStepvolta"
              placeholder="输出电压(V)"
            />
          </view>
        </view>
      </view>
      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">
            <!-- 脉冲宽度 -->
            {{ $t("duration") }}(ms)
          </view>
          <view class="uni-list-cell-db lineHang">
            <input
              class="uni-input inputRight"
              type="number"
              @input="replaceRange('duration', 100, 2000)"
              v-model.number="duration"
              @blur="setDuration"
              placeholder="输出电压(V)"
            />
          </view>
        </view>
      </view>

      <view class="uni-list bottomItem">
        <view class="uni-list-cell">
          <view class="uni-list-cell-left">模式</view>
          <view class="uni-list-cell-db lineHang">
            <picker
              @change="bindPickerChangeTest"
              :value="indexOperate"
              :range="arrOperate"
              :range-key="'name'"
            >
              <view class="uni-input showFont">{{
                arrOperate[indexOperate].name
              }}</view>
            </picker>
          </view>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "manual",
  data() {
    return {
      currentvoltage: 220,
      adjustingstartvoltage: "合闸",
      initalvolta: 220,
      stepvolta: 10,
      duration: 200,
      arrOperate: [
        {
          name: this.$t("continued"),
          value: "01",
        },
        {
          name: this.$t("once"),
          value: "02",
        },
      ],
      indexOperate: 0,
    };
  },
  methods: {
    initData(val) {
      // 6A A6 07 06 0b 08 00 96 0a 00 c8 02 8e
      let newData = val;
      console.log("getMsgResult", newData);
      // 初始电压
      this.currentvoltage = parseInt(newData.slice(14, 16), 16);
      this.initalvolta = parseInt(newData.slice(14, 16), 16);
      // 步进电压
      this.stepvolta = parseInt(newData.slice(16, 18), 16);
      // 脉冲宽度
      this.duration = parseInt(newData.slice(16, 22), 16);
      // 动作模式
      const actionMode = parseInt(newData.slice(22,24),16);
      this.indexOperate = this.arrOperate.findIndex(item => item.val == actionMode)
    },
    replaceRange(data, min, max) {
      var value = this[data];
      if (value > max) {
        this[data] = max;
      } else if (value < min) {
        this[data] = min;
      }
    },
    setStepvolta() {
      const value = this.$changeTosixty(this.duration);
      this.sendData(value, "05061C");
    },
    setDuration() {
      const value = this.$largechangeTosixty(this.initalvolta);
      this.sendData(value, "06061D");
    },
    setInitalvolta() {
      const value = this.$largechangeTosixty(this.initalvolta);
      this.sendData(value, "060617");
    },
    // 模式切换
    bindPickerChangeTest(e) {
      this.indexOperate = e.target.value;
      console.log(this.indexOperate);
      const value = this.arrOperate[this.indexOperate].value;
      this.sendData(value, "05061e");
      // this.dataTest = this.arrTest[this.indexTest]
    },
    sendData(value, code, getCode = undefined) {
      let sendValue = this.setHead + code + value;
      sendValue = sendValue + this.$checkEnd(sendValue);
      console.log("sendValue", sendValue);
      const newCode = getCode ? getCode : code;
      let getModule = this.getHead + newCode + value;
      let getValue = getModule + this.$checkEnd(getModule);
      console.log(" getValue", getValue);
      this.sendMsgToDevice(sendValue, getValue, () => {
        console.log("请求成功");
      });
    },
  },
};
</script>
<style lang="less">
.bottomBox {
  display: flex;
  flex-direction: column;
  padding-left: 25rpx;
  background-color: #ffffff;
  margin-top: 10rpx;

  .bottomItem {
    display: flex;
    justify-content: space-between;

    .inputRight {
      text-align: right;
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
      height: 60rpx;
    }
  }
}
</style>
