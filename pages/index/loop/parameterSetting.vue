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
  
  export default {
    components: {
      EquipInfo,TipsModal
    },
    data() {
      return {
        array: ['5S', '10S', '20S', '30S', '60S', '120S', '360S', '999S'],
        arrayEl: ['5A', '10A', '20A', '30A', '60A', '120A', '360A', '999A'],
        index: 0,
        indexEl:0
      }
    },
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].loopparametersetting
       });
     },
    methods: {
      // 展示测试结果
      showResult() {
        // 关闭确认弹框
        this.$refs.popup.close()
        this.goTo('/pages/loop/testResult')
      },
      startTest(){
        this.$refs.popup.open()
      },
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        this.index = e.target.value
      },
      bindPickerChangeEl: function(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        this.indexEl = e.target.value
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
  .uni-list-cell-left{
    padding: 0;
  }
  .uni-list::before{
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
