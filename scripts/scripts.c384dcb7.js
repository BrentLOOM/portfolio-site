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
		},
		{
			title: 'Video Productions',
			content: []
		},
	];
});

"use strict";

angular.module('app.models', []).config(function () {

});
"use strict";

angular.module('app.resume', []).config(function ($stateProvider) {
	$stateProvider
	
	.state('app.resume', {
		name: 'resume',
		url: 'resume',
		views:{
			'content@': {
				templateUrl: '/resume/views/resume.html',
				controller: 'ResumeCtrl'
			}
		}
	});
});
"use strict";

angular.module('app.resume').controller('ResumeCtrl', function($scope){
	$scope.progLanguages = [
		{
			level: "Fluent",
			langs: [
				'C#',
				'HTML',
				'JavaScript',
				'CSS',
				'C++'
			]
		},
		{
			level: "Proficient",
			langs: [
				'Java',
				'C',
				'PHP'
			]
		}
	];
	
	
	$scope.engineImagePaths = [
		"images/unity-logo-rgb.png",
		"images/Unreal_Engine_Horiz_Black.png"
	];
	
	$scope.creativeSoftware = [
		{
			brand: "Adobe",
			programs: [
				{
					name: "Photoshop CS6",
					tags: [
						"Photo-Editing",
						"Texture Editing"
					]
				},
				{
					name: "Premiere Pro CS6",
					tags: [
						"Video Editing"				
					]
				},
				{
					name: "After Effects CS6",
					tags: [
						"Video Composition",
						"Motion Graphics",
						"VFX"
					]
				}
			]
			
		},
		{
			brand: "Avid",
			programs: [
				{
					name: "Pro Tools",
					tags: [
						"Audio Mixing",
						"Audio Editing"
					]
				}
			]
			
		},
		{
			brand: "Autodesk",
			programs: [
				{
					name: "Maya",
					tags: [
						"Low-Poly Modeling",
						"High-Poly Modeling",
						"3D Animation"
					]
				}
			]
			
		}
	];
	
	$scope.spokenLangs = [
		{
			level: "Fluent",
			langs: [
				"English",
				"Spanish"
			]
		},
		{
			level: "Proficient",
			langs: [
				
			]
		},
		{
			level: "Conversational",
			langs: [
				"French"
			]
		}
	];
});
"use strict";

angular.module('app.sites', []).config(function () {

});
"use strict";

angular.module('app.videos', []).config(function ($stateProvider) {
	$stateProvider
	
	.state('app.videos', {
		name: 'videos',
		url: 'video-production',
		views:{
			'content@': {
				templateUrl: '/videos/views/videos.html',
				controller: 'VideoCtrl'
			}
		}
	});
});
angular.module('app.videos').controller('VideoCtrl', function(){
	
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
		
	$scope.engineCredit = function(engine, color){
		switch(engine){
			case 'Unity':
				if(color === "white")
					return 'images/mwu-logo-white-rgb.png';
				else
					return 'images/mwu-logo-rgb.png';
				/* falls through */
			case 'Unreal Engine':
				if(color === "white")
					return 'images/Unreal_Engine_Horiz_Black.png';
				else
					return 'images/Unreal_Engine_Horiz_Black.png';
				/* falls through */
			case 'AngularJS':
				return 'images/AngularJS-large.png';
				/* falls through */
			case 'Processing':
				return 'images/Processing.png';
				/* falls through */
			default:
				return 'images/mwu-logo-rgb.png';
		}	
	};
	
	
	$scope.platformLabel = function(platform){
		switch(platform){
			case 'Android':
				return 'label-success';
				/* falls through */
			case 'OSX':
				/* falls through */
			case 'iOS':
				return 'label-info';
				/* falls through */
			case 'PC':
				return 'label-default';
				/* falls through */
			case 'Web':
				return 'label-primary';
				/* falls through */
			default:
				return 'label-danger';
		}
	};
	
	$scope.platformIcon = function(platform){
		switch(platform){
			case 'Android':
				return 'fa-android';
				/* falls through */
			case 'OSX':
				/* falls through */
			case 'iOS':
				return 'fa-apple';
				/* falls through */
			case 'PC':
				return 'fa-windows';
				/* falls through */
			case 'Web':
				return 'fa-globe';
				/* falls through */
			default:
				return '';
		}
	};
	
	$scope.bg = {
		'background-image':'url(' + $scope.game.bgUrl + ') no-repeat center center', 
  		'position': 'fixed',
  		'width': '100%',
  		'height': '350px', 
  		'top': '0',
  		'left': '0',
		'z-index': '-1'
	};	

});
'use strict';
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'ngParallax';
}
angular.module('ngParallax',[]);
angular.module('ngParallax').directive('ngParallax', [
  '$timeout',
  function ($window, $timeout) {
    return {
        restrict: 'AE',
        scope:{
          pattern: '=',
          speed: '='
        },
        link: function(scope, elem, attr) {

          window.mobileAndTabletcheck = function() {
            if( navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPad/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i)
             ){
              return true;
             }
             else{
              return false;
            }
          };
			
		  var bump = -270;

          var bgObj = elem[0];
              bgObj.style.backgroundRepeat = "inherit";
              bgObj.style.backgroundAttachment = "fixed";
              bgObj.style.height = "100%";
              //bgObj.style.margin = "0 auto";
              bgObj.style.position = "relative";
			  //bgObj.style.verticalAlign = "bottom";
              bgObj.style.background = "url(" + scope.pattern + ") no-repeat";
              bgObj.style.backgroundAttachment = 'fixed';
			  bgObj.style.backgroundPositionX = '50%';
			  bgObj.style.backgroundPositionY = bump + 'px';
			
		
          var isMobile = window.mobileAndTabletcheck();


          function execute(){

              var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              var speed = (scrollTop / scope.speed);
              if(isMobile){
                speed = speed * 0.10;
              }
              if(speed === 0){
                bgObj.style.backgroundPositionY = bump + '%';
              }
              else{
                bgObj.style.backgroundPositionY = (bump + speed) + '%';
              }

          }

          // for mobile
          window.document.addEventListener("touchmove", function(){
              execute();
          });

          // for browsers
          window.document.addEventListener("scroll", function() {
              execute();
          });

          execute();

        },

    };
  }
]);

"use strict";

angular.module('app').service('imgurAlbumService', function($http){
	this.baseUrl = 'https://api.imgur.com/3/';
	
	this.getAlbum = function(){
		
	};
});