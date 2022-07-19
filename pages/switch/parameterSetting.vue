<template>
  <!-- 开关-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="centerBox">
        <view class="centerTop">
          <text>{{$t('fracturenumber')}}</text>
          <view>
            <text>{{$t('close')}}</text>
            <span class="icon topIcon" style="background-color: #4dbfab;"></span>
            <text>{{$t('branch')}}</text>
            <span class="icon topIcon" style="background-color: red;"></span>
          </view>
        </view>
        <view class="centerBtm">
          <view class="centerBtmItem close">
            <text>A1</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem open">
            <text>B1</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem close">
            <text>C1</text>
            <span class="icon"></span>
          </view>
          <view class="centerBtmItem close">
            <text>A2</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem open">
            <text>B2</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem close">
            <text>C2</text>
            <span class="icon"></span>
          </view>

        </view>

        <view class="centerBtm">
          <view class="centerBtmItem close">
            <text>A3</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem open">
            <text>B3</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem close">
            <text>C3</text>
            <span class="icon"></span>
          </view>
          <view class="centerBtmItem close">
            <text>A4</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem open">
            <text>B4</text>
            <span class="icon"></span>
          </view>

          <view class="centerBtmItem close">
            <text>C4</text>
            <span class="icon"></span>
          </view>
        </view>
      </view>
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('switchtype')}}
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
              {{$t('outputvoltage')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('travelswitch')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('triggermode')}}
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
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('sensortype')}}
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
              {{$t('numberofsensors')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('travelswitch')}}
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

      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('reclosingopeningtime')}}
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
              {{$t('reclosingtime')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
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

      <view class="bottomBox" style="margin-bottom: 120rpx;">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('speedtype')}}
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
              {{$t('preclosingspeed')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input showFont">{{array[index]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('splitspeed')}}
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
        array: ['5S', '10S', '20S', '30S', '60S', '120S', '360S', '999S'],
        arrayEl: ['5A', '10A', '20A', '30A', '60A', '120A', '360A', '999A'],
        index: 0,
        indexEl: 0
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].switchparametersetting
      });
    },
    methods: {
      open() {
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        this.$refs.popup.open()
      },
      sure() {
        this.$refs.popup.close()
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
  .centerBox {
    background-color: #FFFFFF;
    padding: 20rpx 20rpx 40rpx 20rpx;
    // margin-bottom: 10rpx;
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


  .btmBtnBox {
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
    z-index: 99;
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
    margin-top: 10rpx;
  }

  .bottomItem {
    // height: 95rpx;
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
    height: 60rpx;
  }
</style>
