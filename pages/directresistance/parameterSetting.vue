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
            <!-- <span class="icon iconfont myIconEnd">&#xe687;</span> -->
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
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput2"
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
              <input class="uni-input" type="number" style="text-align: right;" @input="replaceInput3"
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
  import { changeTosixty,checkEnd } from './sixtyChange.js'
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
            value: '00'
          },
          {
            name: '<20mA',
            value: '01'
          },
          {
            name: '40mA',
            value: '02'
          },
          {
            name: '200mA',
            value: '03'
          },
          {
            name: '1A',
            value: '04'
          },
          {
            name: '3A',
            value: '05'
          },
          {
            name: '10A',
            value: '06'
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
          let newChange = this.changeValue
          if (!newChange || newChange < -50 || newChange > 200) {
            uni.showToast({
              title: '温度数据不符合，请重新输入',
              duration: 1000
            });
            this.changeValue = '';
            return;
          }
          const DRes = this.toTemp(this.changeValue)
          sendValue = '6aa60601a2' + DRes
          sendValue = sendValue + checkEnd(sendValue)
          console.log('绕组温度=>', sendValue)
        } else if (value == 5) { //折算温度
          let newChange = this.changeValue2
          if (!newChange || newChange < 0 || newChange > 200) {
            uni.showToast({
              title: '温度数据不符合，请重新输入',
              duration: 1000
            });
            this.changeValue2 = '';
            return;
          }
          const DRes = this.toTemp(this.changeValue2)
          sendValue = '6aa60601a3' + DRes
          sendValue = sendValue + checkEnd(sendValue)
          console.log('换算温度=>', sendValue)
        } else if (value == 6) { //分接位置
          const sendTap = changeTosixty(this.changeValue3)
          sendValue = '6aa60501b8' + sendTap
          sendValue = sendValue + checkEnd(sendValue)
        }
        console.log(sendValue)
        // this.sendToDevice(sendValue)
        //  console.log(this.$store)
        // console.log(this.$store.bluetooth.state.bluetooth.bleAddress)

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
          "hex": true, //是否hex方式发送命令，默认false,字符串发送
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
        console.log(e.target)
        let muValue = '6aa60501b7' + changeTosixty(e.target.value)
        muValue = muValue + checkEnd(muValue) 
        //this.sendToDevice(muValue)
      },
      //测试电流
      bindPickerChangeIe(e) {
        console.log(e.target);
        this.indexIe = e.target.value;
        this.dlValue = this.arrayIe[e.target.value].value;
        let msg = '6aa60501a1' + this.dlValue;
        msg = msg + checkEnd(msg)
        console.info(msg);
        //this.sendToDevice(msg)
      },
      //折算温度切换 铜 铝
      bindPickerChangeZS(e) {
        console.log(console.log(e.target))
        let selectValue = this.arrayZS[e.target.value]
        let sendValue = '6aa60501a4'
        if (selectValue == '铜') {
          sendValue = sendValue + '01'
        } else if (selectValue == '铝') {
          sendValue = sendValue + '02'
        }
        sendValue = sendValue + checkEnd(sendValue)
        console.log(sendValue)
        // this.sendToDevice(sendValue)
      },

      //监听input框的数据 限制在 -50~200 之间
      replaceInput(event) {
        var value = event.target.value;
        if (value > 200) {
          this.changeValue = 200;
        } else if (value < -50) {
          this.changeValue = -50;
        }
      },
      replaceInput2(event) {
        var value = event.target.value;
        if (value > 200) {
          this.changeValue2 = 200;
        } else if (value < 0) {
          this.changeValue2 = 0;
        }
      },
      replaceInput3(event) {
        var value = event.target.value;
        if (value > 99) {
          this.changeValue2 = 99;
        } else if (value < 0) {
          this.changeValue2 = 0;
        }
      },
      /**温度转换成16进制*/
      toTemp(sourceNum) {
        sourceNum = sourceNum * 10
        // 数字取绝对值
        let absoluteValue = Math.abs(sourceNum)
        // 是否为负数标识 true:负数 false:正数
        let isNegative = absoluteValue != sourceNum
        if (isNegative) {
          // 转换成二进制
          let twoString = absoluteValue.toString(2)
          // 计算需要补的位数
          let len = `${twoString}`.length
          let comNum = 16 - len
          // 补位
          let addStr = ''
          for (let i = 0; i < comNum; i++) {
            addStr += '0'
          }
          let afterComp = addStr + twoString
          // 二进制取反
          let twoStringReverse = this.numReverse(afterComp)
          let res = parseInt(twoStringReverse, 2)
          // 负数，这里需要+1    
          res++
          return res.toString(16)
        } else {
          let str = sourceNum.toString(16)
          if (str.length == 1) {
            str = '000' + str;
          } else if (str.length == 2) {
            str = "00" + str;
          } else if (str.length == 3) {
            str = "0" + str;
          }
          return str
        }
      },
      numReverse(str) {
        let arr = str.split('')
        let newArr = []
        arr.forEach(element => {
          if (element === "0") {
            newArr.push("1")
          } else {
            newArr.push("0")
          }

        });
        return newArr.join('')
      },
      // 确定，跳转到结果页面
      sure() {
        this.$refs.popup.close();
        let item = {
          "fjwz":this.changeValue3,//分接位置
          "csxb":this.arrayMu[this.indexMu],//测试相别
          "csdl":this.arrayIe[this.indexIe].name //测试电流
        }
        this.goTo('/pages/directresistance/testResult?item='+ encodeURIComponent(JSON.stringify(item)))
        // let msg = '6aa60501a501'
        // msg = msg + checkEnd(msg)
        // console.log('msg=>',msg);
        // sendToDevice(msg, (result) => {
        //   console.log(result)
        //   this.goTo('/pages/directresistance/testResult')
        // })
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
