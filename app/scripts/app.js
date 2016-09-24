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
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl',
				controllerAs: 'contact'
			}
		}
	})
	
	.state('app.games', {
		url: 'games',
		views: {
			'content@': {
				templateUrl: 'views/games.html',
				controller: 'GamesCtrl',
				controllerAs: 'games'
			}
		}
	})
	
	.state('app.models', {
		url: 'models',
		views: {
			'content@': {
				templateUrl: 'views/models.html',
				controller: 'ModelsCtrl',
				controllerAs: 'models'
			}
		}
	})
	
	.state('app.anim', {
		url: 'anim',
		views: {
			'content@': {
				templateUrl: 'views/anim.html',
				controller: 'AnimCtrl',
				controllerAs: 'anim'
			}
		}
	})
	
	.state('app.3d', {
		url: '3d',
		views: {
			'content@': {
				templateUrl: 'views/3d.html',
				controller: '3dCtrl',
				controllerAs: '3d'
			}
		}
	})
	
	;
	
	$urlRouterProvider.otherwise('/');
	
	// Use the HTML 5 History API
	//$locationProvider.html5Mode(true);

  })

;
