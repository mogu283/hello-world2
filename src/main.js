import Vue from 'vue'
import App from './App.vue'
 import router from './router'
 import store from './store'
 import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
   apiKey: 'AIzaSyBwdYTgkcGmXxPq9I2jiImz74vcA_2ZbN8',
   projectId: 'test-b76fc',
   authDomain: 'test-b76fc.firebaseapp.com',
   databaseURL: 'https://test-b76fc.firebaseio.com',
   storageBucket: 'test-b76fc.appspot.com',
   };
  
   firebase.initializeApp(config);
  
   export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
