"use strict";angular.module("portfolioSiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app",{url:"/",views:{header:{templateUrl:"views/header.html"},content:{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"},footer:{templateUrl:"views/footer.html"}}}).state("app.about",{url:"about",views:{"content@":{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}}}).state("app.contact",{url:"contact",views:{"content@":{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}}}).state("app.games",{url:"games",views:{"content@":{templateUrl:"views/games.html",controller:"GamesCtrl",controllerAs:"games"}}}).state("app.models",{url:"models",views:{"content@":{templateUrl:"views/models.html",controller:"ModelsCtrl",controllerAs:"models"}}}).state("app.anim",{url:"anim",views:{"content@":{templateUrl:"views/anim.html",controller:"AnimCtrl",controllerAs:"anim"}}}).state("app.3d",{url:"3d",views:{"content@":{templateUrl:"views/3d.html",controller:"3dCtrl",controllerAs:"3d"}}}).state("app.pacific-armada",{url:"Pacific-Armada",views:{"content@":{templateUrl:"views/game.html",controller:"GameCtrl",controllerAs:"game"}}}).state("app.stage",{url:"Stage",views:{"content@":{templateUrl:"views/game.html",controller:"GameCtrl",controllerAs:"game"}}}).state("app.pacific-armada-redux",{url:"Pacific-Armada-Redux",views:{"content@":{templateUrl:"views/game.html",controller:"GameCtrl",controllerAs:"game"}}}),b.otherwise("/")}]),angular.module("portfolioSiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("HeaderCtrl",["$scope","$state",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.gamesList=[{engine:"Unreal Engine",games:[{title:"Stage",link:"app.stage"},{title:"Pacific Armada Redux",link:"app.pacific-armada-redux"}]},{engine:"Unity",games:[{title:"Pacific Armada",link:"app.pacific-armada"}]}],a.$state=b}]),angular.module("portfolioSiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("3dCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("GamesCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("AnimCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("ModelsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioSiteApp").controller("GameCtrl",["$scope",function(a){function b(a){for(var b=0,c=e.length;c>b;b++)e[b].id=a.pop()}function c(){for(var a=[],b=0;f>b;++b)a[b]=b;return d(a)}function d(a){var b,c,d=a.length;if(d)for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a}a.myInterval=5e3,a.noWrapSlides=!1,a.active=0;var e=a.slides=[],f=0;a.addSlide=function(){var a=600+e.length+1;e.push({image:"//unsplash.it/"+a+"/300",text:["Nice image","Awesome photograph","That is so cool","I love that"][e.length%4],id:f++})},a.randomize=function(){var a=c();b(a)};for(var g=0;4>g;g++)a.addSlide()}]),angular.module("portfolioSiteApp").run(["$templateCache",function(a){a.put("views/3d.html",'<div class="container"> <div class="row"> <p>This is the 3D view.</p> </div> </div>'),a.put("views/about.html",'<div class="container"> <div class="row"> <p>This is the About view.</p> </div> </div>'),a.put("views/anim.html",'<div class="container"> <div class="row"> <p>This is the Animation view.</p> </div> </div>'),a.put("views/contact.html",'<div class="container"> <div class="row"> <p>This is the Contact view.</p> </div> </div>'),a.put("views/footer.html",'<div class="container"> <p align="center"><span class="glyphicon glyphicon-info-sign"></span> <small>by Brent Shay Lopez</small></p> </div>'),a.put("views/game.html",'<div ng-controller="GameCtrl"> <div> <div uib-carousel active="active" interval="myInterval" no-wrap="noWrapSlides"> <div uib-slide ng-repeat="slide in slides track by slide.id" index="slide.id"> <img ng-src="{{slide.image}}"> <div class="carousel-caption"> <h4>Slide {{slide.id}}</h4> <p>{{slide.text}}</p> </div> </div> </div> </div> </div>'),a.put("views/games.html",'<div class="container"> <div class="row"> <p>This is the Games Gallery view.</p> </div> </div>'),a.put("views/header.html",'<div class="navbar navbar-default" role="navigation" ng-controller="HeaderCtrl"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" ui-sref="app">Brent Shay Lopez</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <!-- <li ng-class="{\'active\': $state.current.name == \'app\'}"><a ui-sref="app">Home</a></li> --> <li class="dropdown"> <a class="dropdown-toggle">Games <span class="caret"></span></a> <ul class="dropdown-menu"> <li class="dropdown-header">Unreal Engine 4</li> <li ng-repeat="game in gamesList[0].games" class="{\'active\': $state.current.name == \'{{game.link}}\'}"><a ui-sref="{{game.link}}">{{game.title}}</a></li> <li class="divider"></li> <li class="dropdown-header">Unity</li> <li ng-repeat="game in gamesList[1].games" class="{\'active\': $state.current.name == \'{{game.link}}\'}"><a ui-sref="{{game.link}}">{{game.title}}</a></li> </ul> </li> <li class="dropdown"> <a class="dropdown-toggle">3D <span class="caret"></span></a> <ul class="dropdown-menu"> <li class="dropdown-header">Maya</li> <li><a ui-sref="app.models" ng-class="{\'active\': $state.current.name == \'app.models\'}">Modeling</a></li> <li ng-class="{\'active\': $state.current.name == \'app.anim\'}"><a ui-sref="app.anim">Animation</a></li> </ul> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li ng-class="{\'active\': $state.current.name == \'app.about\' || }"><a ui-sref="app.about">About</a></li> <li ng-class="{\'active\': $state.current.name == \'app.contact\'}"><a ui-sref="app.contact"> Contact</a></li> </ul> </div> </div> </div>'),a.put("views/main.html",'<header class="jumbotron"> <h1>Hello and Welcome!</h1> <p class="lead"> <img src="images/thumbnail.8c86bf11.jpg" class="img-circle" alt="I\'m Brent"><br> I\'m Brent and I make games! </p> </header> <div class="row marketing"> <p align="center">This site is a work in progress. Please come back when it\'s ready!</p> </div> <!-- Gallery view for all projects --> <div class="container-fluid"> <div class="row row-content"> <div class="col-xs-12 col-sm-6 col-md-3"> <a href="#" class="thumbnail"> <img class="img-responsive" src="images/stage/1.0d787598.jpg" alt="Stage"> </a> </div> <div class="col-xs-12 col-sm-6 col-md-3"> <a href="#" class="thumbnail"> <img class="img-responsive" src="images/stage/2.97da6fad.jpg" alt="Stage"> <div class="caption"> <p>Test caption.</p> </div> </a> </div> <div class="col-xs-12 col-sm-6 col-md-3"> <a href="#" class="thumbnail"> <img class="img-responsive" src="images/stage/3.f7ce5993.jpg" alt="Stage"> </a> </div> <div class="col-xs-12 col-sm-6 col-md-3"> <a href="#" class="thumbnail"> <img class="img-responsive" src="images/stage/1.0d787598.jpg" alt="Stage"> </a> </div> </div> </div>'),a.put("views/models.html",'<div class="container"> <div class="row"> <p>This is the Models view.</p> </div> </div>')}]);