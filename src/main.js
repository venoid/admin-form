import Vue from 'vue';
import App from './App.vue';
import { Field, Checkbox, Switch, Select, Numberinput, Input, Loading, Button, Icon } from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(Field)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Numberinput)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Icon)

new Vue({
  render: h => h(App),
}).$mount('#app');
