<template>
  <uni-popup ref="listPopup" type="center">
    <view class="list">
      <view class="title">请选择要连接的蓝牙</view>
      <scroll-view :scroll-y="true" class="content">
        <view class="buletooth" v-for="(item, index) of blueList" :key="index" @click="handleClick(item)">
          <view class="buletooth__name">{{ item.name }}</view>
          <view class="buletooth__address">{{ item.address }}</view>
        </view>
      </scroll-view>
    </view>
  </uni-popup>
</template>
<script>
export default {
  props: {
    blueList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    open() {
        this.$refs.listPopup.open()
    },
    handleClick(item) {
        this.$emit('bluetoothClick', item)
    }
  }
};
</script>
<style lang="less">
.list {
  width: 600rpx;
  background-color: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  .title {
    background-color: #519bda;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 34rpx;
    color: #fff;
  }
  .content {
    height: 500rpx;
    .buletooth {
      padding: 10rpx 20rpx;
      border-bottom: 1px solid #bbb;
      font-size: 32rpx;
      font-weight: 500;
    }
  }
}
</style>