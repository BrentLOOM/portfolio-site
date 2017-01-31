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
	'ui.bootstrap',
	'ngParallax',
	'bootstrapLightbox',

	'app.about',
	'app.animation',
	'app.games',
	'app.home',
	'app.models',
	'app.resume',
	'app.sites',
	'app.videos'
])

.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

	
    $stateProvider
		.state('app', {
			abstract: true,
			url: '/',
			views: {
				'header': {
					templateUrl: 'navigation/views/header.html',
					controller: 'NavCtrl'
				},
				'footer': {
					templateUrl: 'navigation/views/footer.html',
					controller: 'NavCtrl'
				}
			}
				
		});
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/home');
	//$locationProvider.html5Mode(true);
});