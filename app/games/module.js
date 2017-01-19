"use strict";

angular.module('app.games', []).config(function ($stateProvider) {
	$stateProvider
	.state('app.games', {
		abstract: true,
		url: 'games',
		template: '<ui-view />'
	})
	
	.state('app.games.seed', {
		name: 'seed',
		url: '/seed',
		views: {
			'content@': {
				templateUrl: 'games/views/game.tpl.html',
				controller: 'GameCtrl'
			}
		},
		data: {
			game: {
				title: 'Seed',
				engine: 'Unity',
				year: '2017',
				platforms: [
					'Android',
					'iOS'
				]
			}
		}
	})
	
	.state('app.games.wonderland', {
		name: 'wonderland',
		url: '/wonderland',
		views: {
			'content@': {
				templateUrl: 'games/views/game.tpl.html',
				controller: 'GameCtrl'
			}
		},
		data: {
			game: {
				title: 'Wonderland',
				engine: 'Unreal Engine',
				year: '2016',
				platforms: [
					'PC'
				]
			}
		}
	})
	;
});