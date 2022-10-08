// import { mapState } from 'vuex'
export  const bleBoole = {
  
   // computed: {
   //  // 使用对象展开运算符将 getter 混入 computed 对象中
   //    ...mapState('bluetooth',['bleAddress'])
   //  },
    data(){
      return {
        flag: false, //当前请求状态
        count: 3,//请求次数
        currSendMsg: '', //当前发送的消息
      }
    },
  methods:{
    sendMsgToDevice(sendValue,getMsg,sendcallback){
      console.log(`-----发送-------${sendValue}----------------`);
      this.currSendMsg = getMsg?getMsg:sendValue //存储当前发送的消息
      this.flag = true //请求中等待返回...
      this.count = 3 //循环3次
      if (this.flag) {
        this.$modal.toast({
          message: '发送中',
          duration: 0.5
        });
        this.sendToDevice(sendValue,()=>{
          clearInterval(this.timer)
        })
        this.timer = setInterval(() => {
          if (this.flag) {
            // 请求中
            if (this.count > 0) {
              // 重新请求机会＞0，继续请求
              this.count--
              //console.log(`----------发送请求----------`)
              this.$modal.toast({
                message: '发送中',
                duration: 1
              });
              this.sendToDevice(sendValue,()=>{
                clearInterval(this.timer)
              })
            } else {
              // 没有重新请求的机会了，清除定时器，提示错误信息
              clearInterval(this.timer)
              this.$modal.toast({
                message: '当前发送失败，请重新发送！',
                duration: 1.5
              });
            }
          } else {
            // 请求完毕，关闭定时器
            clearInterval(this.timer)
            this.$modal.toast({
              message: '发送成功！',
              duration: 1.5
            });
            if(sendcallback){
              sendcallback()
            }
            console.log('请求返回成功，不在请求')
          }
        }, 3000)
      }
    },
    //ble发送数据 
    sendToDevice(value,blecallback) {
      console.log('fasongzhong........')
      this.$btble.writeNotResponse({
        "hex": true, //是否hex方式发送命令，默认false,字符串发送
        "btAddress": this.$store.state.bluetooth.bleAddress,
        "data": value,
        "charset": "GBK"
      }, result => {
        //接收
        const content = JSON.stringify(result);
       // console.info(content)
        this.$modal.toast({
          message: result.msg,
          duration: 1.5
        });
        if(result.code === -200){
          if(blecallback){
            blecallback()
          }
        }
      });
    },
    //打开通知
    openNotify(callback2) {
     // console.log("@@@",this.$store.state.bluetooth.bleAddress)
      this.$btble.openNotify(result => {
        //接收
        const content = JSON.stringify(result);
        if(this.currSendMsg){
          if (result.data == this.currSendMsg) {
            this.flag = false
          }
          console.log('接收设备返回=>', content)
          
        }else{
          console.log('当前无信息发送=>', content)
          if(result.data && callback2){
            callback2 && callback2(result.data)
          }
        }   
        // this.$modal.toast({
        //   message: content,
        //   duration: 1.5
        // });
      });
    },
    //关闭通知
    closeNotify() {
      this.$btble.closeNotify({
        "btAddress": this.$store.state.bluetooth.bleAddress
      }, result => {
        //接收
        const content = JSON.stringify(result);
        console.log('关闭通知=>',content)
        // this.$modal.toast({
        //   message: content,
        //   duration: 1.5
        // });
      });
    },
    // 页面跳转
    goTo(url) {
      uni.navigateTo({
        url: url
      })
    },
    checkEnd(str) {
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
  }
}