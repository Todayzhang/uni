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
						<input class="uni-input inputRight" type="number" :min="5" :max="270" @input="replaceInputVoltage"
							v-model.number="currentvoltage" placeholder="输出电压(V)" @blur="setCurrentVoltage" />
					</view>
				</view>
			</view>
			<view class="uni-list bottomItem">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">{{$t('adjustingstartvoltage')}}</view>
					<view class="btns">
						<button @click="sendData('02', '050618')" style="margin-right: 10rpx;" class="mini-btn" type="primary" size="mini">合闸</button>
						<button @click="sendData('01', '050618')" class="mini-btn" type="primary" size="mini">分闸</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { bleBoole } from '../../mixins/mixins.js'

	export default {
		name: 'manual',
		mixins: [bleBoole],
		props:['getMsgResult'],
		data() {
			return {
				currentvoltage: 220,
				setHead: '6aa6',
        		getHead: '6aa6',
			}
		},
		create() {
			// 6A A6 07 06 0b 07 00 96 b5
			let newData = this.getMsgResult
			console.log('getMsgResult', newData)
			// 初始电压
			this.currentvoltage = parseInt(newData.slice(14,16),16)
		},
		methods: {
			initData(val) {
				// 6A A6 07 06 0b 07 00 96 b5
				// 初始电压
				this.currentvoltage = parseInt(val.slice(14,16),16)
			},
			replaceInputVoltage(event) {
				var value = event.target.value;
				if (value > 250) {
					this.currentvoltage = 250;
				} else if (value < 5) {
					this.currentvoltage = 5
				}
			},

			setCurrentVoltage() {
				const value = this.$largechangeTosixty(this.currentvoltage)
				this.sendData(value, '060617')
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
			
			.btns {
				display: flex;
				padding: 10rpx 0;
			}
		}
	}
</style>
