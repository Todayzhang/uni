<template>
  <!-- 直阻测试-参数设置 -->
  <view>
    <view class="uni-flex uni-column">
      <equip-info></equip-info>
      <view class="bottomBox">
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('sampletype')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput"
                v-model="changeValue1" placeholder="请输入" />
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
            <button class="mini-btn" type="primary" size="mini" @click="sendMsg(1)">发送</button>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testcurrent')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeIe" :value="indexIe" :range="arrayIe" :range-key="'name'">
                <view class="uni-input showFont">{{arrayIe[indexIe].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
         <!--   	<button class="mini-btn" type="primary" size="mini">发送</button> -->
          </view>
        </view>
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('testphase')}}
            </view>
            <view class="uni-list-cell-db lineHang">
              <picker @change="bindPickerChangeMu" :value="indexMu" :range="arrayMu">
                <view class="uni-input showFont">{{arrayMu[indexMu]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
            <!-- <button class="mini-btn" type="primary" size="mini">发送</button> -->
          </view>
        </view>
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              <!-- {{$t('windingtemperature')}}(-50~200℃) -->
              绕组温度(-50~200℃)
            </view>
            <view class="uni-list-cell-db lineHang">
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput"
                v-model="changeValue" placeholder="请输入" />
              <!-- <picker @change="bindPickerChangeRZ" :value="indexRZ" :range="arrayRZ">
                 <view class="uni-input showFont">{{arrayRZ[indexRZ]}}</view>
               </picker> -->
            </view>
            <span class="icon iconfont myIconEnd"></span>
            <button class="mini-btn" type="primary" size="mini" @click="sendMsg(4)">发送</button>
          </view>
        </view>
        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('conversiontemperature')}}(0~200℃)
            </view>
           <view class="uni-list-cell-db lineHang" style="display: flex;">
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput"
                v-model="changeValue2" placeholder="请输入" />
              <picker @change="bindPickerChangeZS" :value="indexZS" :range="arrayZS">
                <view class="uni-input showFont">{{arrayZS[indexZS]}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
            <button class="mini-btn" type="primary" size="mini" @click="sendMsg(5)">发送</button>
          </view>
        </view>
       
        <view class="uni-list bottomItem lastOne">
          <view class="uni-list-cell">
            <view class="uni-list-cell-left">
              {{$t('tappingposition')}}(0~99)
            </view>
            <view class="uni-list-cell-db lineHang">
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput"
                v-model="changeValue3" placeholder="请输入" />
              <!--  <picker @change="bindPickerChangeFJ" :value="indexFJ" :range="arrayFJ">
                 <view class="uni-input showFont">{{arrayFJ[indexFJ]}}</view>
               </picker> -->
            </view>
            <span class="icon iconfont myIconEnd"></span>
            <button class="mini-btn" type="primary" size="mini" @click="sendMsg(6)">发送</button>
          </view>
        </view>
     
      </view>

      <!-- 底部按钮 -->
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
  const modal = uni.requireNativePlugin('modal');
  const btble = uni.requireNativePlugin('Common-BLE');
  export default {
    components: {
      EquipInfo,
      TipsModal
    },
    data() {
      return {
        arrayModel: [this.$t('directresistancecurrent'), 'value2', 'value3', 'value4', 'value5'],
        indexModel: 0,
        arrayIe: [{
            name: 'Auto',
            value: '00 b6'
          },
          {
            name: '<20mA',
            value: '01 b7'
          },
          {
            name: '40mA',
            value: '02 b8'
          },
          {
            name: '200mA',
            value: '03 b9'
          },
          {
            name: '1A',
            value: '04 ba'
          },
          {
            name: '3A',
            value: '05 bb'
          },
          {
            name: '10A',
            value: '06 bc'
          }
        ],
        indexIe: 0,
        arrayMu: ['AB', 'BC', 'CA', 'AO', 'BO', 'CO', 'AmBm', 'Bmcm', 'CmAm', 'AmOm', 'BmOm', 'CmOm', 'ab', 'bc', 'ca',
          'ao', 'bo', 'co'
        ],
        indexMu: 0,
        arrayRZ: ['0.0', '1.1', '2.2'],
        indexRZ: 0,
        arrayZS: ['铜', '铝'],
        indexZS: 0,
        arrayFJ: [1, 2, 3],
        indexFJ: 0,
        changeValue: '',
        changeValue1: '',
        changeValue2: '',
        changeValue3: '',
        dlValue: ''
      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].testparametersetting
      });
      this.openNotify()
    },
    onHide() {
      console.log('hidden');
      this.closeNotify()
    },
    methods: {
      sendMsg(value) {
        let sendValue = ''
        if (value == 1) { //试品类型
          let msg = '11 04 a1 '
          msg += this.dlValue
        } else if (value == 2) { //测试电流

        } else if (value == 3) { //测试相别

        } else if (value == 4) { //绕组温度
          let D1 = '2B'
          if (this.changeValue < 0) {
            D1 = '2D'
          }
          let newChange = this.changeValue
          if (!newChange || newChange < -50 || newChange > 200) {
            uni.showToast({
              title: '温度数据不符合，请重新输入',
              duration: 1000
            });
            this.changeValue = '';
            return;
          }
          let length = String(Math.abs(newChange)).length
          if (length == 2) {
            newChange = '0' + Math.abs(newChange)
          } else if (length == 1) {
            newChange = '00' + Math.abs(newChange)
          }
          console.log(newChange);
          let D2 = '3' + newChange.split('')[0]
          let D3 = '3' + newChange.split('')[1]
          let D4 = '3' + newChange.split('')[2]

          sendValue = '11 07 B1 ' + D1 + ' ' + D2 + ' ' + D3 + ' ' + D4
          sendValue = sendValue + ' ' + this.checkEnd(sendValue)
          console.log('sendValue=>', sendValue)
        } else if (value == 5) { //折算温度

        } else if (value == 6) { //分接位置

        }
        this.sendToDevice(sendValue)
        //  console.log(this.$store)
        // console.log(this.$store.bluetooth.state.bluetooth.bleAddress)

      },
      checkEnd(str) {
        let itotal = 0,
          len = str.length,
          num = 0;
        while (num < len) {
          let s = str.substring(num, num + 2);
          itotal += parseInt(s, 16);
          num = num + 2;
        }
        let mode = itotal % 256;
        let shex = mode.toString(16);
        let iLen = shex.length;
        if (iLen < 2) {
          shex = "0" + shex;
        }
        return shex;
      },
      //打开通知
      openNotify() {
        btble.openNotify(result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      //关闭通知
      closeNotify() {
        btble.closeNotify({
          "btAddress": this.$store.state.bluetooth.bleAddress
        }, result => {
          //接收
          const content = JSON.stringify(result);
          console.info(content)
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      sendToDevice(value) {
        btble.writeNotResponse({
          "hex": false, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.$store.state.bluetooth.bleAddress,
          "data": value,
          "charset": "GBK"
        }, result => {
          //接收
          const content = JSON.stringify(result);
          console.info(content)
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      //测试相别
      bindPickerChangeMu(e) {
        this.indexMu = e.target.value
        let muValue = '11 04 B7 ' + changeTosixty(this.indexMu) + 2
      },
      //测试电流
      bindPickerChangeIe(e) {
        console.log(e.target);
        this.indexIe = e.target.value;
        this.dlValue = this.arrayIe[this.indexIe].value;
        let msg = '11 04 a1 '+this.dlValue;
        console.info(msg);
        this.sendToDevice(sendValue)
      },
      //折算温度  铜 铝
      bindPickerChangeZS(e){
        console.log('折算温度=>',console.log(e.target))
      },
      //十进制转16进制
      changeTosixty(num) {
        let sixtyNum = Int(num).toString(16)
        if (String(sixtyNum).length == 1) {
          sixtyNum = '0' + sixtyNum
        }
        return sixtyNum
      },
      replaceInput(event) {
        var value = event.target.value;
        if (value > 200) {
          this.changeValue = 200;
        } else if (value < -50) {
          this.changeValue = -50;
        }
      },
      // 确定，跳转到结果页面
      sure() {
        this.$refs.popup.close()
        let msg = '11 04 a5 01 bb'
        sendToDevice(msg, (result) => {
          console.log(result)
          this.goTo('/pages/directresistance/testResult')
        })
      },
      open() {
        this.$refs.popup.open()
      },
      // 页面跳转
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
    z-index: 99;
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
    margin-bottom: 120rpx;
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
