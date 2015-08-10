(function(){

	var indexFactory = function(){

		var factory = {
			welcome: 'Welcome to the very simple ng boilerplate.',
			about: 'The goal is to have a basic directory structure to get started for my projects and if you like it, enjoy and kickstart you next ng app.',
			author: 'Ricardo Pancini <rpancini@gmail.com/>'
		};

		factory.getWelcome = function(){
			return factory.welcome;
		};

		factory.getAbout = function(){
			return factory.about;
		};

		return factory;
	};


	indexFactory.$inject = [];

	angular.module('simpleNgApp')
	.factory('indexFactory',indexFactory);

}());