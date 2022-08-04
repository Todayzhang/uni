<template>
  <view class="button-sp-area">
    <button type="primary" plain="true" @click="hasPermission()">判断蓝牙权限</button>
    <button type="primary" plain="true" @click="isSupport()">是否支持蓝牙</button>
    <!-- <button type="primary" plain="true" @click="isOpen()">蓝牙是否打开</button> -->
    <button type="primary" plain="true" @click="openBT()">打开蓝牙</button>
    <button type="primary" plain="true" @click="closeBT()">关闭蓝牙</button>
    <button type="primary" plain="true" @click="isOpen()">蓝牙设备列表</button>
    <button type="primary" plain="true" @click="listBondedBT()">已配对列表</button>
    <button type="primary" plain="true" @click="connectBT()">打开连接</button>
    <button type="primary" plain="true" @click="connectStatus()">连接状态</button>
    <button type="primary" plain="true" @click="searchRule()">设置搜索规则</button>
    <button type="primary" plain="true" @click="readRssi()">获取信号强度</button>
    <button type="primary" plain="true" @click="setMtu()">设置传输元大小</button>
    <button type="primary" plain="true" @click="read()">读</button>
    <button type="primary" plain="true" @click="writeResponse()">写,有响应</button>
    <button type="primary" plain="true" @click="writeNotResponse()">写,无响应</button>
<!--    <button type="primary" plain="true" @click="openNotify()">打开Notify通知</button>
    <button type="primary" plain="true" @click="closeNotify()">关闭Notify通知</button>
    <button type="primary" plain="true" @click="openIndicate()">打开Indicate通知</button>
    <button type="primary" plain="true" @click="closeIndicate()">关闭Indicate通知</button> -->
    <button type="primary" plain="true" @click="breakBT()()">断开连接</button>
    <view class="list-wrap">
    	<view class="list" v-for="(item, index) of bleList" :key="index">
    		<view class="name">{{item.name}}:{{item.address}}&nbsp;{{item.status}}</view>
    		<!-- <button size="mini" @click="pairBT(item)">配对</button> -->
    		<button size="mini" @click="connectBT(item)">连接</button>
    	</view>
    </view>
  </view>
</template>

<script>
  const modal = uni.requireNativePlugin('modal');
  const btble = uni.requireNativePlugin('Common-BLE');
  var data =
    "! 0 200 200 1060 1\r\n" +
    "SETMAG 2 2\r\n" +
    "TEXT 8 0 380 8 快递包裹\r\n" +
    // 反转变黑
    "SETMAG 2 2\r\n" +
    "TEXT 8 0 20 670 寄\r\n" +
    "SETMAG 1 1\r\n" +
    "TEXT 8 0 20 730 白小递\r\n" +
    "TEXT 8 0 20 760 138 0013 8000\r\n" +
    "LINE 250 650 250 830 2\r\n" +
    "LINE 405 680 405 830 2\r\n" +
    "LINE 1 830 580 830 2\r\n" +
    // 二维码
    "BARCODE QR 255 675 M 2 U 7\r\n" +
    "MA,1106745891514\r\n" +
    "ENDQR\r\n" +
    "LINE 405 740 580 740 2\r\n" +
    "SETMAG 1 1\r\n" +
    "TEXT 8 0 415 660 已验视\r\n" +
    "TEXT 8 0 415 750 签字栏\r\n" +
    "TEXT 8 0 10 840 文件一件\r\n" +
    "TEXT 8 0 470 930 已验视\r\n" +
    "PRINT\r\n";
  export default {
    data() {
      return {
        title: '',
        bleList:[]
      }
    },
    onLoad() {},
    methods: {
      hasPermission() {
        btble.hasPermission(result => {
          //result数据：{"status":true} 如果没有权限程序会自动申请权限
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('蓝牙权限：' + result.status);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      isSupport() {
        btble.isSupport(result => {
          //result数据：{"status":true}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('是否支持蓝牙：' + result.status);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      isOpen() {
        btble.isOpen(result => {
          //result数据：{"status":true}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('蓝牙是否打开：' + result.status);
          modal.toast({
            message: msg,
            duration: 1.5
          });
          console.log(result.status);
          if(!result.status){
            this.openBT();
          }else{
            this.listBT();
          }
        });
      },
      openBT() {
        btble.openBT(result => {
          //result数据：{"status":true}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('开启蓝牙是否成功：' + result.status);
          modal.toast({
            message: msg,
            duration: 1.5
          });
          if(!result.status){
            this.openBT();
          }else{
            this.listBT();
          }
        });
      },
      closeBT() {
        btble.closeBT(result => {
          //result数据：{"status":true}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('蓝牙是否关闭：' + result.status);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      listBT() {   
        modal.toast({
          message: '正在搜索，请耐心等',
          duration: 1.5
        });
        this.bleList = []
        btble.listBT(result => {
          //result数据：{"msg":"搜索完成","list":[{"name":"蓝牙名称","address":"mac地址","status":"配对状态"}]}
          const msg = JSON.stringify(result); 
          //console.log(result);
          console.log('蓝牙设备列表：' + result.list);
          this.bleList = Array.from(JSON.parse(result.list))
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      listBondedBT() {
        btble.listBondedBT(result => {
          //result数据：{"msg":"搜索完成","list":[{"name":"蓝牙名称","address":"mac地址","status":"配对状态"}]}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('已配对列表：' + result.list);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      connectBT(item) {
        console.log('连接'+item);
        btble.connectBT({
          "btAddress": item.address
        }, result => {
          //result数据：{"code":100,"msg":"连接成功"}，并接收数据
          //if(result.code ==100){
            this.btAddress = item.address
          //}
          const msg = JSON.stringify(result);
          console.log(msg);
          console.log('连接蓝牙：' + msg);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      breakBT() {
        btble.breakBT({
          "btAddress": this.btAddress
        }, result => {
          //result数据：{"code":100,"msg":"连接成功"}
          const msg = JSON.stringify(result);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      connectStatus() {
        btble.connectStatus({
          "btAddress": this.btAddress
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      read() {
        btble.read({
          "btAddress": this.btAddress
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      writeResponse() {
        btble.writeResponse({
          "hex": false, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.btAddress,
          "data": data,
          "charset": "GBK"
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      writeNotResponse() {
        btble.writeNotResponse({
          "hex": false, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.btAddress,
          "data": data,
          "charset": "GBK"
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
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
      closeNotify() {
        btble.closeNotify({
          "btAddress": this.btAddress
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      openIndicate() {
        btble.openIndicate(result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      closeIndicate() {
        btble.closeIndicate({
          "btAddress": this.btAddress
        }, result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
        });
      },
      searchRule() {
        btble.searchRule({
          "uuidList": [], //["1", "2"]
          "nameList": [], //["a", "b"]
          "mac": "",
          "isAutoConnect": false
        }, result => {
          //result数据：{"code":100,"msg":"连接成功"}
          const msg = JSON.stringify(result);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
      readRssi() {
        btble.readRssi({
            "btAddress": this.btAddress
          },
          result => {
            //result数据：{"code":100,"msg":"连接成功"}
            const msg = JSON.stringify(result);
            modal.toast({
              message: msg,
              duration: 1.5
            });
          });
      },
      setMtu() {
        btble.setMtu({
          "btAddress": this.btAddress,
          "mtu": 100
        }, result => {
          //result数据：{"code":100,"msg":"连接成功"}
          const msg = JSON.stringify(result);
          modal.toast({
            message: msg,
            duration: 1.5
          });
        });
      },
    }
  }
</script>
