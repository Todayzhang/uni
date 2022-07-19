<template>
  <view>
        <button @click="open">1.是否开启蓝牙</button>
        <button @click="search">2.搜索蓝牙</button>
        <button @click="initBlue">3.连接蓝牙</button>
        <button @click="getInfo">4.获取蓝牙信息</button>
        <button @click="updateNotify">5.开启消息监听点击之后可以监听发送过来的数据</button>
        <button @click="stop">6.关闭蓝牙搜索</button>
        <button @click="disconnect">7.关闭蓝牙连接</button>
        <button @click="getBluetoothDevices">8.获取蓝牙信息</button>
        <button @click="writeBLECharacteristicValue">9.发送数据</button>
        <button @click="readBLECharacteristicValue">10.读取RFID数据</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      deviceId: "",
      message: null,
      messageHex: null,
      uuid: "",
      characteristics: "",
      readCode: "",
      readCodeMsg: "",
      renwu:'1',
    };
  },
  created() {},
  methods: {
    open() {
      uni.openBluetoothAdapter({
        success: function (res) {
          console.log("是否开启蓝牙",JSON.stringify(res));
        },
        fail: function (msg) {
          console.log('未开启蓝牙',msg);
          uni.showToast({
            title: '请打开蓝牙',
            type: 'error',
            icon: 'none'
          });
        },
      });
    },

    stop() {
      uni.stopBluetoothDevicesDiscovery({
        success(res) {
          console.log("停止搜索---", res);
        },
      });
    },
    search() {
      let that = this;
      uni.startBluetoothDevicesDiscovery({
        success: function (res) {
          console.log("搜索设备---", res);
          uni.onBluetoothDeviceFound(function (el) {
            console.log("new device list has founded");
            console.log(el);
            // console.log(that.ab2hex(el.devices[0].advertisData));
            //找到对应蓝牙设备名字

            if (el.devices[0].name == "xxxxxxx") {
              // if (el.devices[0].name == "zhaogpnov") {
              console.log("成功-------", el);
              //成功后存储设备id
              that.deviceId = el.devices[0].deviceId;
              that.stop(); //关闭搜索 第三步方法名
            }
          });
        },
      });
    },
    initBlue() {
      let that = this;
      uni.createBLEConnection({
        deviceId: this.deviceId,
        success: (res) => {
          console.log("连接成功---", JSON.stringify(res));
          //需延时连接，不然会报错
          setTimeout(function () {
            uni.getBLEDeviceServices({
              deviceId: that.deviceId,
              success: (res) => {
                console.log("获取蓝牙设备所有服务", res);
                // that.uuid = res.services[0].uuid;
                that.uuid = res.services[2].uuid;
                that.huoqu(); //第五步方法名
              },
            });
          }, 1000);
        },
        fail: function (msg) {
          console.log('里阿杰时',msg);
        }
      });
    },
    huoqu() {
      let that = this;
      let deviceId = this.deviceId;
      uni.getBLEDeviceCharacteristics({
        deviceId: that.deviceId,
        serviceId: that.uuid,
        success: (res) => {
          console.log(res);
          that.characteristics = res.characteristics[0].uuid;
          console.log("获取--------", res);
        },
        fail: (res) => {
          console.log("失败1--------", res);
        },
      });
    },
    getInfo() {
      let that = this;
      let deviceId = this.deviceId;
      uni.getBLEDeviceCharacteristics({
        deviceId: that.deviceId,
        serviceId: that.uuid,
        success: (res) => {
          that.characteristics = res.characteristics[0].uuid;
          console.log("获取--------", res);
        },
        fail: (res) => {
          console.log("失败1--------", res);
        },
      });
    },
    // 启用低功耗蓝牙设备特征值变化时的notify功能
    updateNotify() {
      uni.notifyBLECharacteristicValueChange({
        deviceId: this.deviceId,
        serviceId: this.uuid,
        characteristicId: this.characteristics,
        state: true,
        success: (res) => {
          console.log(res);
          if (res.errMsg == "notifyBLECharacteristicValueChange:ok") {
            console.log("开启消息监听------", res);
            // uni.hideLoading();
            // this.cut = false;
            // this.BLEValue();
            this.listenMessage();
          }
        },
        fail: (res) => {
          console.log("失败1--------", res);
        },
      });
    },
	// 将16进制的内容转成我们看得懂的字符串内容
	hexCharCodeToStr(hexCharCodeStr) {
	    var trimedStr = hexCharCodeStr.trim();
	    var rawStr = trimedStr.substr(0, 2).toLowerCase() === "0x" ? trimedStr.substr(2) : trimedStr;
	    var len = rawStr.length;
	    if (len % 2 !== 0) {
	            alert("存在非法字符!");
	            return "";
	    }
	    var curCharCode;
	    var resultStr = [];
	    for (var i = 0; i < len; i = i + 2) {
	            curCharCode = parseInt(rawStr.substr(i, 2), 16);
	            resultStr.push(String.fromCharCode(curCharCode));
	    }
	    return resultStr.join("");
	},
    //监听发送过来的消息
    listenMessage() {
		let that = this
      uni.onBLECharacteristicValueChange((res) => {
        console.log("发送过来的数据---------", res);
		        // 结果里有个value值，该值为 ArrayBuffer 类型，所以在控制台无法用肉眼观察到，必须将该值转换为16进制
		        let resHex = that.ab2hex(res.value)
		        console.log(resHex);
		        // 最后将16进制转换为ascii码，就能看到对应的结果
		        let result = that.hexCharCodeToStr(resHex)
		        console.log(result)
      })
    },
    disconnect() {
      let that = this;
      uni.closeBLEConnection({
        deviceId: that.deviceId,
        success: (res) => {
          console.log(res, "断开连接");
        },
      });
    },
    getBluetoothDevices() {
      console.log("获取蓝牙设备");
      uni.getBluetoothDevices({
        success: (res) => {
          console.log("获取蓝牙设备成功:" + res);
          this.bluetooth = res.devices;
          this.bluetooth.forEach((item) => {
            this.isLink.push(0);
          });
        },
      });
    },
    // ascll转换
    strtoascii(str, fix = "&#") {
      if (str.length < 1) {
        return false;
      }
      var arr = str.split("");
      var txt = "";
      arr.forEach(function (v, i) {
        txt += fix + v.charCodeAt();
        txt = Number(txt);
      });
      return txt;
    },

    // 二进制转换
    strToBinary(str) {
      var result = [];

      var list = str.split("");
     console.log(list)
      for (var i = 0; i < list.length; i++) {
        if (i != 0) {
          // result.push("");
        }

        var item = list[i];

        var binaryStr = item.charCodeAt().toString(2);

        result.push(binaryStr);
      }

      return result;
    },
    // 发送二进制数据
    writeBLECharacteristicValue() {
      let that = this;
	  let msg = '>y t s 1 \r'
	  // 向蓝牙设备发送一个0x00的16进制数据
	  const buffer = new ArrayBuffer(msg.length)
	  const dataView = new DataView(buffer)
	  // dataView.setUint8(0, 0)
	  for (var i = 0; i < msg.length; i++) {
		  
	        dataView.setUint8(i, msg.charAt(i).charCodeAt())
	      }
      uni.writeBLECharacteristicValue({
        // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
        deviceId: that.deviceId,
        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
        serviceId: that.uuid,
        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
        characteristicId: that.characteristics,
        // 这里的value是ArrayBuffer类型
        // value: buffer,
        value: buffer,
		writeType:'writeNoResponse',
        success: (res) => {
          that.returnMessage = res.errMsg;
          console.log("发送成功-----", res);
        },
        fail: (res) => {
          that.returnMessage = res.errMsg;
          console.log("发送失败-----", res);
        },
			
		complete:(res)=>{
			console.log("发送消息结束----",res)
		}
      });
    },
	// ArrayBuffer转16进度字符串示例
	ab2hex(buffer) {
	  const hexArr = Array.prototype.map.call(
	    new Uint8Array(buffer),
	    function (bit) {
	      return ('00' + bit.toString(16)).slice(-2)
	    }
	  )
	  return hexArr.join('')
	},
	//获取buffer
    getBuffer(str) {
      if (!str) {
        return new ArrayBuffer(str.length);
      }
      let buffer = new ArrayBuffer(str.length);
      let dataView = new DataView(buffer);
      let ind = 0;
      for (var i = 0, len = str.length; i < len; i += 2) {
        let code = parseInt(str.substr(i, 2), 16);
        dataView.setUint8(ind, code);
        ind++;
      }
      return buffer;
    },
    // 读取设备二进制数据
    readBLECharacteristicValue() {
      // console.log('进入读取');
      // setTimeout(()=>{
      uni.readBLECharacteristicValue({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: this.deviceId,
        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
        serviceId: this.uuid,
        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
        characteristicId: this.characteristics,
        success: (res) => {
          console.log("读取成功:", res);
        },
        fail: (res) => {
          console.log("读取失败:", res);
        },
      });
    },
  },
};
</script>


<style>
</style>
