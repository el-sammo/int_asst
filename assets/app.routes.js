(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Routes
	///

	app.config(config);
	
	config.$inject = [
		'$routeProvider', '$locationProvider'
	];
	
	function config($routeProvider, $locationProvider) {
		///
		// Tester Page
		///

		$routeProvider.when('/tester', {
			controller: 'TesterController',
			templateUrl: '/templates/tester.html'
		});


		///
		// Account
		///

		$routeProvider.when('/account', {
			controller: 'AccountController',
			templateUrl: '/templates/account.html'
		});

		$routeProvider.when('/account/edit/:id', {
			controller: 'AccountEditController',
			templateUrl: '/templates/accountForm.html'
		});


		///
		// Home
		///

		$routeProvider.when('/', {
			controller: 'HomeController',
			templateUrl: '/templates/home.html'
		});


		///
		// Questions
		///

		$routeProvider.when('/question/:id', {
			controller: 'QuestionViewController',
			templateUrl: '/templates/questionView.html'
		});


		///
		// Other
		///

		$routeProvider.otherwise({
			redirectTo: '/'
		});


		///
		// HTML5 Routing (no hash)
		///
		
		$locationProvider.html5Mode(true);
	}

}());
