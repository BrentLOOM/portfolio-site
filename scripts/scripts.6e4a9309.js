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
"use strict";

angular.module('app.about', []).config(function ($stateProvider) {
	$stateProvider
		.state('app.about', {
			name: 'About',
			url: 'about',
			views: {
				'content@': {
					templateUrl: 'about/views/about.html',
					controller: 'AboutCtrl'
				}
			}		
		});
	
});
'use strict';

/**
 * @ngdoc function
 * @name app.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

"use strict";

angular.module('app.animation', []).config(function () {

});
"use strict";

angular.module('app.home', []).config(function ($stateProvider) {
	
    $stateProvider
		.state('app.home', {
			name: 'Brent Shay Lopez',
			url: 'home',
			views: {
				'content@': {
					templateUrl: 'home/views/main.html',
					controller: 'MainCtrl'
				}
			}			
		});
	
});
'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app.home').controller('MainCtrl', function ($scope) {

	$scope.categories = [
		{
			title: 'Games',
			content: []
		},
		{
			title: 'Models',
			content: []
		},
		{
			title: 'Animations',
			content: []
		},
		{
			title: 'Sites',
			content: []
		}
	];
});

"use strict";

angular.module('app.models', []).config(function () {

});
"use strict";

angular.module('app.sites', []).config(function () {

});
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
				affliations: [
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
				affliations: [
					'University of Florida'
				],
				description: "",
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
							
						]
					}
				],
				affliations: [
					'University of Florida'
				],
				description: "",
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
				affliations: [
					'University of Florida'
				],
				description: "MessageCraft is a cool game.",
				albumUrl: ""
			}
		}
	})
	;
});
'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app.games').controller('GameCtrl', function ($scope, $state) {

	$scope.game = $state.current.data.game;
	
	$scope.engineCredit = function(engine){
		switch(engine){
			case 'Unity':
				return 'images/mwu-logo-rgb.png';
				break;
			case 'Unreal Engine':
				return 'images/Unreal_Engine_Horiz_Black.png';
				break;
			case 'AngularJS':
				return 'images/AngularJS-large.png';
				break;
			default:
				return 'images/mwu-logo-rgb.png';
				break;
		}	
	};
	
	
	$scope.platformLabel = function(platform){
		switch(platform){
			case 'Android':
				return 'label-success';
				break;
			case 'OSX':
			case 'iOS':
				return 'label-info';
				break;
			case 'PC':
				return 'label-default';
				break;
			case 'Web':
				return 'label-primary';
			default:
				return 'label-danger';
				break;
		}
	};
	
	$scope.platformIcon = function(platform){
		switch(platform){
			case 'Android':
				return 'fa-android';
				break;
			case 'OSX':
			case 'iOS':
				return 'fa-apple';
				break;
			case 'PC':
				return 'fa-windows';
				break;
			case 'Web':
				return 'fa-globe';
				break;
			default:
				return '';
				break;
		}
	};
});