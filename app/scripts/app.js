'use strict';

/**
 * @ngdoc overview
 * @name portfolioSiteApp
 * @description
 * # portfolioSiteApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ])
	
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
		.state('app', {
		url:'/',
		views: {
			'header': {
				templateUrl : 'views/header.html',
			},
			'content': {
				templateUrl : 'views/main.html',
				controller  : 'MainCtrl',
				controllerAs: 'main'
			},
			'footer': {
				templateUrl : 'views/footer.html',
			}
		}
	})
	
	.state('app.about', {
		url: 'about',
		views: {
			'content@': {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			}
		}
	})
	
	.state('app.contact', {
		url: 'contact',
		views: {
			'content@': {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/');
	
	// Use the HTML 5 History API
	$locationProvider.html5Mode(true);

  })

;
