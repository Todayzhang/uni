<template>
	<view class="uni-flex uni-column">
		<view class="bottomBox">
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<!-- 当前电压 -->
						{{$t('currentvoltage')}}(V)
					</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" type="number" @input="replaceInputVoltage"
							v-model.number="currentvoltage" placeholder="输出电压(V)" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">{{$t('adjustingstartvoltage')}}</view>
					<view class="btns">
						<button style="margin-right: 10rpx;" class="mini-btn" type="primary" size="mini">合闸</button>
						<button class="mini-btn" type="primary" size="mini">分闸</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'manual',
		data() {
			return {
				currentvoltage: 220
			}
		},
		methods: {
			replaceInputVoltage() {

			}
		}
	}
</script>
<style lang="less">
	.bottomBox {
		display: flex;
		flex-direction: column;
		padding-left: 25rpx;
		background-color: #FFFFFF;
		margin-top: 10rpx;

		.bottomItem {
			display: flex;
			justify-content: space-between;
			
			.inputRight {
			  text-align: right;
			}
			
			.btns {
				display: flex;
				padding: 10rpx 0;
			}
		}
	}
</style>
