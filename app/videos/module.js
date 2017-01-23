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