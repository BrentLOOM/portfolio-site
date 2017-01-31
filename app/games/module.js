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
				tagline: "Weather the storm. Or become one.",
				platforms: [
					'Android',
					'iOS'
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Lead Writer',
					'Art Lead'
				],
				skills: {
					programming: [
						'C#'
					],
					software: [
						'Maya',
						'Adobe Photoshop CS6'
					]
				},
				collaborators: [
					
				],
				affiliations: [
					'Digital Worlds Institute',
					'University of Florida'
				],
				engineColor: "white",
				albumId: "",
				bgUrl: "/images/covers/seed-temp.jpg"
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
				tagline: "The ocean's not your only enemy.",
				platforms: [
					'PC',
					'OSX'
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Lead Writer'
				],
				skills: {
					programming: [
						'C#'
					],
					software: [
						'Photoshop CS6',
						'Illustrator CS6'
					]
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
				engineColor: "black",
				albumId: "",
				bgUrl: "/images/covers/PA-bg.jpg"
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
				tagline: "Curiouser and curiouser.",
				platforms: [
					'PC'
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Lead Writer',
					'Art Lead'
				],
				skills: {
					programming: [
						'C++',
						'Blueprints'
					],
					software: [
						'Maya',
						'Photoshop CS6'
					]
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
				engineColor: "black",
				albumId: "",
				bgUrl: ""
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
				tagline: "Forging Meaning Behind Media Narratives.",
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
					software: [
						
					]
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
				engineColor: "black",
				albumId: "",
				bgUrl: ""
			}
		}
	})
	
	.state('app.games.pixel-hopper', {
		name: 'pixel-hopper',
		url: '/pixel-hopper',
		views: {
			'content@': {
				templateUrl: 'games/views/game.tpl.html',
				controller: 'GameCtrl'
			}
		},
		data: {
			game: {
				title: 'Pixel Hopper',
				engine: 'Processing',
				year: '2014',
				tagline: "The resolution revolution is here.",
				platforms: [
					'PC'
				],
				roles: [
					'Lead Designer',
					'Lead Programmer',
					'Lead Artist'
				],
				skills: {
					programming: [
						'Java',
						'Processing'
					],
					software: [
						'GIMP'
					]
				},
				collaborators: [
					
				],
				affiliations: [
					'University of Florida'
				],
				engineColor: "black",
				albumId: "http://imgur.com/a/qcAJW",
				bgUrl: "/images/covers/PH-bg.jpg"
			}
		}
	})
	;
});