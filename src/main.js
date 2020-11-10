import Vue from 'vue'
import App from './components/App.vue'
import Convert from './components/Convert.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
    
    Vue.use(VueAxios, axios)


new Vue({
   render: h => h(App),
   el: '#app',
})

new Vue({
    render: h => h(Convert),
    el: '#converter',
 })
