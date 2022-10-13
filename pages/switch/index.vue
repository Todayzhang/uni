<template>
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
      <view class="row">
        <view class="rowItem rowLeft" @click="goToTest('1')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-zd.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('automatictesting')}}</text>
          </view>
        </view>

        <view class="rowItem" @click="goToTest('2')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-fh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('openingandclosingtest')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft" @click="goToTest('3')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-fz.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('openingtest')}}</text>
          </view>
        </view>

        <view class="rowItem" @click="goToTest('4')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hz.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingandopeningtest')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft" @click="goToTest('5')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingtest')}}</text>
          </view>
        </view>

        <view class="rowItem" @click="goToTest('6')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-hh.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('closingopeningandclosing')}}</text>
          </view>
        </view>
      </view>

      <view class="row">
        <view class="rowItem rowLeft" @click="goToTest('7')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-sd.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('manualopeningandclosing')}}</text>
          </view>
        </view>

        <view class="rowItem" @click="goToTest('8')">
          <image class="image btmImage" mode="widthFix" src="../../static/images/switch-dy.png" />
          <view style="flex: 1;">
            <text class="centerText">{{$t('lowvoltagetest')}}</text>
          </view>
        </view>
      </view>

    </view>
    <view class="btmBtnBox">
      <view class="bottomBtn" @click="open()">{{ $t("parametersetting") }}</view>
      <view class="bottomBtn" @click="open()">{{ $t("energy") }}</view>
    </view>
  </view>
</template>

<script>
  import EquipInfo from '../public/EquipInfo.vue'
  import {bleBoole} from '../mixins/mixins.js'
  export default {
    mixins: [bleBoole],
    components: {
      EquipInfo
    },
    data() {
      return {
        sendHead: '5aa50683000400',
        getHead: '5aa50682000400',
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].switch
      });
    },
    methods: {
      goToTest(num) {
        let currModule = this.sendHead + this.$changeTosixty(num)
        console.log(currModule);
        let sendValue = currModule + this.$checkEndhl(currModule)
        console.log(sendValue);
        let getModule = this.getHead + this.$changeTosixty(num)
        let getValue = getModule + this.$checkEndhl(getModule)
        let item = {}
        //确定当前测试的项目  自动测试/分合测试/分闸测试/合分合
        const isTest = true;
        if (!isTest) {
          this.sendMsgToDevice(sendValue, getValue, () => {
            console.log('请求成功，跳转页面')
            this.goTo('/pages/switch/parameterSetting?item=' + encodeURIComponent(JSON.stringify(item)))
          })
        } else {
          console.log('直接跳转页面！')
          this.goTo('/pages/switch/parameterSetting?item=' + encodeURIComponent(JSON.stringify(item)))
        }

      },
      goTo(url) {
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .centerBox {
    background-color: #FFFFFF;
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
  }

  .rowLeft {
    margin-right: 20rpx;
  }

  .btmBtnBox {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 0 20rpx;
    display: flex;

    .bottomBtn {
      height: 100rpx;
      border-radius: 50rpx;
      flex: 1;
      background-size: 100% auto;
      text-align: center;
      line-height: 80rpx;
      color: #FFF;
      background-color: #4dbfab;
    }
  }
</style>
