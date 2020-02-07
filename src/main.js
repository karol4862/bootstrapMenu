import Vue from 'vue';
import {
  BootstrapVue, CollapsePlugin, NavPlugin, NavbarPlugin,
} from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faCogs, faFolderOpen, faShare, faArchive, faSignOutAlt, faFileAlt, faHome,
  faChevronRight, faUsersCog, faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

library.add(
  faUser, faCogs, faFolderOpen, faShare, faArchive, faSignOutAlt, faHome, faFileAlt,
  faChevronRight, faUsersCog, faFile,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(CollapsePlugin);
Vue.use(NavbarPlugin);
Vue.use(NavPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
