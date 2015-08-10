(function(){
	var app = angular.module('simpleNgApp', ['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
		.when('/', { 
			controller: 'indexController',
			templateUrl: '/app/views/index.html'
		})
		.otherwise({ redirectTo: '/' });
	});

}());