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
			case 'Unreal Engine':
				if(color === "white")
					return 'images/Unreal_Engine_Horiz_Black.png';
				else
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