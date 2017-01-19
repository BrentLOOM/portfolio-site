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