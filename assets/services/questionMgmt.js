(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Question Management
	///

	app.factory('questionMgmt', service);
	
	service.$inject = [
		'$http', '$q', '$sce', 'configMgr', 'querystring'
	];
	
	function service(
		$http, $q, $sce, configMgr, querystring
	) {
		var getQuestionPromise;

		var service = {
			getQuestion: function(questionId) {
				if(getQuestionPromise) {
					return getQuestionPromise;
				}

				var url = '/questions/' + questionId;
				getQuestionPromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getQuestionPromise;
			}
		};

		return service;
	}

}());
