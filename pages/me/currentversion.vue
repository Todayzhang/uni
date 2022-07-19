<template>
  <view class="container">
   {{$t('currentversion')}} V1.0.0
  </view>
</template>

<script>
  export default {
    data() {
      return {
        systemLocale: '',
        applicationLocale: ''
      }
    },
    onShow() {
       uni.setNavigationBarTitle({// 修改头部标题
           title: this.$i18n.messages[this.$i18n.locale].currentversion
       });
     },
    methods: {}
  }
</script>

<style></style>