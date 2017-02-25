import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './_routes.js';

Vue.use(VueRouter);
const router = new VueRouter({
	routes: routes
});

window.VUEI = new Vue({
	el: '#vue-app',
	router: router,
	render: function (h) {
		return h(App)
	},
	mounted: function () {},
	methods: {}
})