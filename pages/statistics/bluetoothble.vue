<template>
  <view class="button-sp-area">
    <!-- <button type="primary" plain="true" @click="hasPermission()">判断蓝牙权限</button>
    <button type="primary" plain="true" @click="isSupport()">是否支持蓝牙</button> -->
    <!-- <button type="primary" plain="true" @click="isOpen()">蓝牙是否打开</button> -->
    <!-- <button type="primary" plain="true" @click="openBT()">打开蓝牙</button>
    <button type="primary" plain="true" @click="closeBT()">关闭蓝牙</button> -->
    <button type="primary" plain="true" @click="isOpen()">蓝牙设备列表</button>
    <!-- <equip-info :list="bleList"></equip-info> -->
    <view class="list-wrap">
      <view class="list" v-for="(item, index) of bleList" :key="index">
        <view class="name" v-show="item.name">{{item.name}}</view>
        <!-- <button size="mini" @click="pairBT(item)">配对</button> -->
        <button size="mini" v-if="item.name&&!item.connect" @click="connectBT(item,index)">连接</button>
        <button size="mini" style="color: green;" v-if="item.name&&item.connect">已连接</button>
      </view>
    </view>
    <!--   <button type="primary" plain="true" @click="listBondedBT()">已配对列表</button>
    <button type="primary" plain="true" @click="connectBT()">打开连接</button>
    <button type="primary" plain="true" @click="connectStatus()">连接状态</button>
    <button type="primary" plain="true" @click="searchRule()">设置搜索规则</button>
    <button type="primary" plain="true" @click="readRssi()">获取信号强度</button>
    <button type="primary" plain="true" @click="setMtu()">设置传输元大小</button>
    <button type="primary" plain="true" @click="read()">读</button> -->
  <!--  <view style="margin-top: 2em;">
      当前传输的数据为：
    </view>
    <input type="text" v-model="blueData" placeholder="请输入要传递的值" />
    <button size="mini" plain="true" @click="blueData='5a a5 06 83 10 34 01 00 02'">切换2</button>
    <button size="mini" plain="true" @click="blueData='6A A6 05 01 A1 00 A7'">返回</button>
    <button type="primary" plain="true" @click="writeResponse()">写,有响应</button>
    <button type="primary" plain="true" @click="writeNotResponse()">写,无响应</button>
    <button type="primary" plain="true" @click="writeResponse2()">写,有响应2</button>
    <button type="primary" plain="true" @click="writeNotResponse2()">写,无响应2</button>
    <button type="primary" plain="true" @click="openNotify()">打开Notify通知</button> -->


    <!--   <button type="primary" plain="true" @click="closeNotify()">关闭Notify通知</button>
    <button type="primary" plain="true" @click="openIndicate()">打开Indicate通知</button>
    <button type="primary" plain="true" @click="closeIndicate()">关闭Indicate通知</button> 
    <button type="primary" plain="true" @click="breakBT()()">断开连接</button>  -->

  </view>
</template>

<script>
  const modal = uni.requireNativePlugin('modal');
  const btble = uni.requireNativePlugin('Common-BLE');
  // import EquipInfo from '../public/EquipInfo.vue'
  const data = '6A A6 05 01 A1 00 A7'
  export default {
    data() {
      return {
        title: '',
        bleList: [],
        blueData: '6A A6 05 01 A1 00 A7'
      }
    },
    onLoad() {},
    onShow() {
      //this.openNotify()
    },
    onHide() {
      this.closeNotify()
    },
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
          if (!result.status) {
            this.openBT();
          } else {
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
          if (!result.status) {
            this.openBT();
          } else {
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
          message: '搜索中...',
          duration: 1.5
        });
        this.bleList = []
        btble.listBT(result => {
          //result数据：{"msg":"搜索完成","list":[{"name":"蓝牙名称","address":"mac地址","status":"配对状态"}]}
          const msg = JSON.stringify(result);
          console.log('搜索蓝牙设备：' + msg);
          this.bleList = Array.from(JSON.parse(result.list))
          this.bleList.forEach((value, index) => {
            this.$set(this.bleList[index], "connect", false);
            //  this.bleList.push(bleList[index])
          });
          //if(msg.msg == '搜索完成'){
          modal.toast({
            message: result.msg,
            duration: 1.5
          });
          //}

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
      connectBT(item, index) {
        //console.log('连接'+item);
        btble.connectBT({
          "btAddress": item.address
        }, result => {
          const msg = JSON.stringify(result);
          console.log('连接蓝牙：' + msg);
          this.btAddress = item.address
          this.$store.commit('updateCount', item.address)
          for (let i = 0; i < this.bleList.length; i++) {
            if (i == index) {
              this.$set(this.bleList[i], "connect", true)
            } else {
              this.$set(this.bleList[i], "connect", false)
            }
          }
          modal.toast({
            message: result,
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
          "data": this.blueData,
          "charset": "GBK"
        }, result => {
          //接收
          const content = 'writeResponse=>' + JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
          //  this.openNotify()
        });
      },
      writeResponse2() {
        // let msg = '>y t s 1 \r'
        // // 向蓝牙设备发送一个0x00的16进制数据
        // const buffer = new ArrayBuffer(msg.length)
        // const dataView = new DataView(buffer)
        btble.writeResponse({
          "hex": true, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.btAddress,
          "data": this.blueData,
          "charset": "GBK"
        }, result => {
          //接收
          const content = 'writeResponse2=>' + JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
          //  this.openNotify()
        });
      },
      writeNotResponse() {
        btble.writeNotResponse({
          "hex": false, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.btAddress,
          "data": this.blueData,
          "charset": "GBK"
        }, result => {
          //接收
          const content = 'writeNotResponse=>' + JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 1.5
          });
          //  this.openNotify()
        });
      },
      writeNotResponse2() {
        //console.log('data=>',data)
        //let msg = '30018887963705376'
        // const buffer = new ArrayBuffer(msg.length);
        // const dataView = new DataView(buffer);
        btble.writeNotResponse({
          "hex": true, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.btAddress,
          "data": this.blueData,
          "charset": "GBK"
        }, result => {
          //接收
          const content = 'writeNotResponse2=>' + JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 3
          });
          //  this.openNotify()
        });
      },
      openNotify() {
        btble.openNotify(result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 3
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
            duration: 3
          });
        });
      },
      openIndicate() {
        btble.openIndicate(result => {
          //接收
          const content = JSON.stringify(result);
          modal.toast({
            message: content,
            duration: 3
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
<style lang="less" scoped>
  .list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rpx;

    .name {
      width: 400rpx;
    }
  }
</style>
