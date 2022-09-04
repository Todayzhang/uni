import store from '../index.js'

const state = {
  bleAddress:'3C:E4:B0:7F:03:F0'
}

const mutations = {
  updateCount(state,num){
    state.bleAddress = num
  }
}

export default {
	state,
	mutations,
}
