<template>
  <view class="">
    <navigator url="/pages/about/about"><button type="default">通过navigator组件跳转到about页面</button></navigator>
    <button type="default" @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
  </view>
</template>

<script>
  export default {
    methods: {
      goto(url) {
        uni.navigateTo({
          url: url
        })
      }
    }
  }
</script>

<style>
</style>
