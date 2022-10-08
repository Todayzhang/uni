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
        <!-- 显示红点绿点 -->
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
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInputTravel"
                v-model.number="travelSwitchData" placeholder="输出电压(V)" />
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
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
          value: '1'
        }, {
          name: '200ms',
          value: '2'
        }, {
          name: '300ms',
          value: '3'
        }, {
          name: '400ms',
          value: '4'
        }, {
          name: '500ms',
          value: '5'
        }, {
          name: '600ms',
          value: '6'
        }, {
          name: '700ms',
          value: '7'
        }, {
          name: '800ms',
          value: '8'
        }, {
          name: '900ms',
          value: '9'
        }, {
          name: '1000ms',
          value: '10'
        }],
        indexOpen: 0,
        dataOpen: '',
        //合闸
        indexClose: 0,
        dataClose: '',
        //测试时间
        arrTest: [{
          name: '250ms',
          value: '1'
        }, {
          name: '500ms',
          value: '2'
        }, {
          name: '1000ms',
          value: '3'
        }, {
          name: '2000ms',
          value: '4'
        }, {
          name: '4000ms',
          value: '5'
        }, {
          name: '10000ms',
          value: '6'
        }, {
          name: '15000ms',
          value: '7'
        }, {
          name: '20000ms',
          value: '8'
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
      },
      //触发模式
      bindPickerChangeTrigger(e) {
        this.indexTrigger = e.target.value
        this.dataTrigger = this.arrTrigger[this.indexTrigger]
      },
      //传感器类型
      bindPickerChangeSensort(e) {
        this.indexSensort = e.target.value
        this.dataSensort = this.arrSensort[this.indexSensort]
      },
      //传感器数量
      bindPickerChangeNum(e) {
        this.indexNum = e.target.value
        this.dataNum = this.arrNum[this.indexNum]
      },
      //传感器位置
      bindPickerChangeAddress(e) {
        this.indexAddress = e.target.value
        this.dataAddress = this.arrAddress[this.indexAddress]
      },
      //重合闸分闸时间
      bindPickerChangeOpen(e) {
        this.indexOpen = e.target.value
        this.dataOpen = this.arrOpen[this.indexOpen]
      },
      //重合闸合闸时间
      bindPickerChangeClose(e) {
        this.indexClose = e.target.value
        this.dataClose = this.arrOpen[this.indexClose]
      },
      //测试时间
      bindPickerChangeTest(e) {
        this.indexTest = e.target.value
        this.dataTest = this.arrTest[this.indexTest]
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
