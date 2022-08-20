// 经典蓝牙插件
const classicBluetooth = uni.requireNativePlugin("Common-BT");

// 打开蓝牙和定位
export function initBluetooth() {
  return new Promise((reslove, reject) => {
    let BluetoothAdapter, BAdapter;
    if (uni.getSystemInfoSync().platform === "android") {
      BluetoothAdapter = plus.android.importClass(
        "android.bluetooth.BluetoothAdapter"
      );
      BAdapter = BluetoothAdapter.getDefaultAdapter();
      if (!BAdapter.isEnabled()) {
        classicBluetooth.openBT((result) => {
          const msg = JSON.stringify(result);
          reslove(result);
        });
      }
    }
    reject();
  });
}

// 获取蓝牙列表，用经典蓝牙插件获取（插件可获取ble蓝牙）
export function getBluetoothList() {
  return new Promise((reslove, reject) => {
    classicBluetooth.listBT((result) => {
        // code: 0开始搜索；2搜索中；1搜索完成
        if(result.code === 1) {
            const list = Array.from(JSON.parse(result.list));
            reslove(list)
        }
    });
  });
}

/**
 * 蓝牙连接，先用ble方法连接蓝牙，连接成功则代表是ble设备，否则用经典蓝牙插件方法连接
 */
export function connectBluetooth() {
    

}

export function sendMessage() {}
