<template>
    <view class="button-sp-area">
        <button type="primary" plain="true" @click="hasPermission()">判断蓝牙权限</button>
        <!-- <button type="primary" plain="true" @click="isSupport()">是否支持蓝牙</button> -->
 <!--       <button type="primary" plain="true" @click="isOpen()">蓝牙是否打开</button> -->
        <button type="primary" plain="true" @click="openBT()">打开蓝牙</button>
        <!-- <button type="primary" plain="true" @click="closeBT()">关闭蓝牙</button> -->
        <button type="primary" plain="true" @click="listBT()">蓝牙设备列表</button>
        <!-- <button type="primary" plain="true" @click="findBT()">查找蓝牙设备</button> -->
        <!-- <button type="primary" plain="true" @click="pairBT()">蓝牙配对</button> -->
        <!-- <button type="primary" plain="true" @click="removeBond()">蓝牙取消配对</button> -->
        <!-- <button type="primary" plain="true" @click="listBondedBT()">已配对列表</button> -->
        <button type="primary" plain="true" @click="connectBT()">打开连接</button>
        <!-- <button type="primary" plain="true" @click="connectStatus()">连接状态</button> -->
        <button type="primary" plain="true" @click="sendMsg()">发送数据</button>
        <!-- <button type="primary" plain="true" @click="breakBT()">断开连接</button> -->
		<view class="list-wrap">
			<view class="list" v-for="(item, index) of list" :key="index">
				<view class="name">{{item.name}}:{{item.address}}</view>
				<button size="mini" @click="pairBT(item)">配对</button>
				<button size="mini" @click="connectBT(item)">连接</button>
			</view>
		</view>
    </view>
</template>
<script>
    //弹框
    const modal = uni.requireNativePlugin('modal');
    const bt = uni.requireNativePlugin('Common-BT');
    export default {
        data() {
            return {
                title: '',
				list: []
            }
        },
        onLoad() {

        },
        methods: {
            hasPermission() {
                bt.hasPermission(result => {
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
                bt.isSupport(result => {
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
                bt.isOpen(result => {
                    //result数据：{"status":true} 
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    console.log('蓝牙是否打开：' + result.status);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            openBT() {
                bt.openBT(result => {
                    //result数据：{"status":true} 
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    console.log('开启蓝牙是否成功：' + result.status);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            closeBT() {
                bt.closeBT(result => {
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
                bt.listBT(result => {
                    //result数据：{"msg":"搜索完成","list":[{"name":"蓝牙名称","address":"mac地址","status":"配对状态"}]} 
                    const msg = JSON.stringify(result);
					console.log(result)
					
                    // console.log(msg);
                    // console.log('蓝牙设备列表：' + result.list);
					// console.log(result.list.length)
					this.list = Array.from(JSON.parse(result.list))
					console.log(this.list)
                    // modal.toast({
                    //     message: msg,
                    //     duration: 1.5
                    // });
                });
            },
            pairBT(item) {
                bt.pairBT({
                    "btAddress": item.address //  88:10:8F:C9:33:C5
                }, result => {
                    //result数据：{"code":100,"msg":"配对完成，请刷新列表"} 
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    console.log('配对结果：' + result.msg);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            removeBond() {
                bt.removeBond({
                    "btAddress": "1C:52:16:40:55:BC"
                }, result => {
                    //result数据：{"code":100,"msg":"配对完成，请刷新列表"} 
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    console.log('取消结果：' + result.msg);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            listBondedBT() {
                bt.listBondedBT(result => {
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
                //04:D1:3A:C3:20:C5  
                bt.connectBT({
                    "btAddress": item.address
                }, result => {
                    //result数据：{"code":100,"msg":"连接成功"}，并接收数据
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            breakBT() {
                bt.breakBT(result => {
                    //result数据：{"code":100,"msg":"连接成功"}
                    const msg = JSON.stringify(result);
                    console.log(msg);
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            findBT() {
                bt.findBT({
                    "btAddress": "88:10:8F:C9:33:C5"
                }, result => {
                    //result数据：{"name":"蓝牙名称","address":"mac地址","status":"配对状态"}
                    const msg = JSON.stringify(result);
                    console.log(msg);               
                    modal.toast({
                        message: msg,
                        duration: 1.5
                    });
                });
            },
            sendMsg() {
                bt.sendMsg({
                    "cmd": "123"
                }, result => {
                    //接收
                    const content = JSON.stringify(result);
                    modal.toast({
                        message: content,
                        duration: 1.5
                    });
                });
            },
            connectStatus() {
                bt.connectStatus(result => {
                    //接收
                    const content = JSON.stringify(result);
                    modal.toast({
                        message: content,
                        duration: 1.5
                    });
                });
            },
            sendFile() {
                bt.sendFile({
                    "filePath": "文件绝对路径"
                }, result => {
                    //接收
                    const content = JSON.stringify(result);
                    modal.toast({
                        message: content,
                        duration: 1.5
                    });
                });
            },
        }
    }
</script>

<style lang="less">
    button {
        margin-top: 30upx;
        margin-bottom: 30upx;
    }

    .button-sp-area {
        margin: 0 auto;
        width: 100%;
    }

    .content {
        text-align: center;
        height: 400upx;
    }

    .wrapper {
        flex-direction: column;
        justify-content: center;
    }

    .button {
        width: 200px;
        margin-top: 30px;
        margin-left: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: #458B00;
        background-color: #458B00;
    }

    .text {
        font-size: 30px;
        color: #666666;
        text-align: center;
    }
	.list-wrap {
		display: flex;
		flex-direction: column;
		.list {
			/* display: flex; */
			/* flex-wrap: nowrap; */
		}
	}
</style>