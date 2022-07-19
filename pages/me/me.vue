<template>
  <view class="container">
    <view class="uni-flex uni-row item" @click="goTo('/pages/me/light')">
      <view>
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-light.png" />
        <text>{{$t('brightnessadjustment')}}</text>
      </view>
      <span class="icon iconfont myIconEnd">&#xe687;</span>
    </view>
    
    <view class="uni-flex uni-row item"  @click="goTo('/pages/me/languagesettings')">
      <view>
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-lan.png" />
        <text>{{$t('languagesettings')}}</text>
      </view>
       <span class="icon iconfont myIconEnd">&#xe687;</span>
    </view>
    
    <view class="uni-flex uni-row item" @click="goTo('/pages/me/currentversion')">
      <view>
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-softv.png" />
        <text>{{$t('softwareversion')}}</text>
      </view>
       <span class="icon iconfont myIconEnd">&#xe687;</span>
    </view>
    
    
    <view class="uni-flex uni-row item">
      <view>
        <image class="image myImage" mode="widthFix"  src="../../static/images/me-about.png" />
        <text>{{$t('aboutus')}}</text>
      </view>
       <span class="icon iconfont myIconEnd">&#xe687;</span>
    </view>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed:{},
    onLoad() {},
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].my
       });
     },
    methods: {
      goTo(url){
        uni.navigateTo({url})
      }
    }
  }
</script>

<style>
  .item{
    height: 30px;
    background-color: #fff;
    padding: 10px;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-bottom: 0.5px solid rgb(248 248 248);
  }
  .myIcon{
    /* font-size: 20px; */
    margin-right: 10px;
  }
  .myIconEnd{
    margin-right: 5px;
    color: #ccc;
  }
  .myImage{
    width: 15px;
    vertical-align:middle;
    margin-right: 10px;
  }
</style>
