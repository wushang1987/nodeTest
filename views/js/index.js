var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state({
		name: "content",
		url: '/',
		// templateUrl: '/view/show.html'
		views: {
			"": { templateUrl: '/view/content.html' },
			"header@content": { templateUrl: '/view/head.html' },
			"body@content": { templateUrl: '/view/show.html' },
		}
	}).state({
		name: 'content.hello',
		url: 'hello',
		views: {
			"body@content": { templateUrl: '/view/show.html' },
		}
		// controller:"myCtrl",
	})
		.state({
			name: 'content.setting',
			url: 'setting',
			views: {
				"body@content": { templateUrl: '/view/config.html' },
			}
		})
		.state({
			name: 'content.login',
			url: 'login',
			views: {
				"body@content": { templateUrl: '/view/login.html' },
			}
		})
		.state({
			name: 'content.regist',
			url: 'regist',
			views: {
				"body@content": { templateUrl: '/view/regist.html' },
			}
		})
		.state({
			name: 'content.setting.list',
			url: '/list',
			views: {
				"ad": { templateUrl: '/view/list.html' },
			}
		})
		.state({
			name: 'content.setting.new',
			url: '/new',
			views: {
				"ad": { templateUrl: '/view/new.html' },
			}
		})
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

