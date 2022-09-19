/**十进制转16进制*/
export function changeTosixty(num) {
  let sixtyNum = Number(num).toString(16)
  if (String(sixtyNum).length == 1) {
    sixtyNum = '0' + sixtyNum
  }
  return sixtyNum
}

/**获取检验位的值*/
export function checkEnd(str) {
  //str = str.replace(/\s*/g,"")
  str = str.split('6aa6')[1]
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
}
