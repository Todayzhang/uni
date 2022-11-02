export default {
  install(Vue) {
    //2个字节
    Vue.prototype.$changeTosixty=(num)=> {
      let sixtyNum = Number(num).toString(16)
      if (String(sixtyNum).length == 1) {
        sixtyNum = '0' + sixtyNum
      }
      return sixtyNum
    },
    //需要4个字节
    Vue.prototype.$largechangeTosixty=(num)=> {
      let sixtyNum = Number(num).toString(16)
      const length = String(sixtyNum).length
      if ( length == 1) {
        sixtyNum = '000' + sixtyNum
      } else if(length==2){
        sixtyNum = '00' + sixtyNum
      } else if(length == 3){
        sixtyNum = '0' + sixtyNum
      }
      return sixtyNum
    },
    Vue.prototype.$checkEnd=(str)=> {
      //str = str.replace(/\s*/g,"")
      str = str.split('6aa6')
      if(str.length>1){
        str = str[1]
      }else{
        str = str[0]
      }
      console.log('计算校验str=》',str)
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
    
    Vue.prototype.$checkEndhl=(str)=> {
      //str = str.replace(/\s*/g,"")
      str = str.slice(6)
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
  }
}
