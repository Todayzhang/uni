<template>
  <!-- 开关-参数设置 -->
  <view>
    <view class="uni-flex uni-column">

      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 开关类型 -->
              {{$t('switchtype')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeSwitch" :value="indexSwitch" :range="arrSwitch" :range-key="'name'">
                <view class="uni-input showFont">{{arrSwitch[indexSwitch].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 输出电压 -->
              {{$t('outputvoltage')}}(V)
            </view>
            <view class="uni-list-cell-db lineHang">
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInputVoltage"
                v-model.number="outPutVoltageData" placeholder="输出电压(V)" />
            </view>
            <!-- <span class="icon iconfont myIconEnd">&#xe687;</span> -->
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 开关行程 -->
              {{$t('travelswitch')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <input class="uni-input" type="number" style="text-align: right;" @blur="travelOnblur" @input="replaceInputTravel"
                v-model.lazy.number="travelSwitchData" placeholder="请输入" />
            </view>
            <!-- <span class="icon iconfont myIconEnd">&#xe687;</span> -->
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 触发模式 -->
              {{$t('triggermode')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeTrigger" :value="indexTrigger" :range="arrTrigger" :range-key="'name'">
                <view class="uni-input showFont">{{arrTrigger[indexTrigger].name}}</view>
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
              <!-- 传感器类型 -->
              {{$t('sensortype')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeSensort" :value="indexSensort" :range="arrSensort" :range-key="'name'">
                <view class="uni-input showFont">{{arrSensort[indexSensort].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 传感器数量 -->
              {{$t('numberofsensors')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeNum" :value="indexNum" :range="arrNum">
                <view class="uni-input showFont">{{arrNum[indexNum]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 传感器位置 -->
              {{$t('addressofsensors')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeAddress" :value="indexAddress" :range="arrAddress" :range-key="'name'">
                <view class="uni-input showFont">{{arrAddress[indexAddress].name}}</view>
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
              <!-- 分闸时间 -->
              {{$t('reclosingopeningtime')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeOpen" :value="indexOpen" :range="arrOpen" :range-key="'name'">
                <view class="uni-input showFont">{{arrOpen[indexOpen].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 分闸 -->
              {{$t('reclosingtime')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeClose" :value="indexClose" :range="arrOpen" :range-key="'name'">
                <view class="uni-input showFont">{{arrOpen[indexClose].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- 测试时间 -->
              {{$t('testtime')}}
            </view>
            <view class="uni-list-cell-db lineHang">
             <picker @change="bindPickerChangeTest" :value="indexTest" :range="arrTest" :range-key="'name'">
               <view class="uni-input showFont">{{arrTest[indexTest].name}}</view>
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
              <!-- 速度类型 -->
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
              <!-- 合前 -->
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
              <!-- 分后 -->
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
  import {bleBoole} from '../mixins/mixins.js'
  export default {
    mixins: [bleBoole],
    components: {
      EquipInfo,
      TipsModal
    },
    data() {
      return {
        setHead:'5aa50683',
        getHead:'5aa50682',
        // 开关类型
        arrSwitch: [{
          name: "金属触头",
          value: '1'
        }, {
          name: "合阻触头",
          value: '2'
        }, {
          name: "石墨触头1",
          value: '3'
        }, {
          name: "石墨触头2",
          value: '4'
        }],
        indexSwitch: 0,
        dataSwitch: '',
        //输出电压
        outPutVoltageData: '220',
        travelSwitchData: '50.0',
        //触发模式
        arrTrigger: [{
          name: '内触发',
          value: '1'
        }, {
          name: '外触发',
          value: '2'
        }],
        indexTrigger: 0,
        dataTrigger: '',
        //传感器类型 
        arrSensort: [{
          name: '角度',
          value: '3'
        }, {
          name: '位移',
          value: '2'
        }],
        indexSensort: 0,
        dataSensort: '',
        //传感器数量
        arrNum: ['1'],
        indexNum: 0,
        dataNum:'',
        //传感器位置
        arrAddress: [{
          name: 'A相',
          value: '1'
        }, {
          name: 'B相',
          value: '2'
        }, {
          name: 'C相',
          value: '3'
        }],
        indexAddress: 0,
        dataAddress: '',
        //分闸
        arrOpen: [{
          name: '100ms',
          value: '100'
        }, {
          name: '200ms',
          value: '200'
        }, {
          name: '300ms',
          value: '300'
        }, {
          name: '400ms',
          value: '400'
        }, {
          name: '500ms',
          value: '500'
        }, {
          name: '600ms',
          value: '600'
        }, {
          name: '700ms',
          value: '700'
        }, {
          name: '800ms',
          value: '800'
        }, {
          name: '900ms',
          value: '900'
        }, {
          name: '1000ms',
          value: '1000'
        }],
        indexOpen: 0,
        dataOpen: '',
        //合闸
        indexClose: 0,
        dataClose: '',
        //测试时间
        arrTest: [{
          name: '250ms',
          value: '250'
        }, {
          name: '500ms',
          value: '500'
        }, {
          name: '1000ms',
          value: '1000'
        }, {
          name: '2000ms',
          value: '2000'
        }, {
          name: '4000ms',
          value: '4000'
        }, {
          name: '10000ms',
          value: '10000'
        }, {
          name: '15000ms',
          value: '15000'
        }, {
          name: '20000ms',
          value: '20000'
        }],
        indexTest: 0,
        dataTest: '',
        arrayEl:[],
        indexEl:0,
        array:[],
        index:0
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
      // 开关类型
      bindPickerChangeSwitch(e) {
        this.indexSwitch = e.target.value
        this.dataSwitch = this.arrSwitch[this.indexSwitch]
        let sendValue = this.setHead + '000c00'+ this.$changeTosixty(this.dataSwitch.value)
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValue=>',sendValue)
        let getModule = this.getHead + '000c00'+ this.$changeTosixty(this.dataSwitch.value)
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('getValue=>',getValue)
      },
      //触发模式
      bindPickerChangeTrigger(e) {
        this.indexTrigger = e.target.value
        this.dataTrigger = this.arrTrigger[this.indexTrigger]
        let sendValue = this.setHead + '000f00'+ this.$changeTosixty(this.dataTrigger.value)
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValue=>',sendValue)
        let getModule = this.getHead + '000f00'+ this.$changeTosixty(this.dataTrigger.value)
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('getValue=>',getValue)
      },
      //传感器类型
      bindPickerChangeSensort(e) {
        this.indexSensort = e.target.value
        this.dataSensort = this.arrSensort[this.indexSensort]
        this.setSensor()
        // let sendValue = this.setHead + '001212'+ this.$changeTosixty(this.dataSensort.value)
        // sendValue = sendValue + this.$checkEndhl(sendValue)
        // console.log('sendValue=>',sendValue)
        // let getModule = this.getHead + '001212'+ this.$changeTosixty(this.dataSensort.value)
        // let getValue = getModule + this.$checkEndhl(getModule)
        // console.log('getValue=>',getValue)
        // this.sendMsgToDevice(sendValue, getValue, () => {
        //   console.log('请求成功')
          
        // })
      },
      //传感器数量
      bindPickerChangeNum(e) {
        this.indexNum = e.target.value
        this.dataNum = this.arrNum[this.indexNum]
        this.setSensor()
        // let sendValue = this.setHead + '000c00'+ this.$changeTosixty(this.dataNum.value)
        // sendValue = sendValue + this.$checkEndhl(sendValue)
        // console.log('sendValue=>',sendValue)
        // let getModule = this.getHead + '001212'+ this.$changeTosixty(this.dataNum.value)
        // let getValue = getModule + this.$checkEndhl(getModule)
        // console.log('getValue=>',getValue)
      },
      //传感器位置
      bindPickerChangeAddress(e) {
        this.indexAddress = e.target.value
        this.dataAddress = this.arrAddress[this.indexAddress]
        this.setSensor()
        // console.log('getValue=>',getValue)
      },
      /**设置传感器*/
      setSensor(){
        const num1 = this.dataNum.value?this.dataNum.value:'1';
        const num2 = this.dataSensort.value?this.dataSensort.value:'3';
        const num3 = this.$changeTosixty(this.dataAddress.value?this.dataAddress.value:'1');
        const numCount = num1 + num2 + this.$changeTosixty(num3)
        let sendValue = this.setHead + '0012'+ numCount
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValue=>',sendValue)
        let getModule = this.getHead + '0012'+ numCount
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('sendValue=>',getValue)
      },
      //重合闸分闸时间
      bindPickerChangeOpen(e) {
        this.indexOpen = e.target.value
        this.dataOpen = this.arrOpen[this.indexOpen]
        let sendValue = this.setHead + '001300'+ this.$changeTosixty(this.dataOpen.value)
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValuez=>',sendValue)
        let getModule = this.getHead +  '001300'+ this.$changeTosixty(this.dataOpen.value)
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('getValuezz=>',getValue)
      },
      //重合闸合闸时间
      bindPickerChangeClose(e) {
        this.indexClose = e.target.value
        this.dataClose = this.arrOpen[this.indexClose]
        let sendValue = this.setHead + '001400'+ this.$changeTosixty(this.dataClose.value)
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValue=>',sendValue)
        let getModule = this.getHead +  '001400'+ this.$changeTosixty(this.dataClose.value)
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('getValue=>',getValue)
      },
      //测试时间
      bindPickerChangeTest(e) {
        this.indexTest = e.target.value
        this.dataTest = this.arrTest[this.indexTest]
        let sendValue = this.setHead + '001500'+ this.$changeTosixty(this.dataTest.value)
        sendValue = sendValue + this.$checkEndhl(sendValue)
        console.log('sendValue=>',sendValue)
        let getModule = this.getHead + '001500'+ this.$changeTosixty(this.dataTest.value)
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log('getValue=>',getValue)
      },
      
      /**输出电压*/
      replaceInputVoltage(event) {
        var value = event.target.value;
        if (value > 250) {
          this.outPutVoltageData = 250;
        } else if (value < 30) {
          this.outPutVoltageData = 30;
        }
      },
      /**开关行程*/
      replaceInputTravel(event) {
        var value = event.target.value;
        if (value > 999.9) {
          this.travelSwitchData = 999.9;
        } else if (value < 0) {
          this.travelSwitchData = 0;
        }
      },
      travelOnblur(e){
        console.log(e.detail.value*10)
        const value = this.$largechangeTosixty(e.detail.value*10)
        let sendValue = this.setHead + '000e'+ value
         sendValue = sendValue + this.$checkEndhl(sendValue)
        let getModule = this.getHead + '000e'+ value
        let getValue = getModule + this.$checkEndhl(getModule)
        console.log(sendValue);
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
