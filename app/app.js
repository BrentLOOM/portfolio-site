'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('app', [
	'ngAnimate',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',

	'ui.router',

	'app.about',
	'app.animation',
	'app.games',
	'app.home',
	'app.models',
	'app.sites'
])

.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

	
    $stateProvider
		.state('app', {
			abstract: true,
			url: '/',
			views: {
				'header': {
					templateUrl: 'navigation/views/header.html'
				},
				'footer': {
					templateUrl: 'navigation/views/footer.html'
				}
			}
				
		});
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/home');
	//$locationProvider.html5Mode(true);
});