var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider) {
	var helloState = {
		name: 'hello',
		url: '/hello',
		// controller:"myCtrl",
		templateUrl: '/view/show.html'
	}

	var aboutState = {
		name: 'setting',
		url: '/setting',
		templateUrl: '/view/config.html'
	}

	$stateProvider.state(helloState);
	$stateProvider.state(aboutState);
});


app.controller('myCtrl', function ($scope, $http) {



	$scope.firstName = "John";
	$scope.lastName = "Doe";
	//
	$http({
		method: 'GET',
		url: '/thing'
	}).then(function successCallback(response) {
		// 请求成功执行代码
		console.log(response.data);
		$scope.dab = response.data;
	}, function errorCallback(response) {
		// 请求失败执行代码
	});



});
app.controller('myForm', function ($scope, $http) {
	$scope.ddsubmit = function () {
		$http({
			method: 'POST',
			data: { name: $scope.name, url: 'ddddd' },
			url: '/thing'
		}).then(function successCallback(response) {
			// 请求成功执行代码
			console.log(response.data);
			//$scope.dab = response.data;
		}, function errorCallback(response) {
			// 请求失败执行代码
		});
	}

});


