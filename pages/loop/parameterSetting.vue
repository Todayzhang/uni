<template>
  <!-- 回路-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomBox">

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testpower')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeEl" :value="indexEl" :range="arrayEl">
                <view class="uni-input showFont">{{arrayEl[indexEl]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testtime')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

      </view>

      <!-- 底部按钮 -->
      <view class="btmBtnBox">
        <view class="bottomBtn" @click="startTest">{{$t('starttesting')}}</view>
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
  import {
    bleBoole
  } from '../mixins/mixins.js'
  export default {
    mixins: [bleBoole],
    components: {
      EquipInfo,
      TipsModal
    },
    data() {
      return {
        array: ['10S', '30S', '45S', '60S', '300S', '600S', '999S'],
        index: 0,
        arrayEl: ['50A', '100A'],
        arrayElValue: ["01", "00"],
        indexEl: 0
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].loopparametersetting
      });
      this.openNotify()
    },
    onHide() {
      console.log('回路 hidden');
      clearInterval(this.timer)
      this.closeNotify()
    },
    methods: {
      // 展示测试结果
      showResult() {
        let item = {
          'dlxz': this.arrayEl[this.indexEl],
          'sjxz': this.array[this.index]
        }
        // 关闭确认弹框
        this.$refs.popup.close()
        this.goTo('/pages/loop/testResult')
        let msg = '6aa60502a501ad'
      //  msg = msg + this.checkEnd(msg)
        console.log('msg=>', msg);
        this.sendMsgToDevice(msg, () => {
          this.$refs.popup.close();
          console.log('请求成功，跳转页面')
          this.goTo('/pages/loop/testResult?item=' + encodeURIComponent(JSON.stringify(item)))
        })
      },
      startTest() {
        this.$refs.popup.open()
      },
      //测试时间选择
      bindPickerChange: function(e) {
        this.index = e.target.value
        //  let selectValue  = this.arrayEl[e.target.value]
        let sendValue = '6aa60502b70' + e.target.value
        sendValue = sendValue + this.checkEnd(sendValue)
        this.sendMsgToDevice(sendValue)
      },
      //电流选择
      bindPickerChangeEl: function(e) {
        this.indexEl = e.target.value
        let selectValue = this.arrayElValue[e.target.value]
        let sendValue = '6aa60502a1' + selectValue
        sendValue = sendValue + this.checkEnd(sendValue)
        this.sendMsgToDevice(sendValue)
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

  .bottomBox {
    display: flex;
    flex-direction: column;
    padding-left: 25rpx;
    background-color: #FFFFFF;
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
