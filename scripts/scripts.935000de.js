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
'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the app
 */
angular.module('app').controller('NavCtrl', function ($scope) {
	
	$scope.navbarCollapsed = true;
	$scope.footerCollapsed = true;
	
	
	
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
			case 'Unreal Engine':
				return 'images/Unreal_Engine_Horiz_Black.png';
			case 'AngularJS':
				return 'images/AngularJS-large.png';
			default:
				return 'images/mwu-logo-rgb.png';
		}	
	};
	
	
	$scope.platformLabel = function(platform){
		switch(platform){
			case 'Android':
				return 'label-success';
			case 'OSX':
			case 'iOS':
				return 'label-info';
			case 'PC':
				return 'label-default';
			case 'Web':
				return 'label-primary';
			default:
				return 'label-danger';
		}
	};
	
	$scope.platformIcon = function(platform){
		switch(platform){
			case 'Android':
				return 'fa-android';
			case 'OSX':
			case 'iOS':
				return 'fa-apple';
			case 'PC':
				return 'fa-windows';
			case 'Web':
				return 'fa-globe';
			default:
				return '';
		}
	};
});