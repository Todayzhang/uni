<template>
	<view class="uni-flex uni-column">
		<view class="bottomBox">
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<!-- 储能时间 -->
						{{$t('time')}}(s)
					</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" disabled v-model.number="time" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<!-- 瞬时电流 -->
					<view class="uni-list-cell-left">{{$t('current')}}(A)</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" disabled v-model="current" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<!-- 最大电流 -->
					<view class="uni-list-cell-left">{{$t('maxcurrent')}}(A)</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" disabled v-model="maxcurrent" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<!-- 输出电压 -->
					<view class="uni-list-cell-left">{{$t('voltage')}}(V)</view>
					<view class="uni-list-cell-db lineHang">
						<input class="uni-input inputRight" disabled v-model="voltage" />
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
				time: 0.0,
				current: 0.0,
				maxcurrent: 0.0,
				voltage: 0.0,
				setHead: '6aa6',
        		getHead: '6aa6',
			}
		},
		methods: {
			// 开始储能
			start() {
				this.sendData('01','050606')
			},
			// 停止储能
			stop() {
				this.sendData('02','050606')
			},
			sendData(value, code, getCode = undefined) {
				let sendValue = this.setHead + code + value;
				sendValue = sendValue + this.$checkEnd(sendValue)
				console.log('sendValue',sendValue);
				const newCode = getCode ? getCode : code 
				let getModule = this.getHead + newCode + value
				let getValue = getModule + this.$checkEnd(getModule)
				console.log(' getValue',getValue);
				this.sendMsgToDevice(sendValue, getValue, () => {
					console.log('请求成功')
				})
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
