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