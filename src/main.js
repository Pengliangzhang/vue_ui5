import Vue from 'vue'
import App from './App.vue'
import router from './routers'
// import '@/styles/index.scss' // global css

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ui5-/];

new Vue({
  router,
  render: h => h(App),
  renderError(h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app');
