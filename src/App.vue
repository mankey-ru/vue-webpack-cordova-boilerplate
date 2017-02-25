<template>
	<div>
		<div class="row">
			<div class="col-sm-12">
				<router-link v-bind:to="{name: 'StartPage'}" active-class="active" class="btn btn-default">
					Start page
				</router-link>
			</div>
			<div class="col-sm-12 text-right">
				<router-link v-bind:to="{name: 'AboutPage'}" active-class="active" class="btn btn-default">
					<i class="glyphicon glyphicon-info-sign"></i> About
				</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import routes from './_routes.js';
	export default {
		name: 'App',
		data: function () {
			return {
				routes: routes
			}
		}
	}
</script>

<style>
</style>
