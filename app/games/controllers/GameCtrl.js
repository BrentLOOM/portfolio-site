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
			default:
				return '';
				break;
		}
	};
});