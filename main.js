// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {
	$http
} from '@escook/request-miniprogram'
import store from './store/store.js'

Vue.config.productionTip = false
uni.$http = $http
App.mpType = 'app'
$http.baseUrl = 'https://api-hmugo-web.itheima.net'
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}
// 请求开始之前做一些事情
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...',
	})
}
// 请求完成之后做一些事情
$http.afterRequest = function() {
	uni.hideLoading()
}
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif