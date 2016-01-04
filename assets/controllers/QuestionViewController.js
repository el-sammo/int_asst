(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Controllers: QuestionView
	///
	app.controller('QuestionViewController', controller);
	
	controller.$inject = [
		'$scope', '$http', '$routeParams', '$rootScope', 
		'signupPrompter', 'customerMgmt', 'questionMgmt'
	];

	function controller(
		$scope, $http, $routeParams, $rootScope, 
		signupPrompter, customerMgmt, questionMgmt,
	) {

		var getQuestionPromise = questionMgmt.getQuestion($routeParams.id);
		getQuestionPromise.then(function(questionData) {
			console.log('questionData:');
			console.log(questionData);
			$scope.questionData = questionData;
		}).catch(function(err) {
			console.log('questionMgmt.getQuestion() failed');
			console.log(err);
		});

	}

}());
