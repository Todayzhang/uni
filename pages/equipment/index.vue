<template>
  <view>
    <!-- <view class="uni-flex uni-row">
      <view class="topItemLeft topItem">
        <image class="image myImage" mode="widthFix" src="../../static/images/scanCode.png" />
        <text class="centerText">{{$t('scancnt')}}</text>
      </view>
      <view class="topItemRight topItem">
        <image class="image myImage" mode="widthFix" src="../../static/images/blueTooth.png" />
        <text class="centerText">{{$t('bluetoothcnt')}}</text>
      </view>
    </view> -->

    <view class="uni-flex uni-column">
      <view class="bottomItem" @click="connect(item)" v-for="(item, index) of list" :key="index">
        <image
          class="image myImage"
          mode="widthFix"
          src="../../static/images/equ-leg1.png"
        />
        <view class="adap">
          <text class="centerText">{{item.name}}</text>
          <view class="bottomText">
            <text>{{ item.connected? $t("connected") : $t("notconnected") }}</text>
            <text>{{ $t("lastused") }}:2022-02-02</text>
          </view>
        </view>
      </view>
      <!-- <view class="bottomItem">
        <image
          class="image myImage"
          mode="widthFix"
          src="../../static/images/equ-leg2.png"
        />
        <view class="adap">
          <text class="centerText">HXZC-R3(20A)/变压器三相直流电阻测试仪</text>
          <view class="bottomText">
            <text>{{ $t("notconnected") }}</text>
            <text>{{ $t("lastused") }}:2022-02-02</text>
          </view>
        </view>
      </view> -->
    </view>
    <uni-popup ref="popup" type="message">
      <uni-popup-message
        :type="message.type"
        :message="message.text"
        :duration="1500"
      ></uni-popup-message>
    </uni-popup>
    <view>
      <!-- 普通弹窗 -->
      <!-- <uni-popup ref="popup" :is-mask-click="false">
        <view class="popup-content popContent">
          <text class="title">{{$t('connectingequipment')}}</text>
          <view class="imgBox">
            <view class="itemBoxItem">
              <image class="modalImage" src="../../static/images/modal-jc.png" mode=""></image>
              <text>{{$t('monitoringmode')}}</text>
            </view>
            <view class="itemBoxItem">
              <image class="modalImage" src="../../static/images/modal-kz.png" mode=""></image>
              <text>{{$t('controlmodel')}}</text>
            </view>
          </view>
          <view class="modalCloseBox">
            <image class="modalCloseImage" src="../../static/images/modal-close.png" mode="" @click="close()"></image>
          </view>
        </view>
      </uni-popup> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      message: {
        type: "success",
        text: "",
      },
    };
  },
  onShow() {
    uni.setNavigationBarTitle({
      // 修改头部标题
      title: this.$i18n.messages[this.$i18n.locale].equipment,
    });

    this.getBluetoothList();
  },
  methods: {
    open() {
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    async getBluetoothList() {
      const res = await this.$bluetooth.initBluetooth();
      if (!res.status) {
        this.message = {
          text: "蓝牙打开失败",
          type: "error",
        };
        this.$refs.popup.open();
        return;
      }
      this.$bluetooth.getBluetoothList((result) => {
        const list = Array.from(JSON.parse(result.list))
          .filter((item) => item.name)
          .map((item) => ({
            name: item.name,
            status: item.status,
            deviceId: item.address,
            type: item.type,
            connected: false,
          }));
        this.list = list;
        console.log(list)
      });
    },
    async connect(bluetooth) {
      const res = await this.$bluetooth.connectBluetooth(bluetooth)
    }
  },
};
</script>

<style scoped>
.adap {
  flex: 1;
}
.modalCloseBox {
  width: 100%;
  margin-top: 50rpx;
}
.modalCloseImage {
  height: 100rpx;
  width: 100rpx;
  margin: 0 auto;
}

.imgBox {
  margin-top: 50rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.itemBoxItem {
  width: 140rpx;
  padding: 40rpx;
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: center;
}

.myImage {
  height: 140rpx;
  width: 140rpx;
  margin-right: 20rpx;
}

.modalImage {
  height: 90rpx;
  width: 90rpx;
  margin-bottom: 30rpx;
}

.topItem {
  height: 186rpx;
  -webkit-flex: 1;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20rpx;
  background-color: #fff;
  border-radius: 8rpx;
}

.topItemLeft {
  margin: 15rpx 20rpx 15rpx 0;
}

.topItemRight {
  flex: 1;
  margin: 15rpx 0 15rpx 0;
}

.bottomItem {
  background-color: #fff;
  -webkit-flex: 1;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20rpx;
  margin-bottom: 15rpx;
}

.bottomText {
  display: flex;
  justify-content: space-between;
  color: #ccc;
}

.popContent {
  width: 664rpx;
  height: 374rpx;
  border-radius: 8rpx;
  background: url(../../static/images/modal-bg.png) no-repeat 2rpx -18rpx;
  background-size: 100% auto;
  color: #fff;
  font-size: 32rpx;
  text-align: center;
  padding: 20rpx;
  line-height: 74rpx;
}
</style>
