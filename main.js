import App from './App'
import messages from './locale/index'
import {HFdebugging} from '@/uni_modules/HF-HF_debugging/common/next.js'
let i18nConfig = {
  locale: uni.getLocale(),
  messages
}
// #ifndef VUE3

import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)

// import VConsole from 'vconsole'
// new VConsole()

const bt = uni.requireNativePlugin('Common-BT');

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  i18n,
  bt,
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