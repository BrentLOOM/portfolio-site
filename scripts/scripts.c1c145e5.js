"use strict";angular.module("portfolioSiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioSiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>Welcome!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> I\'m Brent and I make games! </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Come on in!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <p>This site is a work in progress. Please come back when it\'s ready!</p> <!--\r\n\r\n  <h4>HTML5 Boilerplate</h4>\r\n  <p>\r\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\r\n  </p>\r\n\r\n  <h4>Angular</h4>\r\n  <p>\r\n    AngularJS is a toolset for building the framework most suited to your application development.\r\n  </p>\r\n\r\n  <h4>Karma</h4>\r\n  <p>Spectacular Test Runner for JavaScript.</p>\r\n  --> </div>')}]);