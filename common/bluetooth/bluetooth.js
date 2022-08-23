// 经典蓝牙插件
const classicBluetooth = uni.requireNativePlugin("Common-BT");

export function sendMessage() { }

export class Bluetooth {
  name = ''
  debiceId = ''
  // 当前ble蓝牙连接的特征值
  characteristicId = null
  // 当前ble蓝牙serviceId
  serviceId = null

  // 是否是ble蓝牙
  isBle = true
  // 接收函数的回调
  receiveFun = (res) => { }

  // 设置蓝牙接收函数，在每个接收蓝牙消息的地方设置
  setReceiveFun(fun) {
    this.receiveFun = fun
  }

  // 打开蓝牙
  initBluetooth() {
    return new Promise((resolve, reject) => {
      let BluetoothAdapter, BAdapter;
      if (uni.getSystemInfoSync().platform === "android") {
        BluetoothAdapter = plus.android.importClass(
          "android.bluetooth.BluetoothAdapter"
        );
        BAdapter = BluetoothAdapter.getDefaultAdapter();
        if (!BAdapter.isEnabled()) {
          classicBluetooth.openBT((result) => {
            console.log(result);
            const msg = JSON.stringify(result);
            reslove(result);
          });
        } else {
          reslove({ status: true });
        }
      }
      //reject();
    });
  }

  // 获取蓝牙列表
  getBluetoothList(fun) {
    classicBluetooth.listBT(fun);
  }

  //获取蓝牙的所有服务
  getBLEDeviceServices() {
    setTimeout(() => {
      uni.getBLEDeviceServices({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: this.deviceId,
        success: (res) => {
          console.log('device services:', res)
          res.services.forEach((item) => {
            console.log('当前serviceId===>', item.uuid);
            if (item.isPrimary) {
              //获取特征
              this.getBLEDeviceCharacteristics(item.uuid)
            }
          })
        }
      })
    }, 1000)
  }

  //获取蓝牙特征
  getBLEDeviceCharacteristics(serviceId) {
    console.log("进入特征");
    setTimeout(() => {
      uni.getBLEDeviceCharacteristics({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: this.deviceId,
        serviceId: serviceId,
        success: (res) => {
          // this.characteristics = res.characteristics
          // console.log(this.characteristics)
          res.characteristics.forEach((item) => {
            //有写的功能时赋值
            if (item.properties.write) {
              this.serviceId = serviceId;
              this.characteristicId = item.uuid;
            }
            if (item.properties.notify || item.properties.indicate) {
              //启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。
              this.notifyBLECharacteristicValueChange(item.uuid)
            }
          })
        },
        fail: (res) => {
          console.log(res)
        }
      })

      function inArray(arr, key, val) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][key] === val) {
            return i;
          }
        }
        return -1;
      }
      // ArrayBuffer转16进度字符串示例
      function ab2hex(buffer) {
        const hexArr = Array.prototype.map.call(
          new Uint8Array(buffer),
          function (bit) {
            return ('00' + bit.toString(16)).slice(-2)
          }
        )
        return hexArr.join('');
      }
      const chs = []
      //监听数据
      // 操作之前先监听，保证第一时间获取数据
      uni.onBLECharacteristicValueChange((characteristic) => {
        const idx = inArray(chs, 'uuid', characteristic.characteristicId)
        const data = {}
        if (idx === -1) {
          data[`chs[${chs.length}]`] = {
            uuid: characteristic.characteristicId,
            value: ab2hex(characteristic.value)
          }
        } else {
          data[`chs[${idx}]`] = {
            uuid: characteristic.characteristicId,
            value: ab2hex(characteristic.value)
          }
        }
        console.log(data);
      })
    }, 1000)
  }

  // 启用 notify 功能
  notifyBLECharacteristicValueChange(characteristicId) {
    console.log(characteristicId, 'characteristicId')
    uni.notifyBLECharacteristicValueChange({
      state: true, // 启用 notify 功能
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
      deviceId: this.deviceId,
      // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
      serviceId: this.serviceId,
      // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
      characteristicId: characteristicId,
      success: this.receiveFun,
      fail: (res) => {
        console.log('notifyBLECharacteristicValueChange fail', res.errMsg)
      }
    })
  }

  // 先用ble蓝牙方法连接，否则用经理蓝牙插件方法连接
  connectBluetooth(name, deviceId) {
    this.name = name
    this.debiceId = deviceId
    return new Promise((reslove, reject) => {
      uni.createBLEConnection({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        success: (res) => {
          this.isBle = true
          console.log("蓝牙连接成功")
          this.getBLEDeviceServices()
          reslove(res)
        },
        fail: (res) => {
          if (res.errCode == '-1') {
            console.log('蓝牙已连接，请勿重复连接')
          } else {
            // 使用经典蓝牙连接
            // 配对
            classicBluetooth.pairBT({
              "btAddress": deviceId //  88:10:8F:C9:33:C5
            }, result => {
              //result数据：{"code":100,"msg":"配对完成，请刷新列表"} code: 2表示配对中；200表示配对成功；-200表示配对未成功，可能设备地址错误或者未同意配对
              const msg = JSON.stringify(result);
              if (msg.code === '200') {
                // 配对成功，连接蓝牙
                /**
                 * 说明：此连接方法为长连接，连接成功后，如果蓝牙断开也会回调该方法。连接成功后，自动接收数据。code: 200表示连接成功；-200表示连接异常;-300与设备断开
                 */
                classicBluetooth.connectBT({
                  "btAddress": deviceId
                }, result => {
                  //result数据：{"code":100,"msg":"连接成功"}，并接收数据
                  const msg = JSON.stringify(result);
                  this.isBle = false
                  this.receiveFun(msg)
                  reslove(msg)
                });
              }
              if (msg.code === '-200') {
                reject()
              }
            });
          }
        }
      })
    })
  }
}
