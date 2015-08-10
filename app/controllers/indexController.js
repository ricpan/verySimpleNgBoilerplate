(function(){

	var indexController = function($scope, indexFactory){

		function init(){
			$scope.welcome = indexFactory.getWelcome();
			$scope.about = indexFactory.getAbout();
		}

		init();

	};

	indexController.$inject = ['$scope', 'indexFactory'];

	angular.module('simpleNgApp')
	.controller('indexController', indexController);

}());