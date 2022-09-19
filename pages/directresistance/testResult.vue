<template>
  <!-- 回路-{{$t('resTest')}}结果 -->
  <view>
    <view class="uni-flex uni-column">

      <view class="resItem">
        <view class="myImage res1">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('data')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">{{testResult}}</text>
            <text class="numDesc">{{$t('company')}}：Ω</text>
          </view>
        </view>
      </view>

      <view class="resItem">
        <view class="myImage res2">
          <text class="resTextLeft">{{$t('conversion')}}</text>
          <text class="resTextLeft">{{$t('data')}}</text>
        </view>
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">{{convertedResult}}</text>
            <text class="numDesc">{{$t('company')}}：Ω</text>
          </view>
        </view>
      </view>

      <view class="resItem">
        <view class="myImage res1">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('serialnumber')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">4</text>
          </view>
        </view>
      </view>

      <view class="resItem">
        <view class="myImage res2">
          <text class="resTextLeft">{{$t('tapping')}}</text>
          <text class="resTextLeft">{{$t('position')}}</text>
        </view>
        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">{{fjwz}}</text>
          </view>
        </view>
      </view>


      <view class="resItem">
        <view class="myImage res3">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('electriccurrent')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">{{csdl}}</text>
            <text class="numDesc">{{$t('company')}}：A</text>
          </view>
        </view>
      </view>


      <view class="resItem">
        <view class="myImage res4">
          <text class="resTextLeft">{{$t('resTest')}}</text>
          <text class="resTextLeft">{{$t('phasedifference')}}</text>
        </view>

        <view class="resRightBox">
          <view class="rightTextItem">
            <text class="numText">{{csxb}}</text>
          </view>
        </view>
      </view>

      <!-- 底部按钮 -->
      <!-- <view class="fixedBox"> -->
      <view class="btmBtnBox">
        <view class="bottomBtn left">{{$t('retest')}}</view>
        <view class="bottomBtn center">{{$t('datalocking')}}</view>
        <view class="bottomBtn right">{{$t('resultstorage')}}</view>
      </view>
      <!-- </view> -->


    </view>
    <view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        testResult:'0.1225m',
        convertedResult:'0.1225m',
        csdl: "",
        csxb: "",
        fjwz: ""
      }
    },
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].testres
       });
     },
     onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
            const item = JSON.parse(decodeURIComponent(option.item))
            this.csdl =  item.csdl
            this.csxb = item.csxb
            this.fjwz = item.fjwz
            console.log(item);
     },
    methods: {
      
      //将16进制转为 字符串
      hexToString(str){
      　　var val="",len = str.length/2;
      　　for(var i = 0; i < len; i++){
      　　　　val += String.fromCharCode(parseInt(str.substr(i*2,2),16));
      　　}
      	//console.log(val,'16进制转字符串')
      	this.utf8to16(val);
      },
      //处理中文乱码问题
      utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while(i < len) {
       	c = str.charCodeAt(i++);
       	switch(c >> 4){ 
         		case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
      	 		out += str.charAt(i-1);
      	 	break;
         		case 12: case 13:
      	 		char2 = str.charCodeAt(i++);
      	 		out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
      	 	break;
         		case 14:
      	 		char2 = str.charCodeAt(i++);
      	 		char3 = str.charCodeAt(i++);
      	 		out += String.fromCharCode(((c & 0x0F) << 12) |
      			((char2 & 0x3F) << 6) |
      			((char3 & 0x3F) << 0));
      	 	break;
        	}
        }
      
      	console.log(out,'out')
      	return out;
      }

    }
  }
</script>

<style scoped>
  .fixedBox {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .btmLeftText {
    color: #333333;
  }

  .btmRightText {
    color: #ccc;
  }

  .btmResItem {
    padding: 20rpx 60rpx;
    margin-bottom: 1px solid #ccc;
    background-color: #FFFFFF;
  }

  .btmResItem {
    display: flex;
    justify-content: space-between;
  }

  .numDesc {
    color: #CCCCCC;
  }

  .numText {
    color: #529bda;
    font-size: 50rpx;
  }

  .rightTextItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline
  }

  .resRightBox {
    flex: 1;
    padding-right: 30rpx;
  }

  .resTextLeft {
    color: #FFFFFF;
    font-size: 40rpx;
    line-height: 45rpx;
  }

  .res1 {
    background: url(../../static/images/res-blue.png) no-repeat;
    background-size: 100% auto;
  }

  .res2 {
    background: url(../../static/images/res-green.png) no-repeat;
    background-size: 100% auto;
  }

  .res3 {
    background: url(../../static/images/res-yellow.png) no-repeat;
    background-size: 100% auto;
  }

  .res4 {
    background: url(../../static/images/res-4.png) no-repeat;
    background-size: 100% auto;
  }

  .resItem {
    background-color: #FFFFFF;
    padding: 10rpx;
    display: flex;
    align-items: center;
    margin: 10rpx 0;
  }

  .myImage {
    width: 150rpx;
    height: 150rpx;
    margin: 20rpx 50rpx;
    /* text-align: center;
    line-height: 200rpx; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btmBtnBox {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;

  }

  .left {
    background: url(../../static/images/btn-small-blue.png) no-repeat;
  }

  .center {
    background: url(../../static/images/btn-small-yellow.png) no-repeat;
  }

  .right {
    background: url(../../static/images/btn-small-green.png) no-repeat;
  }

  .bottomBtn {
    height: 100rpx;
    width: 300rpx;
    background-size: 100% auto;
    text-align: center;
    line-height: 80rpx;
    color: #FFF;
    margin: 0 15rpx;
  }
</style>
