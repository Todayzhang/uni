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
              <input class="uni-input inputRight" type="number" @input="replaceInputVoltage"
                @blur="sendLargeData(outPutVoltageData,'06060d')"
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
              <input class="uni-input inputRight" type="number" @blur="sendLargeData(travelSwitchData/0.1,'06060e')" @input="replaceInputTravel"
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
              <picker @change="bindPickerChangeEl" :value="indexEl" :range="arrayEl" :range-key="'name'">
                <view class="uni-input showFont">{{arrayEl[indexEl].name}}</view>
              </picker>
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span>
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="clickBtn" @click="changeQianText(qianText,1)">{{qianText}}</view>
            <view class="clickBtn">
              <input class="uni-input inputRight" :disabled="indexEl!=10" v-model="zhongText" placeholder="" />
            </view>
            <view class="clickBtn" style="margin-right: 10px;"  @click="changeHouText(houText,1)">{{houText}}</view>
            <!--            <view class="uni-list-cell-left">   
              {{$t('preclosingspeed')}}
            </view>
            <view class="uni-list-cell-db lineHang">
               <input class="uni-input inputRight" type="number"
                 v-model.number="preclosingspeedNum" placeholder="输出电压(V)" />
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span> -->
          </view>
        </view>

        <view class="uni-list bottomItem">
          <view class="uni-list-cell">
            <view class="clickBtn" @click="changeQianTextb(bqianText,2)">{{bqianText}}</view>
            <view class="clickBtn">
              <input class="uni-input inputRight" :disabled="indexEl!=10" v-model="bzhongText" placeholder="" />
            </view>
            <view class="clickBtn" style="margin-right: 10px;" @click="changeHouText(bhouText,2)">{{bhouText}}</view>
            <!--  <view class="uni-list-cell-left">
              {{$t('splitspeed')}}
            </view>
            <view class="uni-list-cell-db lineHang">
               <input class="uni-input inputRight" type="number"
                 v-model.number="splitspeedNum" placeholder="输出电压(V)" />
            </view>
            <span class="icon iconfont myIconEnd">&#xe687;</span> -->
          </view>
        </view>

      </view>
<!--      <view class="btmBtnBox">
        <view class="bottomBtn" @click="open()">{{$t('starttesting')}}</view>
      </view> -->

      <!-- 确认弹框 -->
      <tips-modal ref="popup" @determine="sure"></tips-modal>

    </view>
    <view>
    </view>
  </view>
</template>

<script>
  import EquipInfo from '../../public/EquipInfo.vue'
  import TipsModal from '../../public/TipsModal.vue'
  import {
    bleBoole
  } from '../../mixins/mixins.js'
  export default {
    mixins: [bleBoole],
    components: {
      EquipInfo,
      TipsModal
    },
    watch: {
      zhongText(newValue) {
        if (this.indexEl == 10) {
          this.arrayEl[this.indexEl].zhongText = newValue
        }
      },
      bzhongText(newValue) {
        if (this.indexEl == 10) {
          this.arrayEl[this.indexEl].bzhongText = newValue
        }
      },
    },
    data() {
      return {
        currTestMode: 1,
        setHead: '6aa6',
        getHead: '6aa6',
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
        dataNum: '',
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
        qianText: '合前',
        zhongText: '10',
        houText: 'mm',
        bqianText: '分后',
        bzhongText: '10',
        bhouText: 'mm',
        arrayEl: [{
          name: '油开关I',
          value: '0',
          qianText: '合前',
          zhongText: '10',
          houText: 'ms',
          bqianText: '分后',
          bzhongText: '10',
          bhouText: 'ms'
        }, {
          name: '油开关Ⅱ',
          value: '1',
          qianText: '合前后',
          zhongText: '5',
          houText: 'ms',
          bqianText: '分前后',
          bzhongText: '5',
          bhouText: 'ms'
        }, {
          name: '油开关Ⅲ',
          value: '2',
          qianText: '合前后',
          zhongText: '10',
          houText: 'ms',
          bqianText: '分前后',
          bzhongText: '10',
          bhouText: 'ms'
        }, {
          name: '真空开关10kV-I',
          value: '3',
          qianText: '合前',
          zhongText: '6',
          houText: 'mm',
          bqianText: '分后',
          bzhongText: '6',
          bhouText: 'mm'
        }, {
          name: '真空开关10kV-Ⅱ',
          value: '4',
          qianText: '合前',
          zhongText: '平均',
          houText: '速度',
          bqianText: '分后',
          bzhongText: '6',
          bhouText: 'mm'
        }, {
          name: '真空开关35kV',
          value: '5',
          qianText: '合前',
          zhongText: '12',
          houText: 'mm',
          bqianText: '分后',
          bzhongText: '12',
          bhouText: 'mm'
        }, {
          name: 'LW8-35型SF6开关',
          value: '6',
          qianText: '合前',
          zhongText: '16',
          houText: 'mm',
          bqianText: '分后',
          bzhongText: '32',
          bhouText: 'mm'
        }, {
          name: 'LW6型SF6开关',
          value: '7',
          qianText: '合前',
          zhongText: '36',
          houText: 'mm',
          bqianText: '分后',
          bzhongText: '72',
          bhouText: 'mm'
        }, {
          name: 'LW6型SF7开关',
          value: '8',
          qianText: '合前',
          zhongText: '120',
          houText: 'mm',
          bqianText: '分后',
          bzhongText: '120',
          bhouText: 'mm'
        }, {
          name: '西开SF6开关',
          value: '9',
          qianText: '到',
          zhongText: '断点',
          houText: '10%',
          bqianText: '到',
          bzhongText: '断点',
          bhouText: '10%'
        }, {
          name: '自定义',
          value: '10',
          qianText: '合前',
          zhongText: '10',
          houText: 'ms',
          bqianText: '分后',
          bzhongText: '10',
          bhouText: 'ms'
        }],
        indexEl: 0,
        array: [],
        index: 0,
        preclosingspeedNum: 10,
        splitspeedNum: 10,

      }
    },
    onShow() {
      uni.setNavigationBarTitle({ // 修改头部标题
        title: this.$i18n.messages[this.$i18n.locale].switchparametersetting
      });
      //this.getNotify()
    },
    methods: {
      initCurr(value){
        // console.log('get',this.getMsgResult)
         let newData = value
        // console.log(parseInt(newData.slice(12,14),16))
         this.indexTrigger = parseInt(newData.slice(12,14),16)-1; //触发模式1     1
         const speedDefine = parseInt(newData.slice(14,16),16);
         this.indexEl = speedDefine-1;
         console.log('indexEl',this.indexEl)
         if(speedDefine==11){ //自定义
           console.log('speedDefine=>',speedDefine)
           this.fenJieSpeed(newData.slice(16,20),1)
           this.fenJieSpeed(newData.slice(20,24),2)
         }
         // this. = parseInt(newData.slice(14,16),16); //速度定义1    2
         // this. = parseInt(newData.slice(16,20),16); //自定义速度合2  3
         // this. = parseInt(newData.slice(20,24),16); //自定义速度分2 4
         this.outPutVoltageData = parseInt(newData.slice(24,28),16); //输出电压2 5
         // this. = parseInt(newData.slice(28,32),16); //传感器设置2    6
         this.fenJieSensors(newData.slice(28,32))
         console.log('Close',parseInt(newData.slice(36,40),16))
         console.log('indexOpen',parseInt(newData.slice(40,44),16))
         this.travelSwitchData = parseInt(newData.slice(32,36),16)/10; //行程2   7
         for (var i = 0; i < this.arrOpen.length; i++) {
           if(this.arrOpen[i].value == parseInt(newData.slice(36,40),16)){
             this.indexClose = i
             }
           if(this.arrOpen[i].value == parseInt(newData.slice(40,44),16)){
             this.indexOpen = i
           }
         }
         // this.indexClose = parseInt(newData.slice(36,40),16); //重合闸合闸2        8
         // this. = parseInt(newData.slice(40,44),16); //重合闸分闸2  9
         console.log('indexTest',parseInt(newData.slice(44,48),16))
         for (var i = 0; i < this.arrTest.length; i++) {
           if(this.arrTest[i].value == parseInt(newData.slice(44,48),16)){
             this.indexTest = i
             }
         }
         
         // this. = parseInt(newData.slice(44,48),16); //测试时间2   10
         // this. = parseInt(newData.slice(48,50),16); //开关类型1    11
         this.indexSwitch = parseInt(newData.slice(48,50),16); //开关类型1
         console.log(this.indexSwitch)
      },
      //传输油管开关数据
      open() {
        //console.log(222)
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        //  let sendValue = '6aa60506160122'
        if(this.indexEl == 10){
          console.log('vvvv')
          let qianValue = 1
          if(this.qianText == '合前后' || this.qianText == '分前后' ){
            qianValue = 2
          }
          let zhongValue = this.$changeTosixty(this.zhongText)
          let houValue = 1
          if(this.houText == 'ms' ){
            houValue = 2
          }
          let bqianValue = 1
          if(this.bqianText == '合前后' || this.bqianText == '分前后' ){
            bqianValue = 2
          }
          let bzhongValue = this.$changeTosixty(this.bzhongText)
          let bhouValue = 1
          if( this.bhouText == 'ms' ){
            bhouValue = 2
          }
          const sendCode = this.setHead + '080611' + qianValue +zhongValue+houValue+bqianValue+bzhongValue+bhouValue
          const sendValue = sendCode + this.$checkEnd(sendCode)
          //console.log(sendValue)
          this.sendMsgToDevice(sendValue, '', () => {
            console.log('请求成功')
          })
        }
        //  console.log()
        //this.sendLargeData()
        //this.$refs.popup.open()
      },
      fenJieSpeed(value,flag){
        const qianValue = value.slice(0,1)
        const zhongValue = value.slice(1,3)
        const houValue = value.slice(3,4)
        if(flag==1){//
          if(qianValue == '1'){ this.qianText = '合前' }else{ this.qianText = '合前后'}
          if(zhongValue){ this.zhongText = parseInt(zhongValue,16)}
          if(houValue == '1'){ this.houText = 'mm' }else{ this.houText = 'ms'}
        }else{
          if(qianValue == '1'){ this.bqianText = '分后' }else{ this.bqianText = '分前后'}
          if(zhongValue){ this.bzhongText = parseInt(zhongValue,16)}
          if(houValue == '1'){ this.bhouText = 'mm' }else{ this.bhouText = 'ms'}
        }    
      },
      fenJieSensors(value){
        //const qianValue = value.slice(1,3)
        this.indexSensort = value.slice(1,2)-1
        this.indexAddress = value.slice(3,4)-1
        console.log("indexSensort=>",this.indexSensort)
        console.log("indexAddress=>",this.indexAddress)
      },
      sure() {
        let sendValue = '6aa60506160122'
        console.log(sendValue)
        //let getValue = '6aa606820016'+'0001'+'99'
        this.sendMsgToDevice(sendValue, '', () => {
          console.log('请求成功')
          this.$refs.popup.close()
        })
        setTimeout(()=>{
          this.$refs.popup.close()
        },5000)
      },
      close() {
        this.$refs.popup.close()
        this.sendMsgToDevice(sendValue, getValue, () => {
          console.log('请求成功')
        })
      },
      // 开关类型  
      bindPickerChangeSwitch(e) {  
          console.log('diaoyong')
          this.indexSwitch = e.target.value
          this.dataSwitch = this.arrSwitch[this.indexSwitch]
          this.sendMinData(this.dataSwitch.value,'05060c')
      },
      //触发模式
      bindPickerChangeTrigger(e) {      
          this.indexTrigger = e.target.value
          this.dataTrigger = this.arrTrigger[this.indexTrigger]
          console.log(this.dataTrigger.value)
          this.sendMinData(this.dataTrigger.value,'05830f','05820f')
      },
      //传感器类型
      bindPickerChangeSensort(e) {
        this.indexSensort = e.target.value
        this.dataSensort = this.arrSensort[this.indexSensort]
        this.setSensor()
      },
      //传感器数量
      bindPickerChangeNum(e) {
        this.indexNum = e.target.value
        this.dataNum = this.arrNum[this.indexNum]
        this.setSensor()
      },
      //传感器位置
      bindPickerChangeAddress(e) {
        this.indexAddress = e.target.value
        this.dataAddress = this.arrAddress[this.indexAddress]
        this.setSensor()
        // console.log('getValue=>',getValue)
      },
      /**设置传感器*/
      setSensor() {
        const num1 = this.dataNum.value ? this.dataNum.value : '1';
        const num2 = this.dataSensort.value ? this.dataSensort.value : '3';
        const num3 = this.$changeTosixty(this.dataAddress.value ? this.dataAddress.value : '1');
        const numCount = '060612'+ num1 + num2
        this.sendMinData(num3,numCount)
        // let sendValue = this.setHead + '0012' + numCount
        // sendValue = sendValue + this.$checkEnd(sendValue)
        // console.log('sendValue=>', sendValue)
        // let getModule = this.getHead + '0012' + numCount
        // let getValue = getModule + this.$checkEnd(getModule)
        // console.log('sendValue=>', getValue)
        // this.sendMsgToDevice(sendValue, getValue, () => {
        //   console.log('请求成功')
        // })
      },
      //重合闸分闸时间
      bindPickerChangeOpen(e) {
        this.indexOpen = e.target.value
        this.dataOpen = this.arrOpen[this.indexOpen]
        this.sendLargeData(this.dataOpen.value,'060613')
        // let sendValue = this.setHead + '0013' + this.$largechangeTosixty(this.dataOpen.value)
        // sendValue = sendValue + this.$checkEnd(sendValue)
        // console.log('sendValuez=>', sendValue)
        // let getModule = this.getHead + '0013' + this.$largechangeTosixty(this.dataOpen.value)
        // let getValue = getModule + this.$checkEnd(getModule)
        // console.log('getValuezz=>', getValue)
        // this.sendMsgToDevice(sendValue, getValue, () => {
        //   console.log('请求成功')
        // })
      },
      //重合闸合闸时间
      bindPickerChangeClose(e) {
        this.indexClose = e.target.value
        this.dataClose = this.arrOpen[this.indexClose]
        this.sendLargeData(this.dataClose.value,'060614')
        // let sendValue = this.setHead + '0014' + this.$largechangeTosixty(this.dataClose.value)
        // sendValue = sendValue + this.$checkEnd(sendValue)
        // console.log('sendValue=>', sendValue)
        // let getModule = this.getHead + '0014' + this.$largechangeTosixty(this.dataClose.value)
        // let getValue = getModule + this.$checkEnd(getModule)
        // console.log('getValue=>', getValue)
        // this.sendMsgToDevice(sendValue, getValue, () => {
        //   console.log('请求成功')
        // })
      },
      //测试时间
      bindPickerChangeTest(e) {
        this.indexTest = e.target.value
        this.dataTest = this.arrTest[this.indexTest]
        this.sendLargeData(this.dataTest.value,'060615')
        // let sendValue = this.setHead + '0015' + this.$largechangeTosixty(this.dataTest.value)
        // sendValue = sendValue + this.$checkEnd(sendValue)
        // console.log('sendValue=>', sendValue)
        // let getModule = this.getHead + '0015' + this.$largechangeTosixty(this.dataTest.value)
        // let getValue = getModule + this.$checkEnd(getModule)
        // console.log('getValue=>', getValue)
        // this.sendMsgToDevice(sendValue, getValue, () => {
        //   console.log('请求成功')
        // })
      },
      //速度定义
      bindPickerChangeEl(e) {
        console.log("速度定义！")
        this.indexEl = e.target.value
        console.log(this.indexEl)
        const showText = this.arrayEl[this.indexEl]
        this.qianText = showText.qianText
        this.zhongText = showText.zhongText
        this.houText = showText.houText
        this.bqianText = showText.bqianText
        this.bzhongText = showText.bzhongText
        this.bhouText = showText.bhouText
        const sendValue = showText.value + 1
       // console.log(this.indexEl)
        if(this.indexEl!=10){
          this.sendMinData(sendValue,'050610')
        }
        //this.sendVoltageData(this.indexEl+1,'0010')
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
      sendLargeData(valueData,code){
        let sendValue = this.setHead + code + this.$largechangeTosixty(valueData)
        sendValue = sendValue + this.$checkEnd(sendValue)
        let getModule = this.getHead + code + this.$largechangeTosixty(valueData)
        let getValue = getModule + this.$checkEnd(getModule)
        console.log(sendValue);
        console.log(getValue);
        this.sendMsgToDevice(sendValue, getValue, () => {
          console.log('请求成功')
        })
      },
      /**发送min 16进制消息和接收消息*/
      sendMinData(valueData,code,getCode=''){
        console.log('valueData',valueData);
        let sendValue = this.setHead + code + this.$changeTosixty(valueData)
        sendValue = sendValue + this.$checkEnd(sendValue)
        console.log('sendValue',sendValue);
        const newCode = getCode?getCode:code 
        let getModule = this.getHead + newCode + this.$changeTosixty(valueData)
        let getValue = getModule + this.$checkEnd(getModule)
        console.log(' getValue',getValue);
        this.sendMsgToDevice(sendValue, getValue, () => {
          console.log('请求成功')
        })
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
      changeQianText(text) {
        if (this.indexEl == 10) {
          let changeText = '合前'
          if (text === changeText) {
            changeText = '合前后'
          }
          this.qianText = changeText
          this.arrayEl[10].qianText = changeText
        }
      },
      changeQianTextb(text) {
        if (this.indexEl == 10) {
          let changeText = '分后'
          if (text === changeText) {
            changeText = '分前后'
          }
          this.bqianText = changeText
          this.arrayEl[10].bqianText = changeText
        }
      },
      changeHouText(text, flag) {
        if (this.indexEl == 10) {
          let changeText = 'mm'
          if (text === changeText) {
            changeText = 'ms'
          }
          if (flag == 1) {
            this.houText = changeText
            this.arrayEl[10].houText = changeText
          } else {
            this.bhouText = changeText
            this.arrayEl[10].bhouText = changeText
          }
        }

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
    background: url(../../../static/images/btn-big-green.png) no-repeat;
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

    .clickBtn {
      width: 6em;
      text-align: center;
      background-color: #d8d0cc;
      margin: 5rpx 0;
    }
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

  .inputRight {
    text-align: right;
  }
</style>
