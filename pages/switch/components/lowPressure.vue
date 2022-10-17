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
						<input class="uni-input inputRight" disabled v-model.number="currentvoltage" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">{{$t('adjustingstartvoltage')}}</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" disabled v-model="adjustingstartvoltage" />
					</view>
				</view>
			</view>
		</view>
		<view class="bottomBox">
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<!-- 初始电压 -->
						{{$t('initalvolta')}}(V)
					</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" type="number" @input="replaceInputVoltage"
							v-model.number="initalvolta" placeholder="输出电压(V)" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<!-- 步进电压 -->
						{{$t('stepvolta')}}(V)
					</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" type="number" @input="replaceInputVoltage"
							v-model.number="stepvolta" placeholder="输出电压(V)" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<!-- 脉冲宽度 -->
						{{$t('duration')}}(ms)
					</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" type="number" @input="replaceInputVoltage"
							v-model.number="stepvolta" placeholder="输出电压(V)" />
					</view>
				</view>
			</view>
			
			<view class="uni-list bottomItem">
			  <view class="uni-list-cell">
			    <view class="uni-list-cell-left">模式</view>
			    <view class="uni-list-cell-db lineHang">
			      <picker @change="bindPickerChangeTest" :value="indexOperate" :range="arrOperate" :range-key="'name'">
			        <view class="uni-input showFont">{{arrOperate[indexOperate].name}}</view>
			      </picker>
			    </view>
			    <span class="icon iconfont myIconEnd">&#xe687;</span>
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
				currentvoltage: 220,
				adjustingstartvoltage: '合闸',
				initalvolta: 220,
				stepvolta: 10,
				duration: 200,
				arrOperate: [{
					name: this.$t('continued'),
					value: 1
				},{
					name: this.$t('once'),
					value: 2
				}],
				indexOperate: 0
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
			
			.lineHang {
			  .showFont {
			    text-align: right;
			    padding-right: 10px;
			    color: #007AFF;
			
			  }
			
			}
			
			.myIconEnd {
			  color: #ccc;
			  margin-right: 20px;
			  height: 60rpx;
			}
		}
	}
</style>
