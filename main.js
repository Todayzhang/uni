import { HFdebugging } from '@/uni_modules/HF-HF_debugging/common/next.js'
import App from './App'
import messages from './locale/index'
let i18nConfig = {
  locale: uni.getLocale(),
  messages
}
// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import bluetooth from './common/bluetooth'
import store from './common/store'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.prototype.store = store
Vue.prototype.$bluetooth = bluetooth

// import VConsole from 'vconsole'
// new VConsole()

const bt = uni.requireNativePlugin('Common-BT');

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  i18n,
  bt,
  store,
    ...App
})

// import VConsole from 'vconsole'
 
// const vconsole = require('vconsole')
// Vue.prototype.$vconsole = new vconsole()


app.$mount()
new HFdebugging()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n(i18nConfig)
export function createApp() {
  const app = createSSRApp(App)
  new HFdebugging({app});
  return {
    app
  }
}
// #endif