var mapp = angular.module('mapp', ['ngRoute']);

// configure our routes
mapp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'templates/home/home.html',
			controller  : 'homeController'
		})
		
		.when('/about', {
			templateUrl : 'templates/about/about.html',
			controller  : 'aboutController'
		});

});