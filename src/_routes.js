import StartPage from './StartPage.vue';
import AboutPage from './AboutPage.vue';

export default [{
	name: 'StartPage',
	path: '/',
	component: StartPage
}, {
	name: 'AboutPage',
	path: '/about',
	component: AboutPage
}, {
	path: '*',
	component: {
		template: `
			<h1 class="text-center"><br/><br/><br/><br/>404</h1>
			`
	}
}]