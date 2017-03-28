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

	var login = {
		name: 'login',
		url: '/login',
		templateUrl: '/view/login.html'
	}

	var regist = {
		name: 'regist',
		url: '/regist',
		templateUrl: '/view/regist.html'
	}

	$stateProvider.state(helloState);
	$stateProvider.state(aboutState);
	$stateProvider.state(login);
	$stateProvider.state(regist);
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
app.controller('regist', function ($scope, $http) {
	$scope.registSubmit = function () {
		$http({
			method: 'POST',
			data: { name: $scope.name, password: $scope.password },
			url: '/user'
		}).then(function successCallback(response) {
			// 请求成功执行代码
			console.log(response.data);
			//$scope.dab = response.data;
		}, function errorCallback(response) {
			// 请求失败执行代码
		});
	}

});

app.controller('login', function ($scope, $http) {
	$scope.login = function () {
		$http({
			method: 'POST',
			data: { name: $scope.name, password: $scope.password },
			url: '/userlogin'
		}).then(function successCallback(response) {
			// 请求成功执行代码
			console.log(response.data);
			//$scope.dab = response.data;
		}, function errorCallback(response) {
			// 请求失败执行代码
		});
	}

});

