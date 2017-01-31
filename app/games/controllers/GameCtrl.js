'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app.games').controller('GameCtrl', function ($scope, $state, imgurAlbumService, Lightbox) {

	$scope.game = $state.current.data.game;
	$scope.images = [];

	if($scope.game.albumId.length)
		imgurAlbumService.getAlbum($scope.game.albumId).then(function(response){
			$scope.images = response;
		});
		
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
	
	$scope.openLightboxModal = function (index) {
		Lightbox.openModal($scope.images, index);
	};

});