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