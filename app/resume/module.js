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