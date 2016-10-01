'use strict';

/**
 * @ngdoc function
 * @name portfolioSiteApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the portfolioSiteApp
 */
angular.module('portfolioSiteApp')
  .controller('HeaderCtrl', ['$scope', '$state', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	  
	$scope.gamesList = [
		{
			engine: "Unreal Engine",
			games: [
				{
					title: "Stage",
					link: "app.stage"
				},
				{
					title: "Pacific Armada Redux",
					link: "app.pacific-armada-redux"
				}
			]
		},
		{
			engine: "Unity",
			games: [
				{
					title: "Pacific Armada",
					link: "app.pacific-armada"
				}
			]
		}
	];
	  
	$scope.$state = $state;
	  
  }]);
