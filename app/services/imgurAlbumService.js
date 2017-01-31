"use strict";

angular.module('app').service('imgurAlbumService', function($http){
	this.baseUrl = 'https://api.imgur.com/3/album/';
	
	this.getAlbum = function(albumId){
		return $http.get(this.baseUrl + albumId, {
			headers: {
				Authorization: 'Client-ID 3cabdd994ca49e6',
        		Accept: 'application/json'
			}
		}).then(function(response){
			return response.data.data.images.map(function(value, index){
				return {
					url: value.link,
					title: value.title,
					description: value.description
				};
			});
		}, function(response){
			console.log(response);
		});
	};
});