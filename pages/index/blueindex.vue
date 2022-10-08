<template>
  <view>
    <view class="topBox">
      <view class="topTitle">
        <image class="imageTop" src="../../static/images/index-scan.png" mode="" @click="scan"></image>
        <view>{{address}}</view>
        <uni-badge size="normal" :text="3" absolute="rightTop" type="error">
          <image class="imageTop" src="../../static/images/index-xx.png" mode=""></image>
        </uni-badge>
      </view>
      <view class="bottomTime">
        <view class="topTime">
          <view><text class="bigFont">{{month}}</text>{{$t('month')}}<text class="bigFont">{{day}}</text>{{$t('day')}}
            {{week}}
          </view>
          <view class="time">
            {{time}}
          </view>
        </view>
        <view class="textShow">
       <!--   {{$t('index.topdesc')}} -->
        </view>
      </view>
    </view>

    <view class="centerBox">
      <view class="centerItem sb" @click="goTo('/pages/equipment/index')">
        <text class="centerText">{{$t('equipment')}}</text>
      </view>
      <view class="centerItem tz" @click="sendMsg()">
        <text class="centerText">{{$t('notice')}}</text>
      </view>
      <view class="centerItem jh">
        <text class="centerText">{{$t('plan')}}</text>
      </view>
    </view>

    <view class="uni-flex uni-column bottomBox">
      <view class="uni-flex uni-row bottomItem" @click="goTo('/pages/test/index')">
        <view class="text" style="width: 150rpx;">
          <image class="image myImage" mode="widthFix" src="../../static/images/index-sy.png" />
        </view>
        <view class="text bottomBoxLeft">
          <view class="bottomTitle">{{$t('experiment')}}</view>
          <view class="bottomDesc">Experiment</view>
        </view>
        <view class="text startTest">
          <text class="bottomDesc">{{$t('starttesting')}}</text>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>

      <view class="uni-flex uni-row bottomItem" @click="goTo('/pages/directresistance/parameterSetting')">
        <view class="text" style="width: 150rpx;">
          <image class="image myImage" mode="widthFix" src="../../static/images/index-zz.png" />
        </view>
        <view class="text bottomBoxLeft">
          <view class="bottomTitle">{{$t('directresistance')}}</view>
          <view class="bottomDesc">Direct resistance</view>
        </view>
        <view class="text startTest">
          <text class="bottomDesc">{{$t('starttesting')}}</text>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>

      <view class="uni-flex uni-row bottomItem" @click="goTo('/pages/switch/index')">
        <view class="text" style="width: 150rpx;">
          <image class="image myImage" mode="widthFix" src="../../static/images/index-kg.png" />
        </view>
        <view class="text bottomBoxLeft">
          <view class="bottomTitle">{{$t('switch')}}</view>
          <view class="bottomDesc">Circuit changer</view>
        </view>
        <view class="text startTest">
          <text class="bottomDesc">{{$t('starttesting')}}</text>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>

      <view class="uni-flex uni-row bottomItem" @click="goTo('/pages/loop/parameterSetting')">
        <view class="text" style="width: 150rpx;">
          <image class="image myImage" mode="widthFix" src="../../static/images/index-hl.png" />
        </view>
        <view class="text bottomBoxLeft">
          <view class="bottomTitle">{{$t('loop')}}</view>
          <view class="bottomDesc">Return circuit</view>
        </view>
        <view class="text startTest">
          <text class="bottomDesc">{{$t('starttesting')}}</text>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>

      <view class="uni-flex uni-row bottomItem lastOne" @click="goTo('/pages/dielectricloss/parameterSetting')">
        <view class="text" style="width: 150rpx;">
          <image class="image myImage" mode="widthFix" src="../../static/images/index-js.png" />
        </view>
        <view class="text bottomBoxLeft">
          <view class="bottomTitle">{{$t('dielectricloss')}}</view>
          <view class="bottomDesc">Dielectric loss</view>
        </view>
        <view class="text startTest">
          <text class="bottomDesc">{{$t('starttesting')}}</text>
          <span class="icon iconfont myIconEnd">&#xe687;</span>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  const btble = uni.requireNativePlugin('Common-BLE');
  export default {
    data() {
      return {
        title: 'Hello',
        month: '1',
        day: '1',
        week: '星期一',
        time: '00:00',
        address:'安徽省合肥市'
      }
    },
    onShow() {
      uni.setTabBarItem({
        index: 0,
        text: this.$i18n.messages[this.$i18n.locale].resTest
      });
      uni.setTabBarItem({
        index: 1,
        text: this.$i18n.messages[this.$i18n.locale].statistics
      });
      uni.setTabBarItem({
        index: 2,
        text: this.$i18n.messages[this.$i18n.locale].My
      });
    },
    onLoad() {
      // 创建定时器实时(什么时候销毁呢 ?待优化)
      this.timer = setInterval(() => {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        var day = date.getDate();
        day = day < 10 ? "0" + day : day;
        var week = date.getDay();
        switch (week) {
          case 1: {
            week = this.$t('monday');
            break;
          }
          case 2: {
            week = this.$t('tuesday');
            break;
          }
          case 3: {
            week = this.$t('wednesday');
            break;
          }
          case 4: {
            week = this.$t('thursday');
            break;
          }
          case 5: {
            week = this.$t('friday');
            break;
          }
          case 6: {
            week = this.$t('saturday');
            break;
          }
          case 0: {
            week = this.$t('sunday');
            break;
          }
        }
        var hour = date.getHours();
        hour = hour < 10 ? "0" + hour : hour;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + second : second;
        // var result = year + "." + month + "." + day + " " + week + " " + hour + ":" + minute + ":" + second;
        this.month = month
        this.day = day
        this.week = week
        this.time = hour + ":" + minute
      }, 1000)
      //this.getLocation()
    },
    methods: {
      sendMsg(){
        const ac = '11 04 11 a1 06'
        // console.log(this.$store)
       // console.log(this.$store.bluetooth.state.bluetooth.bleAddress)
        btble.writeNotResponse({
          "hex": false, //是否hex方式发送命令，默认false,字符串发送
          "btAddress": this.$store.state.bluetooth.bleAddress,
          "data": ac,
          "charset": "GBK"
        }, result => {
          //接收
          const content = JSON.stringify(result);
          console.info(content)
          // modal.toast({
          //   message: content,
          //   duration: 1.5
          // });
        });
      },
      // 扫一扫
      scan(){
        uni.scanCode({
        	success: function (res) {
            uni.showToast({
            				title: JSON.stringify(res.result),
            				duration:10000
            			});
            
            console.log(JSON.stringify(res))
        		 console.log('条码类型：' + res.scanType);
        		 console.log('条码内容：' + res.result);
        	}
        });
      },
      goTo(url) {
        uni.navigateTo({
          url
        })
      },
      getLocation() {
        console.log(`获取地址信息`)
        const that = this
        uni.getLocation({
          type: 'gcj02',
         geocode: true,
          success: function(res) {
            console.log("地址信息",res.address);
            that.address =res.address.city+res.address.district
            
          },
          fail: function() {
            uni.showToast({
              title: '获取地址失败，将导致部分功能不可用',
              icon: 'none'
            });
          }
        });
      },
      // 获取当前城市信息
      getNowCityInfo(lag) {
      	let qqmapsdk = new QQMapWX({
      		key: 'xxxxxxxxxxxxxxxxxxx'  //腾讯地图 - 申请开发者密钥（key）
      	});
      	qqmapsdk.reverseGeocoder({
      		location: {
      			longitude: lag.longitude,
      			latitude: lag.latitude	
      		},
      		success(res) {
      			conosle.log('当前位置信息',res)
      			if (res.status == 0 && res.message == "query ok") {
      				let city = res.result.address_component.city;
              console.log("城市信息",city)
      			}
      		}
      	})
      }
    }
  }
</script>

<style lang="less">
  .myIconEnd {
    color: #ccc;
  }

  .bottomBox {
    padding: 5px 10px 10px;
  }

  .bottomBoxLeft {
    -webkit-flex: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .startTest {
    // width: 150rpx;
    display: flex;
    align-items: center;
  }

  .topBox {
    padding: 55rpx 20rpx 0 20rpx;
    background-color: #519BDA;
    color: #fff;
    margin-bottom: 33rpx;

    .topTitle {
      height: 105rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32rpx;

      .imageTop {
        padding: 0 5px;
        height: 35rpx;
        width: 35rpx;

      }
    }

    .bottomTime {
      height: 148rpx;
      border-radius: 8rpx;
      margin-bottom: 25rpx;
      padding: 0 40rpx 28rpx 40rpx;
      background: url(../../static/images/index-topBg.jpg) no-repeat;
      background-size: 100% auto;

      .topTime {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .bigFont {
          font-size: 80rpx;
        }
      }

      // .textShow{
      //   padding:0 20rpx;
      // }
    }
  }

  .centerBox {
    height: 104rpx;
    margin: 30rpx 0;
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .centerText {
    color: #fff;
    font-size: 32rpx;
    margin-left: 65px;
    line-height: 55px;
  }

  .sb {
    background: url(../../static/images/index-sb.png) no-repeat;
  }

  .tz {
    background: url(../../static/images/index-tz.png) no-repeat;
  }

  .jh {
    background: url(../../static/images/index-jh.png) no-repeat;
  }

  .centerItem {
    height: 104rpx;
    width: 232rpx;
    border-radius: 6rpx;
    // border:1px solid red;
    background-size: 120% auto;
    background-position: -20rpx -14rpx;


  }


  .bottomItem {
    height: 130rpx;
    background-color: #fff;
    margin-bottom: 15rpx;
  }

  .myImage {
    width: 80rpx;
  }

  .bottomText {
    color: #000;
  }

  .bottomTitle {
    font-size: 32rpx;
    // line-height: 40px;
  }

  .bottomDesc {
    color: #ccc;
    // line-height: 6px;
  }

  .time {
    display: inline-block;
    height: 102rpx;
    width: 102rpx;
    background-image: url(../../static/images/index-time.png);
    background-size: 100% auto;
    line-height: 100rpx;
    text-align: center;
  }

  .lastOne {
    margin-bottom: 100rpx;
  }
</style>
