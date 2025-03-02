import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import VueSweetAlert from "vue-sweetalert2";
import SocketIO from 'socket.io-client'
import router from "./router.js";
import App from "./App.vue";
import Colors from "./styles/variables.scss";
import "./registerServiceWorker";
import LoadScript from "vue-plugin-load-script";

// Bulma
import "./styles/index.scss";

Vue.config.productionTip = false;

// Vue + Socket.io
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "https://scrbbl-ucla.herokuapp.com/",
    //connection: "http://localhost:5050",
  })
);

// SweetAlert2
Vue.use(VueSweetAlert, {
  confirmButtonColor: Colors.primary,
  cancelButtonColor: Colors.light,
});

// Initializing
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
