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
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Art Lead'
				],
				skills: {
					programming: [
						'C#'
					],
					teamwork: false,
					gameDesign: true
				},
				collaborators: [
					
				],
				affiliations: [
					'Digital Worlds Institute',
					'University of Florida'
				],
				description: "Seed is a game.",
				albumUrl: ""
			}
		}
	})
	
	.state('app.games.pacific-armada', {
		name: 'pacific-armada',
		url: '/pacific-armada',
		views: {
			'content@': {
				templateUrl: 'games/views/game.tpl.html',
				controller: 'GameCtrl'
			}
		},
		data: {
			game: {
				title: 'Pacific Armada',
				engine: 'Unity',
				year: '2015',
				platforms: [
					'PC',
					'OSX'
				],
				roles: [
					'Lead Designer',
					'Lead Programmer'
				],
				skills: {
					programming: [
						'C#'
					],
					teamwork: true,
					gameDesign: true
				},
				collaborators: [
					{
						name: 'Absinthe Wu',
						url: 'http://absinthe-wu.com',
						roles: [
							'Art Lead'
						]
					}
				],
				affiliations: [
					'Digital Worlds Institute',
					'University of Florida'
				],
				description: "Pacific Armada is a game.",
				albumUrl: ""
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
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Art Lead'
				],
				skills: {
					programming: [
						'C++',
						'Blueprints'
					],
					teamwork: true,
					gameDesign: true
				},
				collaborators: [
					{
						name: 'Absinthe Wu',
						url: 'http://absinthe-wu.com',
						roles: [
							'Artist'
						]
					}
				],
				affiliations: [
					'Digital Worlds Institute',
					'University of Florida'
				],
				description: "Wonderland is a tech demo showcasing skills in Unreal Engine, including level design, Blueprints, C++ programming, and Matinee.",
				albumUrl: ""
			}
		}
	})
	
	.state('app.games.messagecraft', {
		name: 'messagecraft',
		url: '/messagecraft',
		views: {
			'content@': {
				templateUrl: 'games/views/game.tpl.html',
				controller: 'GameCtrl'
			}
		},
		data: {
			game: {
				title: 'MessageCraft',
				engine: 'AngularJS',
				year: '2016',
				platforms: [
					'Web'
				],
				roles: [
					'Designer',
					'Front-End Programmer'
				],
				skills: {
					programming: [
						'JavaScript',
						'jQuery',
						'HTML',
						'CSS'
					],
					teamwork: true,
					gameDesign: true
				},
				collaborators: [
					{
						name: 'Andrew Briz',
						url: 'http://andrewbriz.com',
						roles: [
							'Designer',
							'Back-End Programmer'
						]
					},
					{
						name: 'Thamas McGowan',
						url: '',
						roles: [
							'Lead Writer'
						]
					}
				],
				affiliations: [
					'Digital Worlds Institute',
					'University of Florida'
				],
				description: "MessageCraft is a cool game.",
				albumUrl: ""
			}
		}
	})
	;
});