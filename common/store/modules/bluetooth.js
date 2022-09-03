import store from '../index.js'

const state = {
  bleAddress:'3C:E4:B0:7F:03:F8'
}

const mutations = {
  updateCount(state,num){
    state.count = num
  }
}

export default {
	state,
	mutations,
}
