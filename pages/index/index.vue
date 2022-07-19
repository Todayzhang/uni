<template>
  <view class="indexBox">
    <view class="topblue" @click="concatBlueTooth">
      <image class="imageTop" src="../../static/images/bt.png"></image>
      <text class="textBt">a蓝牙装置名称是一个非常昌的名</text>
      <image class="imageRight" src="../../static/images/righticon.png"></image>
    </view>
    <view class="topMid">
      <image class="imagetopMid" src="../../static/images/testbcg.png"></image>
      <view class="quickMeua">
        <view class="meua">
          <image class="meuaIcon" src="../../static/images/meua-bggl.png"></image><text>试验申请</text>
        </view>
        <view class="meua">
          <image class="meuaIcon" src="../../static/images/meua-hjqr.png"></image><text>环境确认</text>
        </view>
        <view class="meua">
          <image class="meuaIcon" src="../../static/images/meua-sygl.png"></image><text>试验管理</text>
        </view>
        <view class="meua">
          <image class="meuaIcon" src="../../static/images/meua-sysq.png"></image><text>报告管理</text>
        </view>
      </view>
    </view>
    <view class="bottomMeua">
      <text class="text">快捷导航</text>
      <view class="quickNavigation">
        <view class="navMeua" v-for="(item,index) in quickMeuaList" :key="index" @click="gotoMeua(item.clickPath)">
          <image class="meuaIcon" :src="item.src"></image>
          {{item.name}}
        </view>
      </view>
    </view>
    <view class="bottomMeua" style="height: auto;">
      <text class="text">待办事项</text>
      <view class="">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <image class="meuaIcon" src="../../static/images/meua-sysq.png"></image>
            </view>
            <view class="uni-list-cell-db waitProMsg">
              <view class="waitName"><text>一号变压器电流保护试验</text><text>10:12:59</text></view>
              <text>试验计划，请尽快开始</text>
            </view>
          </view>
        </view>
      </view>
     </view> 
  </view>
</template>

<script>
  export default {
    data() {
      return {
        quickMeuaList: [{
          src: "../../static/images/meua-sbgl.png",
          name: "设备管理",
          clickPath: "/pages/dielectricloss/parameterSetting"
        }, {
          src: "../../static/images/meua-ybgl.png",
          name: "仪器管理",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-sqgl.png",
          name: "申请管理",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-sjgl.png",
          name: "送检管理",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-wdsq.png",
          name: "我的申请",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-wdsy.png",
          name: "我的试验",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-wdsj.png",
          name: "我的送检",
          clickPath: "equipManage"
        }, {
          src: "../../static/images/meua-wdbg.png",
          name: "我的报告",
          clickPath: "equipManage"
        }]
      }
    },
    onShow() {
      uni.setTabBarItem({
        index: 0,
        text: this.$i18n.messages[this.$i18n.locale].resTest
      });
      uni.setTabBarItem({
        index: 1,
        text: this.$i18n.messages[this.$i18n.locale].statistics
      });
      uni.setTabBarItem({
        index: 2,
        text: this.$i18n.messages[this.$i18n.locale].My
      });
    },
    onLoad() {

    },
    methods: {
      concatBlueTooth() {
        console.log('测试点击事件')
      },
      equipManage() {
        console.log(`触发了点击事件`)
      },
      gotoMeua(url){
        console.log('************');
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="less">
  .indexBox {
    background-color: #F7F7F7;
  }

  .topblue {
    margin-top: 6rpx;
    height: 94rpx;
    display: flex;
    padding: 0 80rpx;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;

    .imageTop {
      height: 38rpx;
      width: 33rpx;
    }

    .textBt {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .imageRight {
      height: 20rpx;
      width: 12rpx;
    }
  }

  .topMid {
    margin-top: 26rpx;
    padding: 0 20rpx;
    position: relative;
    height: 412rpx;
    margin-bottom: 20rpx;
    .imagetopMid {
      width: 710rpx;
      height: 307rpx;
    }

    .quickMeua {
      position: absolute;
      top: 237rpx;
      left: 41rpx;
      width: 668rpx;
      height: 175rpx;
      background-color: #fff;
      border-radius: 15rpx;
      display: flex;

      .meua {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .meuaIcon {
          width: 75rpx;
          height: 75rpx;
          margin: 27rpx 0 14rpx 0;
        }
      }
    }
  }

  .bottomMeua {
    height: 347rpx;
    padding-bottom: 20rpx;
    background-color: #FFFFFF;
    margin-bottom: 20rpx;
    .text{
      display: inline-block;
      margin-top: 32rpx;
      padding-left: 45rpx;
    }
    .quickNavigation {
      display: flex;
      flex-wrap: wrap;
      .navMeua {
        width: 25%;
        margin-top:19rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .meuaIcon{
          width: 45rpx;
          height:45rpx;
          margin-top: 18rpx;
        }
      }
    }
    .uni-list-cell{
      height: 75rpx;
      padding: 10rpx 44rpx 10rpx 0;
      .meuaIcon{
        height: 74rpx;
        width: 75rpx;
        vertical-align: middle;
      }
      .waitProMsg{
        color:#A1A1A1;
        .waitName{
          display: flex;
          justify-content: space-between;
          align-items: center;
          uni-text:nth-child(1){
            color:#000;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
